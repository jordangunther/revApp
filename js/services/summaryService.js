angular.module('recApp')
.service('summaryService', function($q){
	var ref = new Firebase('https://myallapp.firebaseio.com/revApp/lineItems');
	var refParts = new Firebase('https://myallapp.firebaseio.com/revApp/parts');
	var refCustomers = new Firebase('https://myallapp.firebaseio.com/revApp/customers');
	

	this.getLineItems = function() {
		var defer = $q.defer();
		ref.on('value', function(res){
			var lineItemObjs = res.val();
			var lineItems = [];
			for (key in lineItemObjs) {
				lineItems.push(lineItemObjs[key]);
			}
			defer.resolve(lineItems);
		});
		return defer.promise;
	}
	this.getProducts = function(){
		var defer = $q.defer();
		refParts.on('value', function(res){
			var productObjs = res.val();
			var products = [];
			for (key in productObjs) {
				products.push(productObjs[key]);
			}
			defer.resolve(products);
		});
		return defer.promise;
	};
	this.getCustomer = function() {
		var defer = $q.defer();
		refCustomers.on('value', function(res){
			this.customerObjs = res.val();
			var customers = [];
			for (key in customerObjs){
				customers.push(customerObjs[key]);
			}
			defer.resolve(customers);
		});
		return defer.promise;
	}
});