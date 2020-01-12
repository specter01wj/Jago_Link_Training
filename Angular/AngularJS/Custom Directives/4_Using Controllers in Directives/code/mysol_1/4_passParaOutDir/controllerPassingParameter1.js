(function() {

    var controllerPassingParameter1 = function () {

        var controller = function () {

            var vm = this;

            init();

            function init() {
                vm.items = angular.copy(vm.datasource);
            }

            vm.addItem = function () {
                var name = 'New Customer Added by Directive: vm.add({name: name});';

                //Call external scope's function
                vm.add({name: name});

                //Add new item to directive scope
                vm.items.push({
                    name: name
                });
            };
          },

          template = '<button ng-click="vm.addItem()">Add Item</button><ul>' +
                     '<li ng-repeat="item in vm.items">{{ ::item.name }}</li></ul>';

           return {
                restrict: 'EA',
                scope: {
                    datasource: '=',
                    add: '&',
                },
                controller: controller,
                controllerAs: 'vm',
                bindToController: true,
                template: template
            };
    };

    angular.module('directivesModule')
      .directive('controllerPassingParameter1', controllerPassingParameter1);
}());
