angular.module('assessment', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    
$urlRouterProvider.when('', '/')
$urlRouterProvider.otherwise('/404')


$stateProvider
.state('home', {
    url:'/',
    templateUrl: 'views/home.html'
})
.state('about', {
    url: '/about',
    templateUrl: 'views/about.html'
})
.state('blog', {
    url: '/blog',
    templateUrl: 'views/blog.html'
})
.state('shop', {
    url: '/shop',
    templateUrl: 'views/shop.html'
})
.state('product-details',{
    url: '/details/:id',
    templateUrl: '/views/product-details.html',
    controller: 'productDetailsCtrl'
})

})