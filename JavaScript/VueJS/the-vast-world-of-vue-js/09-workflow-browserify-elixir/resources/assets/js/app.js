var Vue = require('vue');

new Vue({
    el: '#app',

    data: {
        message: 'Hello World'
    },

    filters: {
        reverse: require('./filters/reverse')
    }
});