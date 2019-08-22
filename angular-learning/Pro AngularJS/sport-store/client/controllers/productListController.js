angular.module('kawhiNation').constant('activeClass', 'btn-primary')
    .controller('productListCrtl', function ($scope) {
        var selectedCategory = null;
        $scope.selectedPage = 1;
        $scope.recordPerPage = 1;
        $scope.selectCategory = function (category) {
            selectedCategory = category;
            $scope.selectedPage = 1;
        };
        $scope.selectPage = function (page) {
            $scope.selectedPage = page;
        };
        $scope.categoryFilterFn = function (product) {
            return !selectedCategory || product.category === selectedCategory;

        }
        $scope.getClass = function (category) {
            if (selectedCategory === category) {
                // return activeClass;
                return 'btn-primary';
            }
        }
        $scope.getPageClass = function (page) {
            if ($scope.selectedPage === page) {
                // return activeClass;
                return 'btn-primary';
            }
        }
    });