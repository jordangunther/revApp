angular.module('recApp')

.controller('summaryCtrl', function($scope, summaryService){
	$scope.janTotal = 0;
    $scope.febTotal = 0;
    $scope.marTotal = 0;
    $scope.aprTotal = 0;
    $scope.mayTotal = 0;
    $scope.junTotal = 0;
    $scope.julTotal = 0;
    $scope.augTotal = 0;
    $scope.sepTotal = 0;
    $scope.octTotal = 0;
    $scope.novTotal = 0;
    $scope.decTotal = 0;

    $scope.lastJanTotal = 0;
    $scope.lastFebTotal = 0;
    $scope.lastMarTotal = 0;
    $scope.lastAprTotal = 0;
    $scope.lastMayTotal = 0;
    $scope.lastJunTotal = 0;
    $scope.lastJulTotal = 0;
    $scope.lastAugTotal = 0;
    $scope.lastSepTotal = 0;
    $scope.lastOctTotal = 0;
    $scope.lastNovTotal = 0;
    $scope.lastDecTotal = 0;

    
    $scope.products;
    $scope.productObj = {name: 'Select Product'};
    $scope.customers;
    $scope.customerObj = {name: 'Select Customer'};
    $scope.showProduct = false;
    $scope.showCustomer = false;

   
   
   ($scope.getLineItems = function() {
        summaryService.getLineItems().then(function(res){
            $scope.lineItems = res;
            $scope.totalMonthAmount();
        });
    })();

    ($scope.getProducts = function() {
        summaryService.getProducts().then(function(res){
            $scope.products = res;
        });
    })();

    ($scope.getCustomers = function() {
        summaryService.getCustomer().then(function(res){
            $scope.customers = res;
        });
    })();

    $scope.showProducts = function(){
        if ($scope.showProduct === false){
            $scope.showProduct = true;
            $scope.showCustomer = false;
        } else {
            $scope.showProduct = false;
        }
    }

    $scope.showCustomers = function(){
        if ($scope.showCustomer === false){
            $scope.showCustomer = true;
            $scope.showProduct = false;
        } else {
            $scope.showCustomer = false;
        }
    }

    $scope.totalMonthAmount = function() {
        var todaysDate = new Date();
        var currentYear = todaysDate.getFullYear();
        for (var i = 0; i < $scope.lineItems.length; i++){
            var date = new Date($scope.lineItems[i].orderEntryDate);
            var year = date.getFullYear();
            var month = date.getMonth();
            if (year === currentYear){
               if (month === 0) {
                    $scope.janTotal = $scope.janTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 1) {
                    $scope.febTotal = $scope.febTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 2) {
                    $scope.marTotal = $scope.marTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 3) {
                    $scope.aprTotal = $scope.aprTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 4) {
                    $scope.mayTotal = $scope.mayTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 5) {
                    $scope.junTotal = $scope.junTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 6) {
                    $scope.julTotal = $scope.julTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 7) {
                    $scope.augTotal = $scope.augTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 8) {
                    $scope.sepTotal = $scope.sepTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 9) {
                    $scope.octTotal = $scope.octTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 10) {
                    $scope.novTotal = $scope.novTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 11) {
                    $scope.decTotal = $scope.decTotal + $scope.lineItems[i].extendedAmount;
                }

            } else if(year === currentYear - 1){
                if (month === 0) {
                    $scope.lastJanTotal = $scope.lastJanTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 1) {
                    $scope.lastFebTotal = $scope.lastFebTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 2) {
                    $scope.lastMarTotal = $scope.lastMarTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 3) {
                    $scope.lastAprTotal = $scope.lastAprTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 4) {
                    $scope.lastMayTotal = $scope.lastMayTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 5) {
                    $scope.lastJunTotal = $scope.lastJunTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 6) {
                    $scope.lastJulTotal = $scope.lastJulTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 7) {
                    $scope.lastAugTotal = $scope.lastAugTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 8) {
                    $scope.lastSepTotal = $scope.lastSepTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 9) {
                    $scope.lastOctTotal = $scope.lastOctTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 10) {
                    $scope.lastNovTotal = $scope.lastNovTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 11) {
                    $scope.lastDecTotal = $scope.lastDecTotal + $scope.lineItems[i].extendedAmount;
                }
            }
            
        }
        var chart = c3.generate({
            bindto: '#chartTotal',
            data: {
                columns: [
                    ['Current Fiscal Month', $scope.janTotal, $scope.febTotal, $scope.marTotal, $scope.aprTotal, $scope.mayTotal, $scope.junTotal, $scope.julTotal, $scope.augTotal, $scope.sepTotal, $scope.octTotal, $scope.novTotal, $scope.decTotal],
                    ['Previous Year', $scope.lastJanTotal, $scope.lastFebTotal, $scope.lastMarTotal, $scope.lastAprTotal, $scope.lastMayTotal, $scope.lastJunTotal, $scope.lastJulTotal, $scope.lastAugTotal, $scope.lastSepTotal, $scope.lastOctTotal, $scope.lastNovTotal, $scope.lastDecTotal],
                ]      
            },
            axis: {
                y: {
                    label: {
                        text: 'Amount',
                        position: 'outer-middle'
                    },
                    tick: {
                        format: d3.format("$,") // ADD
                    }
                },
                x: {
                    type: 'category',
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                }    
            }
        })    
    }


    $scope.totalPartAmount = function(index) {
    $scope.janPrice = 0;
    $scope.febPrice = 0;
    $scope.marPrice = 0;
    $scope.aprPrice = 0;
    $scope.mayPrice = 0;
    $scope.junPrice = 0;
    $scope.julPrice = 0;
    $scope.augPrice = 0;
    $scope.sepPrice = 0;
    $scope.octPrice = 0;
    $scope.novPrice = 0;
    $scope.decPrice = 0;

    $scope.lastJanPrice = 0;
    $scope.lastFebPrice = 0;
    $scope.lastMarPrice = 0;
    $scope.lastAprPrice = 0;
    $scope.lastMayPrice = 0;
    $scope.lastJunPrice = 0;
    $scope.lastJulPrice = 0;
    $scope.lastAugPrice = 0;
    $scope.lastSepPrice = 0;
    $scope.lastOctPrice = 0;
    $scope.lastNovPrice = 0;
    $scope.lastDecPrice = 0;

    

        $scope.productObj = $scope.products[index];
        var todaysDate = new Date();
        var currentYear = todaysDate.getFullYear();
        for (var i = 0; i < $scope.lineItems.length; i++){
            var date = new Date($scope.lineItems[i].orderEntryDate);
            var year = date.getFullYear();
            var month = date.getMonth();
            if (year === currentYear && $scope.lineItems[i].product == $scope.productObj.name){
               if (month === 0) {
                    $scope.janPrice = $scope.janPrice + $scope.lineItems[i].extendedAmount;
                } else if (month === 1) {
                    $scope.febPrice = $scope.febPrice + $scope.lineItems[i].extendedAmount;
                } else if (month === 2) {
                    $scope.marPrice = $scope.marPrice + $scope.lineItems[i].extendedAmount;
                } else if (month === 3) {
                    $scope.aprPrice = $scope.aprPrice + $scope.lineItems[i].extendedAmount;
                } else if (month === 4) {
                    $scope.mayPrice = $scope.mayPrice + $scope.lineItems[i].extendedAmount;
                } else if (month === 5) {
                    $scope.junPrice = $scope.junPrice + $scope.lineItems[i].extendedAmount;
                } else if (month === 6) {
                    $scope.julPrice = $scope.julPrice + $scope.lineItems[i].extendedAmount;
                } else if (month === 7) {
                    $scope.augPrice = $scope.augPrice + $scope.lineItems[i].extendedAmount;
                } else if (month === 8) {
                    $scope.sepPrice = $scope.sepPrice + $scope.lineItems[i].extendedAmount;
                } else if (month === 9) {
                    $scope.octPrice = $scope.octPrice + $scope.lineItems[i].extendedAmount;
                } else if (month === 10) {
                    $scope.novPrice = $scope.novPrice + $scope.lineItems[i].extendedAmount;
                } else if (month === 11) {
                    $scope.decPrice = $scope.decPrice + $scope.lineItems[i].extendedAmount;
                }

            } else if(year === currentYear - 1 && $scope.lineItems[i].product == $scope.productObj.name){

                if (month === 0) {
                    $scope.lastJanPrice = $scope.lastJanPrice + $scope.lineItems[i].extendedAmount;
                } else if (month === 1) {
                    $scope.lastFebPrice = $scope.lastFebPrice + $scope.lineItems[i].extendedAmount;
                } else if (month === 2) {
                    $scope.lastMarPrice = $scope.lastMarPrice + $scope.lineItems[i].extendedAmount;
                } else if (month === 3) {
                    $scope.lastAprPrice = $scope.lastAprPrice + $scope.lineItems[i].extendedAmount;
                } else if (month === 4) {
                    $scope.lastMayPrice = $scope.lastMayPrice + $scope.lineItems[i].extendedAmount;
                } else if (month === 5) {
                    $scope.lastJunPrice = $scope.lastJunPrice + $scope.lineItems[i].extendedAmount;
                } else if (month === 6) {
                    $scope.lastJulPrice = $scope.lastJulPrice + $scope.lineItems[i].extendedAmount;
                } else if (month === 7) {
                    $scope.lastAugPrice = $scope.lastAugPrice + $scope.lineItems[i].extendedAmount;
                } else if (month === 8) {
                    $scope.lastSepPrice = $scope.lastSepPrice + $scope.lineItems[i].extendedAmount;
                } else if (month === 9) {
                    $scope.lastOctPrice = $scope.lastOctPrice + $scope.lineItems[i].extendedAmount;
                } else if (month === 10) {
                    $scope.lastNovPrice = $scope.lastNovPrice + $scope.lineItems[i].extendedAmount;
                } else if (month === 11) {
                    $scope.lastDecPrice = $scope.lastDecPrice + $scope.lineItems[i].extendedAmount;
                }
            }
        }
            
        var chart = c3.generate({
            bindto: '#chartProduct',
            data: {
                columns: [
                    ['Current Fiscal Month', $scope.janPrice, $scope.febPrice, $scope.marPrice, $scope.aprPrice, $scope.mayPrice, $scope.junPrice, $scope.julPrice, $scope.augPrice, $scope.sepPrice, $scope.octPrice, $scope.novPrice, $scope.decPrice],
                    ['Previous Year', $scope.lastJanPrice, $scope.lastFebPrice, $scope.lastMarPrice, $scope.lastAprPrice, $scope.lastMayPrice, $scope.lastJunPrice, $scope.lastJulPrice, $scope.lastAugPrice, $scope.lastSepPrice, $scope.lastOctPrice, $scope.lastNovPrice, $scope.lastDecPrice],
                ]      
            },
            axis: {
                y: {
                    label: {
                        text: 'Amount',
                        position: 'outer-middle'
                    },
                    tick: {
                        format: d3.format("$,") // ADD
                    }
                },
                x: {
                    type: 'category',
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                }    
            }
        })    
    }



$scope.totalCustomerAmount = function(index) {
    $scope.janCustomer = 0;
    $scope.febCustomer = 0;
    $scope.marCustomer = 0;
    $scope.aprCustomer = 0;
    $scope.mayCustomer = 0;
    $scope.junCustomer = 0;
    $scope.julCustomer = 0;
    $scope.augCustomer = 0;
    $scope.sepCustomer = 0;
    $scope.octCustomer = 0;
    $scope.novCustomer = 0;
    $scope.decCustomer = 0;

    $scope.lastJanCustomer = 0;
    $scope.lastFebCustomer = 0;
    $scope.lastMarCustomer = 0;
    $scope.lastAprCustomer = 0;
    $scope.lastMayCustomer = 0;
    $scope.lastJunCustomer = 0;
    $scope.lastJulCustomer = 0;
    $scope.lastAugCustomer = 0;
    $scope.lastSepCustomer = 0;
    $scope.lastOctCustomer = 0;
    $scope.lastNovCustomer = 0;
    $scope.lastDecCustomer = 0;
        $scope.customerObj = $scope.customers[index];
        var todaysDate = new Date();
        var currentYear = todaysDate.getFullYear();
        for (var i = 0; i < $scope.lineItems.length; i++){
            var date = new Date($scope.lineItems[i].orderEntryDate);
            var year = date.getFullYear();
            var month = date.getMonth();
           if (year === currentYear && $scope.lineItems[i].name === $scope.customerObj.name){
               if (month === 0) {
                    $scope.janCustomer = $scope.janCustomer + $scope.lineItems[i].extendedAmount;
                } else if (month === 1) {
                    $scope.febCustomer = $scope.febCustomer + $scope.lineItems[i].extendedAmount;
                } else if (month === 2) {
                    $scope.marCustomer = $scope.marCustomer + $scope.lineItems[i].extendedAmount;
                } else if (month === 3) {
                    $scope.aprCustomer = $scope.aprCustomer + $scope.lineItems[i].extendedAmount;
                } else if (month === 4) {
                    $scope.mayCustomer = $scope.mayCustomer + $scope.lineItems[i].extendedAmount;
                } else if (month === 5) {
                    $scope.junCustomer = $scope.junCustomer + $scope.lineItems[i].extendedAmount;
                } else if (month === 6) {
                    $scope.julCustomer = $scope.julCustomer + $scope.lineItems[i].extendedAmount;
                } else if (month === 7) {
                    $scope.augCustomer = $scope.augCustomer + $scope.lineItems[i].extendedAmount;
                } else if (month === 8) {
                    $scope.sepCustomer = $scope.sepCustomer + $scope.lineItems[i].extendedAmount;
                } else if (month === 9) {
                    $scope.octCustomer = $scope.octCustomer + $scope.lineItems[i].extendedAmount;
                } else if (month === 10) {
                    $scope.novCustomer = $scope.novCustomer + $scope.lineItems[i].extendedAmount;
                } else if (month === 11) {
                    $scope.decCustomer = $scope.decCustomer + $scope.lineItems[i].extendedAmount;
                }

            } else if(year === currentYear - 1 && $scope.lineItems[i].name == $scope.customerObj.name){

                if (month === 0) {
                    $scope.lastJanCustomer = $scope.lastJanCustomer + $scope.lineItems[i].extendedAmount;
                } else if (month === 1) {
                    $scope.lastFebCustomer = $scope.lastFebCustomer + $scope.lineItems[i].extendedAmount;
                } else if (month === 2) {
                    $scope.lastMarCustomer = $scope.lastMarCustomer + $scope.lineItems[i].extendedAmount;
                } else if (month === 3) {
                    $scope.lastAprCustomer = $scope.lastAprCustomer + $scope.lineItems[i].extendedAmount;
                } else if (month === 4) {
                    $scope.lastMayCustomer = $scope.lastMayCustomer + $scope.lineItems[i].extendedAmount;
                } else if (month === 5) {
                    $scope.lastJunCustomer = $scope.lastJunCustomer + $scope.lineItems[i].extendedAmount;
                } else if (month === 6) {
                    $scope.lastJulCustomer = $scope.lastJulCustomer + $scope.lineItems[i].extendedAmount;
                } else if (month === 7) {
                    $scope.lastAugCustomer = $scope.lastAugCustomer + $scope.lineItems[i].extendedAmount;
                } else if (month === 8) {
                    $scope.lastSepCustomer = $scope.lastSepCustomer + $scope.lineItems[i].extendedAmount;
                } else if (month === 9) {
                    $scope.lastOctCustomer = $scope.lastOctCustomer + $scope.lineItems[i].extendedAmount;
                } else if (month === 10) {
                    $scope.lastNovCustomer = $scope.lastNovCustomer + $scope.lineItems[i].extendedAmount;
                } else if (month === 11) {
                    $scope.lastDecCustomer = $scope.lastDecCustomer + $scope.lineItems[i].extendedAmount;
                }
            }
        }
            
        var chart = c3.generate({
            bindto: '#chartCustomer',
            data: {
                columns: [
                    ['Current Fiscal Month', $scope.janCustomer, $scope.febCustomer, $scope.marCustomer, $scope.aprCustomer, $scope.mayCustomer, $scope.junCustomer, $scope.julCustomer, $scope.augCustomer, $scope.sepCustomer, $scope.octCustomer, $scope.novCustomer, $scope.decCustomer],
                    ['Previous Year', $scope.lastJanCustomer, $scope.lastFebCustomer, $scope.lastMarCustomer, $scope.lastAprCustomer, $scope.lastMayCustomer, $scope.lastJunCustomer, $scope.lastJulCustomer, $scope.lastAugCustomer, $scope.lastSepCustomer, $scope.lastOctCustomer, $scope.lastNovCustomer, $scope.lastDecCustomer],
                ]      
            },
            axis: {
                y: {
                    label: {
                        text: 'Amount',
                        position: 'outer-middle'
                    },
                    tick: {
                        format: d3.format("$,") // ADD
                    }
                },
                x: {
                    type: 'category',
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                }    
            }
        })    
    }



    $scope.myData = [
       {
        "firstName": "Cox",
        "lastName": "Carney",
        "company": "Enormo",
        "employed": true
    },
    {
        "firstName": "Lorraine",
        "lastName": "Wise",
        "company": "Comveyer",
        "employed": false
    },
    {
        "firstName": "Nancy",
        "lastName": "Waters",
        "company": "Fuelton",
        "employed": false
    }];
});