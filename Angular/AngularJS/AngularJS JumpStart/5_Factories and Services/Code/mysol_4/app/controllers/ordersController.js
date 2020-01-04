(function() {
    
    var OrdersController = function ($scope, $routeParams, customersFactory) {
        var customerId = $routeParams.customerId;
        $scope.orders = null;
        
        function init() {
            customersFactory.getCustomer(customerId)
                .then(function(res) {
                    $scope.customer = res.data;
                }, function(data, status, headers, config) {
                    console.log(data.data.error + ' ' + data.status);
                });
        }
        
        
        init();
    };
    
    OrdersController.$inject = ['$scope', '$routeParams', 'customersFactory'];

    angular.module('customersApp')
      .controller('OrdersController', OrdersController);
    
}());