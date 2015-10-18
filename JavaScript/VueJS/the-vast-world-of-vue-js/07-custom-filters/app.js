Vue.filter('reverse', function (value, wordsOnly) {
    var separator = wordsOnly ? ' ' : '';

    return value.split(separator).reverse().join(separator);
});

/*new Vue({
    el: '#demo',

    data: {
        message: 'Hello World'
    }

    // No longer needed here as we've made a global filter
    // filters: {
    //     reverse: function (value, wordsOnly) {
    //         
    //     }
    // }
});

new Vue({
    el: '#demo2',

    data: {
        message: 'Hello Again'
    }
});*/

new Vue({
    el: '#demo',

    data: {
        gender: 'all',

        people: [
            {name: 'Jeff', gender: 'male'},
            {name: 'Jack', gender: 'male'},
            {name: 'Steven', gender: 'male'},
            {name: 'Kate', gender: 'female'},
            {name: 'Susan', gender: 'female'},
            {name: 'Claire', gender: 'female'}
        ]
    },

    filters: {
        gender: function (people) {
            if (this.gender == 'all') {
                return people;
            }

            return people.filter(function (person) {
                return person.gender == this.gender;
            }.bind(this));
        }
    }
});