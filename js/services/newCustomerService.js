app.service('newCustomerService', function(){
	var ref = new Firebase('https://myallapp.firebaseio.com/revApp/customers');
	
	this.newCustomer = function(customerInfo){
		ref.push(customerInfo);
	};
});
