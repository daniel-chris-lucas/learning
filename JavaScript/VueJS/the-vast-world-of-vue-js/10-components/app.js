Vue.component('coupon', {
    template: document.querySelector('#coupon-template'),

    data: function () {
        return {
            coupon: '',
            // inValid: false,
            message: ''
        }
    },

    methods: {
        whenCouponHasBeenEntered: function () {
            this.validate();
        },

        validate: function () {
            if (this.coupon == 'FOOBAR') {
                return this.message = '20% Off!';
            }

            this.message = 'That coupon does not exist';
        }
    }
});

new Vue({
    el: '#demo'
});