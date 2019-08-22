angular.module('customFilter', []).filter('unique', function () {
    return function (data, propertyName) {
        if (!angular.isArray(data) || !angular.isString(propertyName)) {
            return data;
        }
        var result = [];
        data.forEach(item => {
            var value = item[propertyName];
            if (result.indexOf(value) > -1) {
                return;
            }
            result.push(value);
        });
        return result;
    };
}).filter('pageCount', function () {
    return function (data, recordPerPage) {
        if (!angular.isArray(data) || !angular.isNumber(recordPerPage)) {
            return data;
        }
        var totalRecord = data.length;
        var totalPage = Math.ceil(totalRecord / recordPerPage);
        var pageArray = [];
        for (var i = 1; i <= totalPage; i++) {
            pageArray.push(i);
        }
        return pageArray;
    };
}).filter('range', function ($filter) {
    return function (data, recordPerPage, selectedPage) {
        if (!angular.isArray(data) || !angular.isNumber(recordPerPage)) {
            return data;
        }
        var start = recordPerPage * (selectedPage - 1);
        // var end = start + recordPerPage;
        // return data.slice(start, end);
        return $filter('limitTo')(data.splice(start), recordPerPage);

    };
});