angular.module('recApp')
.controller('myCtrl', function($scope,  $state){
	($scope.loginScreen = function(){
		$state.go('login');
	})();
});