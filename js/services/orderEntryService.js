app.service('orderEntryService', function($q){
	var ref = new Firebase('https://myallapp.firebaseio.com/revApp/parts');
	var refOrders = new Firebase('https://myallapp.firebaseio.com/revApp/orders');
	
	this.getProducts = function(){
		var defer = $q.defer();
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
		var defer = $q.defer();
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
