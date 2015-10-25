$(document).ready(function () {
    document.addEventListener('deviceready', onDeviceReady, false);
});

function onDeviceReady () {
    // Check LocalStorage for channel
    if (localStorage.channel == null || localStorage.channel == '') {
        // Ask user for channel
        $('#popupDialog').popup("open");
    } else {
        var channel = localStorage.getItem('channel');
    }

    getPlaylist(channel);

    $(document).on('click', '#vidlist li', function () {
        showVideo($(this).attr('videoId'));
    });

    $('#channelBtnOK').click(function () {
        var channel = $('#channelName').val();
        setChannel(channel);
        getPlaylist(channel);
    });

    $('#saveOptions').click(function () {
        saveOptions();
    });

    $('#clearChannel').click(function () {
        clearChannel();
    });

    $(document).on('pageinit', '#options', function (e) {
        var channel    = localStorage.getItem('channel'),
            maxResults = localStorage.getItem('maxResults');

        $('#channelNameOptions').attr('value', channel);
        $('#maxResultsOptions').attr('value', maxResults);
    })
}

function getPlaylist (channel) {
    $('#vidlist').html('');
    $.get(
        "https://www.googleapis.com/youtube/v3/channels",
        {
            part: 'contentDetails',
            forUsername: channel,
            key: 'AIzaSyBo7yWza9H0Mj7xcpumRK_68HA_7nrTc20'
        },
        function (data) {
            $.each(data.items, function (i, item) {
                console.log(item);
                var playlistId = item.contentDetails.relatedPlaylists.uploads;
                getVideos(playlistId, localStorage.getItem('maxResults'));
            });
        }
    );
}

function getVideos (playlistId, maxResults) {
    $.get(
        "https://www.googleapis.com/youtube/v3/playlistItems",
        {
            part: 'snippet',
            maxResults: maxResults,
            playlistId: playlistId,
            key: 'AIzaSyBo7yWza9H0Mj7xcpumRK_68HA_7nrTc20'
        },
        function (data) {
            var output;
            $.each(data.items, function (i, item) {
                var id    = item.snippet.resourceId.videoId,
                    title = item.snippet.title,
                    thumb = item.snippet.thumbnails.default.url;

                $('#vidlist').append('<li videoId="'+id+'"><img src="'+thumb+'"><h3>'+title+'</h3></li>');
                $('#vidlist').listview('refresh');
            })
        }
    )
}

function showVideo (id) {
    $('#logo').hide();
    var output = '<iframe width="100%" height="250" src="https://www.youtube.com/embed/'+id+'" frameborder="0" allowfullscreen></iframe>';
    $('#showVideo').html(output);
}

function setChannel (channel) {
    localStorage.setItem('channel', channel);
}

function setMaxResults (maxResults) {
    localStorage.setItem('maxResults', maxResults);
}

function saveOptions () {
    var channel = $('#channelNameOptions').val();
    setChannel(channel);

    var maxResults = $('#maxResultsOptions').val();
    setMaxResults(maxResults);

    $('body').pagecontainer('change', '#main', {options});
    getPlaylist(channel);
}

function clearChannel () {
    localStorage.removeItem('channel');
    $('body').pagecontainer('change', '#main', {options});

    // Clear list
    $('#vidlist').html('');

    // Show popup
    $('#popupDialog').popup('open');
}
