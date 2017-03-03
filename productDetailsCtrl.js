angular.module('assessment')
.controller('productDetailsCtrl', function($scope, shopService, $stateParams){
    shopService.getDetails($stateParams.id).then(function (info){
        $scope.details = info;
    })
})