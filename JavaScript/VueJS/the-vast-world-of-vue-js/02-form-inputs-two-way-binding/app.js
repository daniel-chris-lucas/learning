new Vue({
    el: '#demo',

    data: {
        name: 'Change this'
    },

    ready: function () {
        var that = this;

        setInterval(function () {
            that.name = 'Updated';
        }, 5000);
    }
});