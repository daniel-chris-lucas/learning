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
            console.log(data);
        }
    );
}
