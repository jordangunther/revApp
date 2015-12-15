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

   ($scope.getLineItems = function() {
        summaryService.getLineItems().then(function(res){
            $scope.lineItems = res;
            $scope.totalMonthAmount();
        });
    })();

    ($scope.getProducts = function() {
        summaryService.getProducts().then(function(res){
            $scope.products = res;
            console.log($scope.products);
        });
    })();

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
        console.log($scope.products, index)
        $scope.productObj = $scope.products[index];
        var todaysDate = new Date();
        var currentYear = todaysDate.getFullYear();
        for (var i = 0; i < $scope.lineItems.length; i++){
            var date = new Date($scope.lineItems[i].orderEntryDate);
            var year = date.getFullYear();
            var month = date.getMonth();
            if (year === currentYear && $scope.lineItems[i].product == $scope.productObj.name){
                console.log('year and product', currentYear, $scope.productObj)
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