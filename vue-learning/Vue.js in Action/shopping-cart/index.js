new Vue({
    el: '#app',
    data: {
        list: [{
            id: 1,
            name: 'iPhone X',
            price: 6188,
            count: 1
        }, {
            id: 2,
            name: 'iPad Pro',
            price: 5888,
            count: 1
        }, {
            id: 3,
            name: 'MacBook Pro',
            price: 21488,
            count: 1
        }]
    },
    computed: {
        totalPrice: function () {
            var totalPrice = 0,
                list = this.list;
            for (var i = 0, length = list.length; i < length; i++) {
                totalPrice += list[i].price;
            }
            return totalPrice;
        }
    },
    methods: {
        remove: function (index) {
            this.list.splice(index, 1);
        }
    }
});