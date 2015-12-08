app.service('checkoutService', function($q){
	var refSalesOrders = new Firebase('https://myallapp.firebaseio.com/revApp/salesOrders');
	var refLineItems = new Firebase('https://myallapp.firebaseio.com/revApp/lineItems');
	this.getSalesOrder = function(){
		var defer = $q.defer();
		refSalesOrders.on('value', function(res){
			var salesOrderObj = res.val();
			var salesOrderNumber = 0;
			for (key in salesOrderObj){
				if (salesOrderNumber < salesOrderObj[key]){
					salesOrderNumber = salesOrderObj[key];
				};
			};
			defer.resolve(salesOrderNumber);
		});
		return defer.promise;
	}

	this.addLineItems = function(orderItems, customerInfo) {
		var lineItem = customerInfo;
		delete lineItem.$$hashKey;
		this.getSalesOrder().then(function(ref){
			var salesOrder = ref + 1;	
			refSalesOrders.push(salesOrder);
			if (orderItems.length) {
				for (var i = 0; i < orderItems.length; i++) {
					lineItem.product = orderItems[i].name;
					lineItem.unitAmount = orderItems[i].amount;
					lineItem.qty = orderItems[i].qty;
					lineItem.extendedAmount = (orderItems[i].amount * orderItems[i].qty);
					console.log('scope', salesOrder);
					lineItem.salesOrder = salesOrder;
					refLineItems.push(lineItem);
				}
			} else {
				lineItem.product = orderItems.name;
				lineItem.unitAmount = orderItems.amount;
				lineItem.qty = orderItems.qty;
				lineItem.extendedAmount = orderItems.extendedAmount;
				lineItem.salesOrder = salesOrder;
				refLineItems.push(lineItem);
			}
		})
		alert('order confirmed');
	}
});