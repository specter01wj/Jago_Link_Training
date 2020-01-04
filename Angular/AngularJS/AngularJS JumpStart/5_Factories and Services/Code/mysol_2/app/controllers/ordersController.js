(function() {
    
    var OrdersController = function ($scope, $routeParams, customersService) {
        var customerId = $routeParams.customerId;
        $scope.orders = null;
        
        function init() {
            $scope.customer = customersService.getCustomer(customerId);
        }
        
        
        init();
    };
    
    OrdersController.$inject = ['$scope', '$routeParams', 'customersService'];

    angular.module('customersApp')
      .controller('OrdersController', OrdersController);
    
}());