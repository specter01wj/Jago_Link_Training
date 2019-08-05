(function() {
    
    var CustomersController = function ($scope, $log, customersFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;
        
        function init() {
            //Note: The success() function has been deprecated with Angular 1.5+ and then() is now
            //recommended as shown below.
            /* 
                customersFactory.getCustomers()
                .success(function(customers) {
                    $scope.customers = customers;
                })
                .error(function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });
            */

               customersFactory.getCustomers()
                .then(function(response) {
                    $scope.customers = response.data;
                }, function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });
        }
        
        init();
        
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
    };
    
    CustomersController.$inject = ['$scope', '$log', 'customersFactory', 
                                   'appSettings'];

    angular.module('customersApp')
      .controller('CustomersController', CustomersController);
    
}());