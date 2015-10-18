new Vue({
    el: '#demo',

    data: {
        names: ['Stan', 'Jane', 'John', 'Taylor', 'Michelle', 'Susan']
    },

    methods: {
        addName: function () {
            this.names.push(this.newName);

            this.newName = '';
        }
    }
});