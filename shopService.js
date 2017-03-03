angular.module('assessment')
    .service('shopService', function ($http) {

        this.getData = function () {
            return $http({
                method: "GET",
                url: 'http://practiceapi.devmounta.in/products'
            }).then(function (results) {
                return results.data;
            })
        }
        this.getDetails = function (id){
            return $http({
                method: 'GET',
                url: 'http://practiceapi.devmounta.in/products/' + id
            }).then(function (results){
                return results.data;
            })
        }
    })