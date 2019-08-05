(function() {
    
    var OrdersController = function ($scope, $routeParams, customersFactory) {
        var customerId = $routeParams.customerId;
        $scope.customer = null;
        
        function init() {

            //Note: The success() function has been deprecated with Angular 1.5+ and then() is now
            //recommended as shown below.
		    /*
             customersFactory.getCustomer(customerId)
                .success(function(customer) {
                    $scope.customer = customer;
                })
                .error(function(data, status, headers, config) {
                    //handle error
                });
            */

             customersFactory.getCustomer(customerId)
                .then(function(response) {
                    $scope.customer = response.data;
                }, function(data, status, headers, config) {
                    //handle error
                });

        }        

        init();
    };
    
    OrdersController.$inject = ['$scope', '$routeParams', 'customersFactory'];

    angular.module('customersApp')
      .controller('OrdersController', OrdersController);
    
}());