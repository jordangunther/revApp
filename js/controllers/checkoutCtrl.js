app.controller('checkoutCtrl', function($scope, shopService){
	$scope.cartItems = shopService.cartItems;
	$scope.cartTotal = shopService.cartTotal;

});