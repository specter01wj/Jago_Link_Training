(function() {

  var app = angular.module('directivesModule');

  app.directive('isolateScopeWithEvent', function () {
      return {
          scope: {
              datasource: '='
          },
          template: 'Name: {{datasource.name}} Street: {{datasource.street}} ' +
                    '<button>Change Data</button>'
      };
  });

}());
