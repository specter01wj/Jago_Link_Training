(function() {
    
    var CustomersController = function ($scope, customersFactory) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
        
        function init() {
            customersFactory.getCustomers()
                .then(function(res) {
                    $scope.customers = res.data;
                }, function(data, status, headers, config) {
                    console.log(data.data.error + ' ' + data.status);
                });
        }

        init();
        
    };
    
    CustomersController.$inject = ['$scope', 'customersFactory'];

    angular.module('customersApp')
      .controller('CustomersController', CustomersController);
    
}());