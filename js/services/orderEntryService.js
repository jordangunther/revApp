app.service('orderEntryService', function($q){
	var ref = new Firebase('https://myallapp.firebaseio.com/revApp/parts');
	var refOrders = new Firebase('https://myallapp.firebaseio.com/revApp/orders');
	
	this.createOrder = function(orderInfo){
		var defer = $q.defer();
		refOrders.push(orderInfo)
		refOrders.on('value', function(res){
			var orderObjs = res.val();
			console.log(orderObjs);
			var orders = [];
			for(key in orderObjs){
				orders.push(orderObjs[key]);
			}
			defer.resolve(orders);
		});
		return defer.promise
	}
});
