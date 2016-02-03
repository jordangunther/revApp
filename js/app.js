angular.module('recApp', ["ui.router", "ui.grid", "ngTouch", "ngAnimate", "ngAria", "ngMaterial", 'firebase'])
.config(['$urlRouterProvider', '$stateProvider', '$mdThemingProvider', function($urlRouterProvider, $stateProvider, $mdThemingProvider) {
	$stateProvider
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
		.state('lineItems', {
			url: '/lineItems',
			templateUrl: 'templates/lineItemsTmpl.html',
			controller: 'lineItemsCtrl'
		})
		.state('createProduct', {
			url: '/createProduct',
			templateUrl: 'templates/createProductTmpl.html',
			controller: 'createProductCtrl'
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
		'default': '500',
		'hue-1': '300',
		'hue-1': '200',
		'hue-1': '50',

	});
}]);