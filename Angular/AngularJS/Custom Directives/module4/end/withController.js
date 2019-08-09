(function() {

  var withController = function () {

    var template = '<button ng-click="addItem()">Add Item</button><ul>' +
                 '<li ng-repeat="item in items">{{ ::item.name }}</li></ul>',

        controller = ['$scope', function($scope) {

            init();

            function init() {
               $scope.items = angular.copy($scope.datasource);
            }

            $scope.addItem = function() {
                var name = 'New Directive Controller Item';
                $scope.add()(name);
                $scope.items.push({
                    name: name
                });
            }

        }];

      return {
          restrict: 'EA', //Default in 1.3+
          scope: {
              datasource: '=',
              add: '&',
          },
          controller: controller,
          template: template
      };
  };

  angular.module('directivesModule')
    .directive('withController', withController);

}());
