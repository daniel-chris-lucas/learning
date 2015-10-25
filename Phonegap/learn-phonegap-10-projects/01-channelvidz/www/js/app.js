$(document).ready(function () {
    document.addEventListener('deviceready', onDeviceReady, false);
});

function onDeviceReady () {
    var channel = 'TechGuyWeb';

    getPlaylist(channel);
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
                getVideos(playlistId, 10);
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
