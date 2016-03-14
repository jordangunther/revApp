angular.module('recApp')
.service('newCustomerService', function(){
	var ref = new Firebase('https://myallapp.firebaseio.com/revApp/customers');
	
	this.newCustomer = function(customerInfo){
		if (customerInfo.shipAddress) {
			this.customerinfo = customerInfo;
			ref.push(customerInfo);
		} else {
			customerInfo.shipAddress = customerInfo.billAddress;
			customerInfo.shipAddressZip = customerInfo.billAddressZip;
			customerInfo.shipAddressCity = customerInfo.billAddressCity;
			customerInfo.shipAddressState = customerInfo.billAddressState;
			this.customerinfo = customerInfo;
			ref.push(customerInfo);
		}		
	};
});
	