app.service('shopService', function($q){
	var ref = new Firebase('https://myallapp.firebaseio.com/revApp/parts');

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
});