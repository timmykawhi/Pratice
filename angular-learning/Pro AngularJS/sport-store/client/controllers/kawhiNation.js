angular.module('kawhiNation').controller('kawhiNationCrtl', function ($scope) {
    $scope.data = {
        products: [{
            name: 'product #1',
            description: 'A Product',
            category: "Category #1",
            price: '100'
        }, {
            name: 'product #2',
            description: 'A Product',
            category: "Category #2",
            price: '200'
        }, {
            name: 'product #3',
            description: 'A Product',
            category: "Category #1",
            price: '110'
        }, {
            name: 'product #4',
            description: 'A Product',
            category: "Category #3",
            price: '400'
        }]
    }
});