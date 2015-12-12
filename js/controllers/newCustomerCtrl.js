angular.module('recApp')
.controller('newCustomerCtrl', function($scope, newCustomerService){
	$scope.shippingShow = false;

	$scope.shippingAddress = function() {
		$scope.shippingShow = true;
	}

	$scope.newCustomer = function() {
		newCustomerService.newCustomer($scope.customer);
	}
})