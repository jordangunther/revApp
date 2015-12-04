app.controller('checkoutCtrl', function($scope, checkoutService, shopService, newCustomerService, customerService){
	$scope.cartItems = shopService.cartItems;
	$scope.cartTotal = shopService.cartTotal;
	$scope.newCustomer = newCustomerService.customerinfo;

	$scope.addLineItems = function() {
		if($scope.newCustomer) {
			checkoutService.addLineItems($scope.cartItems, $scope.newCustomer);
		} else {
			checkoutService.addLineItems($scope.cartItems, $scope.customer);
		}
	}
});