(function() {
    
    var CustomersController = function ($scope, customersFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];

        $scope.appSettings = appSettings;
        
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
        
        function init() {
            $scope.customers = customersFactory.getCustomers();
        }

        init();
        
    };
    
    CustomersController.$inject = ['$scope', 'customersFactory', 'appSettings'];

    angular.module('customersApp')
      .controller('CustomersController', CustomersController);
    
}());