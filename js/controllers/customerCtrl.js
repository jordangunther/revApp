app.controller('customerCtrl', function($scope, customerService){
	$scope.customers;
	$scope.getCustomers = function() {
		customerService.getCustomer().then(function(res){
			$scope.customers = res;
		});
	};
	$scope.saveCustomer = function(index) {
		customerService.saveCustomer($scope.customers[index]);

	};
});