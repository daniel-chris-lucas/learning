new Vue({
    el: '#demo',

    data: {
        sortKey: '',

        reverse: false,

        search: '',

        columns: ['name', 'age'],

        people: [
            {name: 'John', age: 50},
            {name: 'Jane', age: 22},
            {name: 'Paul', age: 34},
            {name: 'Kate', age: 15},
            {name: 'Amanda', age: 65},
            {name: 'Steve', age: 38},
            {name: 'Keith', age: 21},
            {name: 'Don', age: 50},
            {name: 'Susan', age: 21},
        ]
    },

    methods: {
        sortBy: function (sortKey) {
            this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;

            this.sortKey = sortKey;
        }
    }
});