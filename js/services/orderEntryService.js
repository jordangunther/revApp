app.service('orderEntryService', function($q){
	var ref = new Firebase('https://myallapp.firebaseio.com/revApp/parts');
	var refOrders = new Firebase('https://myallapp.firebaseio.com/revApp/orders');
	
	var defer = $q.defer();
	this.getProducts = function(){
		ref.on('value', function(res){
			var productObjs = res.val();
			var products = [];
			for (key in productObjs){
				products.push(productObjs[key]);
			}
			defer.resolve(products);
		});
		return defer.promise;
	};
	this.addProduct = function(product, amount){
		ref.push({
			name: product, 
			amount: amount
		});
		ref.on('value', function(res){
			var productObjs = res.val();
			var products = [];
			for (key in productObjs){
				products.push(productObjs[key]);
			}
			defer.resolve(products);
		});
		return defer.promise;
	};

	this.createOrder = function(orderInfo){
		refOrders.push(orderInfo)
		refOrders.on('value', function(res){
			console.log(res);
			var orderObjs = res.val();
			var orders = [];
			for(key in orderObjs){
				orders.push(orderObjs[key]);
			}
			defer.resolve(orders);
		});
		return defer.promise
	}
});
