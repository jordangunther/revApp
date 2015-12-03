app.controller('shopCtrl', function($scope, shopService){
	
	$scope.productObj = {name: 'Products'};
	$scope.cartItems = [];
	$scope.priceShow = false;
	$scope.test = 'heck ya';

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
			var num = parseInt(numberArr[i].amount)
			$scope.cartTotal = $scope.cartTotal + num;	
		}
	}

	$scope.storeCart = function(){
		shopService.cartItems = $scope.cartItems;
		shopService.cartTotal = $scope.cartTotal;
	}
	
});