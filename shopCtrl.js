angular.module('assessment')
.controller('shopCtrl', function($scope, shopService, $stateParams){
    $scope.showMe = true;
    $scope.showX= false;
    $scope.test = "working";
    shopService.getData($scope).then(function (info){
        $scope.products = info;
        console.log($scope.products)
    })
})