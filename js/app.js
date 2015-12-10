var app = angular.module('recApp', ["ui.router", "ui.grid", "ngAnimate", "ngAria", "ngMaterial", 'firebase']);

app.config(['$urlRouterProvider', '$stateProvider', '$mdThemingProvider', function($urlRouterProvider, $stateProvider, $mdThemingProvider) {
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'templates/homeTmpl.html',
			controller: 'homeCtrl'
		})
		.state('summary', {
			url: '/summary/:userId',
			templateUrl: 'templates/summaryTmpl.html',
			controller: 'summaryCtrl'
		})
		.state('login', {
			url: '/login',
			templateUrl: 'templates/loginTmpl.html',
			controller: 'loginCtrl'
		})
		.state('register', {
			url: '/register',
			templateUrl: 'templates/regiTmpl.html',
			controller: 'regiCtrl'
		})
		.state('recItems', {
			url: '/recItems',
			templateUrl: 'templates/recItemsTmpl.html',
			controller: 'recItemsCtrl'
		})
		.state('createProduct', {
			url: '/createProduct',
			templateUrl: 'templates/createProductTmpl.html',
			controller: 'createProductCtrl'
		})
		.state('orderEntry', {
			url: '/orderEntry',
			templateUrl: 'templates/orderEntryTmpl.html',
			controller: 'orderEntryCtrl'
		})
		.state('shop', {
			url: '/shop',
			templateUrl: 'templates/shopTmpl.html',
			controller: 'shopCtrl'
		})
		.state('customer', {
			url: '/customer',
			templateUrl: 'templates/customerTmpl.html',
			controller: 'customerCtrl'
		})
		.state('newCustomer', {
			url: '/newCustomer',
			templateUrl: 'templates/newCustomerTmpl.html',
			controller: 'newCustomerCtrl'
		})
		.state('checkout', {
			url: '/checkout',
			templateUrl: 'templates/checkoutTmpl.html',
			controller: 'checkoutCtrl'
		});





	$mdThemingProvider.theme('default')
	// .dark()
	.accentPalette('green', {
		'default': '500'
	});
}]);