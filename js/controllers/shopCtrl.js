app.controller('shopCtrl', function($scope, shopService){
	
	$scope.item = {};
	$scope.productObj = {name: 'Products'};
	$scope.cartItems = [];
	$scope.priceShow = false;

	$scope.getProducts = function() {
		shopService.getProducts().then(function(res){
			$scope.products = res;
		});
	}

	$scope.viewPrice = function(index){
		$scope.productObj = $scope.products[index];
		$scope.cartItems.push($scope.products[index]);
		$scope.priceShow = true;
		$scope.total($scope.cartItems);
	}

	$scope.total = function(numberArr){
		$scope.cartTotal = 0; 
		for (var i = 0; i < numberArr.length; i++){		
			var amount = parseInt(numberArr[i].amount);
			if (numberArr[i].qty) {
				var qty = numberArr[i].qty;
			} else {
				numberArr[i].qty = 1;
				var qty = numberArr[i].qty;
			}
			numberArr[i].extendedAmount = amount * qty;
			$scope.cartTotal = $scope.cartTotal + (numberArr[i].extendedAmount);	
		}
		return $scope.cartTotal;
	}

	$scope.storeCart = function(){
		shopService.cartItems = $scope.cartItems;
		shopService.cartTotal = $scope.cartTotal;
	}	
});