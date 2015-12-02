app.controller('orderEntryCtrl', function($scope, orderEntryService){
	
	$scope.productObj = {name: 'Products'};
	$scope.productArr = [];
	$scope.priceShow = false;
	$scope.customerOptionShow = false;
	$scope.newCustomerShow = false;
	$scope.customer = {};

	$scope.viewPrice = function(index){
		$scope.productObj = $scope.products[index];
		$scope.productArr.push($scope.products[index]);
		console.log($scope.productArr);
		$scope.customer.partID = $scope.products[index].name;
		$scope.customer.amount = $scope.products[index].amount;
		$scope.priceShow = true;
	}

	$scope.customerOption = function(){
		$scope.customerOptionShow = true;
	}

	$scope.newCustomer = function(){
		$scope.newCustomerShow = true;
	}
	$scope.getProducts = function() {
		orderEntryService.getProducts().then(function(res){
			$scope.products = res;
		});
	}

	$scope.addProduct = function(){
		orderEntryService.addProduct($scope.product, $scope.amount).then(function(res){
			$scope.products = res;
		});
	}

	$scope.createOrder = function(){
		orderEntryService.createOrder($scope.customer).then(function(res){
			$scope.confirmation = res;
			console.log(res);
		})
	}
});