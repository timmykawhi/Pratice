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
                var item = list[i];
                totalPrice += item.price * item.count;
            }
            return totalPrice;
        }
    },
    methods: {
        handleRemove: function (index) {
            this.list.splice(index, 1);
        },
        handleAdd: function (index) {
            var item = this.list[index];
            item.count++;
        },
        handleReduce: function (index) {
            var item = this.list[index];
            var count = item.count;
            item.count = count > 1 ? count - 1 : 0;
        }

    }
});