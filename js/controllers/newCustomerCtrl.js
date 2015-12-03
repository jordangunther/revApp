app.controller('newCustomerCtrl', function($scope, newCustomerService){
		$scope.newCustomer = function(){
			newCustomerService.newCustomer($scope.customer);

	}
})