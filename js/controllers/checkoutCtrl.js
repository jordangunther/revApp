angular.module('recApp')
.controller('checkoutCtrl', function($scope, checkoutService, shopService, newCustomerService, customerService){
	$scope.cartItems = shopService.cartItems;
	$scope.cartTotal = shopService.cartTotal;
	$scope.newCustomer = newCustomerService.customerinfo;
	$scope.customer = customerService.savedCustomer;

	$scope.addLineItems = function() {
		
		if($scope.newCustomer) {
			$scope.newCustomer.orderEntryDate = $scope.orderEntryDate.toString();
			checkoutService.addLineItems($scope.cartItems, $scope.newCustomer);
		} else {
			$scope.customer.orderEntryDate = $scope.orderEntryDate.toString();
			checkoutService.addLineItems($scope.cartItems, $scope.customer);
		}
	}
});