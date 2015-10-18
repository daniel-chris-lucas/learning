new Vue({
    el: '#demo',

    methods: {
        onKeyUp: function () {
            console.log('Key up!');
        },

        onBlur: function () {
            console.log('handle blur');
        }
    }
});