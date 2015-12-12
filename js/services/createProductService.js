angular.module('recApp')
.service('createProductService', function($q){

	var ref = new Firebase('https://myallapp.firebaseio.com/revApp/parts');
	
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
})
