angular.module('recApp')
.service('customerService', function($q){
	
	ref = new Firebase('https://myallapp.firebaseio.com/revApp/customers');

	this.getCustomer = function() {
		var defer = $q.defer();
		ref.on('value', function(res){
			this.customerObjs = res.val();
			var customers = [];
			for (key in customerObjs){
				customers.push(customerObjs[key]);
			}
			defer.resolve(customers);
		});
		return defer.promise;
	}

	this.saveCustomer = function(customer) {
		this.savedCustomer = customer;
	};
});
