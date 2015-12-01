app.controller('orderEntryCtrl', function($scope, orderEntryService){
	$scope.productsPlaceholder = 'Products';
	$scope.newCustomer = true;
	$scope.customer = {};
	$scope.buyProduct = function(index){
		$scope.productsPlaceholder = $scope.products[index].name;
	}

	$scope.getProducts = function() {
		orderEntryService.getProducts().then(function(res){
			$scope.products = res;
		});
	}

	$scope.addProduct = function(){
		orderEntryService.addProduct($scope.product, $scope.amount).then(function(res){
			$scope.products = res;
			console.log($scope.products);
		});
	}

});