app.controller('orderEntryCtrl', function($scope, orderEntryService){
	
	$scope.customerOptionShow = false;
	$scope.newCustomerShow = false;
	$scope.customer = {};

	$scope.customerOption = function(){
		$scope.customerOptionShow = true;
	}

	$scope.newCustomer = function(){
		$scope.newCustomerShow = true;
	}
	
	$scope.createOrder = function(){
		orderEntryService.createOrder($scope.customer).then(function(res){
			$scope.confirmation = res;
			console.log(res);
		})
	}
});