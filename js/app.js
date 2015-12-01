var app = angular.module('recApp', ["ui.router", "ngAnimate", "ngAria", "ngMaterial", 'firebase']);

app.config(['$urlRouterProvider', '$stateProvider', '$mdThemingProvider', function($urlRouterProvider, $stateProvider, $mdThemingProvider) {
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'templates/homeTmpl.html',
		})
		.state('summary', {
			url: '/summary/:userId',
			templateUrl: 'templates/summaryTmpl.html',
			controller: 'summaryCtrl',
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
			templateUrl: 'templates/recItemsTmpl.html'
		})
		.state('orderEntry', {
			url: '/orderEntry',
			templateUrl: 'templates/orderEntryTmpl.html',
			controller: 'orderEntryCtrl'
		})





	$mdThemingProvider.theme('default')
	// .dark()
	.accentPalette('green', {
		'default': '500'
	})
}])