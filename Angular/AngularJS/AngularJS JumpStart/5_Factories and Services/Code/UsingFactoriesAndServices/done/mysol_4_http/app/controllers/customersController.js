(function() {
    
    var CustomersController = function ($scope, customersFactory) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];

        function init() {
            customersFactory.getCustomers()
                .then(function(res) {
                    $scope.customers = res.data;
                }, function(data, status, headers, config){
                    console.log(data.data.error + ' ' + data.status);
                });
        }

        init();

        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
        

    };
    
    CustomersController.$inject = ['$scope', 'customersFactory'];

    angular.module('customersApp')
      .controller('CustomersController', CustomersController);
    
}());