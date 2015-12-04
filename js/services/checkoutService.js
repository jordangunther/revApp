app.service('checkoutService', function(){
	var refSalesOrders = new Firebase('https://myallapp.firebaseio.com/revApp/salesOrders');
	var refLineItems = new Firebase('https://myallapp.firebaseio.com/revApp/lineItems');
	
	this.addLineItems = function(orderItems, customerInfo) {
		this.lineItem = customerInfo;
		if (orderItems.length) {
			orderItems.forEach(function(item) {
				this.lineItem.product = item.name;
				this.lineItem.unitAmount = item.amount;
				this.lineItem.qty = item.qty;
				this.lineItem.extendedAmount = orderItems.extendedAmount;
				
				refSalesOrders.on('value', function(res){
					this.lineItem.salesOrderNumber = (res.val()++);
				}).push(this.lineItem.salesOrderNumber);
				
				refLineItems.push(this.lineItem);
			});
		} else {
			this.lineItem.product = orderItems.name;
			this.lineItem.unitAmount = orderItems.amount;
			this.lineItem.qty = orderItems.qty;
			this.lineItem.extendedAmount = orderItems.extendedAmount;
			
			refSalesOrders.on('value', function(res){
				this.lineItem.salesOrderNumber = (res.val()++);
			}).push(this.lineItem.salesOrderNumber);

			refLineItems.push(this.lineItem);
		}
	}
});