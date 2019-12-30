(function() {
    
    var OrdersController = function ($scope, $routeParams, $log, customersFactory) {
        var customerId = $routeParams.customerId;
        $scope.orders = null;
        
        function init() {
            //Search the customers for the customerId
            customersFactory.getCustomer(customerId)
                .then(function(res) {
                    $scope.customer = res.data;
                }, function(data, status, headers, config){
                    $log.log(data.data.error + ' ' + data.status);
                });
        }
        
        
        init();
    };
    
    OrdersController.$inject = ['$scope', '$routeParams', '$log', 'customersFactory'];

    angular.module('customersApp')
      .controller('OrdersController', OrdersController);
    
}());