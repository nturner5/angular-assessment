angular.module('assessment')
.directive('logoDirective', function(){
     return {
        restrict: 'E',
        // template: <h1>LOGO GOES HERE</h1>
        templateUrl: './views/logo.html'
    }
})