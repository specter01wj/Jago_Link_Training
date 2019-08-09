(function() {

  var tableHelperTransclude = function () {

      var link = function(scope, elem, attrs) {
          //Get the order of the header columns
          //Used in vm.getRowValues() below to ensure proper rendering order.
          var ths = elem.find('thead').find('tr').children();
          for (var i=0;i<ths.length;i++) {
             scope.vm.columns.push(ths[i].getAttribute('mapsto'));
          };
      },

      controller = ['$scope', function($scope) {
          var vm = this;
          vm.reverse = false;
          vm.columns = [];
          vm.orderby;

          //Handle sorting of data as user clicks on a column in the table
          vm.sort = function(col) {
              vm.reverse = (vm.orderby === col) ? !vm.reverse: false;
              vm.orderby = col;
          }

          //Iterating through a row's properties won't gaurantee the proper
          //order of the columns (they may not match with the headers).
          //The link() function parses the <header> child directives
          //to update vm.columns which is used here to ensure that the data
          //columns match up with the header columns.
          vm.getRowValues = function(row) {
              var sortedValues = [];
              vm.columns.forEach(function(prop) {
                  sortedValues.push(row[prop]);
              });
              return sortedValues;
          };

      }];

      return {
          restrict: 'E',
          transclude: true,
          scope: {
            columnmap: '@',
            datasource: '='
          },
          controller: controller,
          controllerAs: 'vm',
          bindToController: true,
          link: link,
          templateUrl: 'tableHelperTranscludeTemplate.html'
      };
  };

  angular.module('directivesModule')
    .directive('tableHelper', tableHelperTransclude);

}());
