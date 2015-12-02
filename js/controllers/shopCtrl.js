app.controller('shopCtrl', function($scope, shopService){
	$scope.productObj = {name: 'Products'};
	$scope.cartItems = [];
	$scope.priceShow = false;
	$scope.cartTotal = 0; 
	$scope.getProducts = function() {
		shopService.getProducts().then(function(res){
			$scope.products = res;
		});
	}

	$scope.viewPrice = function(index){
		$scope.productObj = $scope.products[index];
		$scope.cartItems.push($scope.products[index]);
		console.log($scope.productArr);
		$scope.priceShow = true;
	}

	$scope.total = function(){
		for (var i = 0; i < cartItems.length; i++){
			$scope.cartTotal = $scope.cartTotal + cartItems[i].amount;
		}
	}
});