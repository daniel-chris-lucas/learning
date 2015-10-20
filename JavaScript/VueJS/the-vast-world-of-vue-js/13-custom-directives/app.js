Vue.directive('write', function (val) {
    this.el.textContent = val;
});

Vue.directive('confirm', function (message) {
    this.el.addEventListener('click', function (e) {
        if ( ! confirm(message)) {
            e.preventDefault();
            return;
        }
    });
});

new Vue({
    el: 'body',

    methods: {
        check: function () {
            alert('Form was submitted');
        }
    }
});