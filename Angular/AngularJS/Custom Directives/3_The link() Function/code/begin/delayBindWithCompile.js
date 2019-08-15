(function() {

    var delayBindWithCompile = ['$interpolate', function ($interpolate) {


      return {
          restrict: 'A',
          compile: compile
      };
  }];

  angular.module('directivesModule')
    .directive('delayBind', delayBindWithCompile);

}());
