app.service('orderEntryService', function($q){
	var ref = new Firebase('https://myallapp.firebaseio.com/revApp/parts');
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
});
