(function() {

  var controllerAs = function () {

      var link = function(scope, elem, attrs) {


      };

      return {
          restrict: 'E',
          transclude: true,
          require: '^tableHelper',
          scope: {
              mapsto: '@'
          },
          link: link
      };
  };

  angular.module('directivesModule')
    .directive('header', controllerAs);

}());
