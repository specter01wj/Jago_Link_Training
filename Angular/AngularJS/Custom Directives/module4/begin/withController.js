(function() {

  var withController = function () {

    var template = '<button ng-click="addItem()">Add Item</button><ul>' +
                 '<li ng-repeat="item in items">{{ ::item.name }}</li></ul>',


      }];

      return {
          restrict: 'EA', //Default in 1.3+
          scope: {
              datasource: '=',
              add: '&',
          },

          template: template
      };
  };

  angular.module('directivesModule')
    .directive('withController', withController);

}());
