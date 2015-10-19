Vue.component('coupon', {
    template: '#coupon-template',

    props: ['when-applied'],

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
                // var response = this.whenApplied(this.coupon);
                // alert(response);
                this.whenApplied(this.coupon);

                return this.message = '20% Off!';
            }

            this.message = 'That coupon does not exist';
        }
    }
});

new Vue({
    el: '#demo',

    methods: {
        setCoupon: function (coupon) {
            // return 'thanks';
            this.$set('coupon', coupon);
        }
    }
});