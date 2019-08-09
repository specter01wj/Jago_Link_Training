(function() {

    var delayBindWithCompile = ['$interpolate', function ($interpolate) {

        var compile = function(tElem, tAttrs) {
            console.log('In compile');
            var interpolateFunc = $interpolate(tAttrs.delayBind);
            tAttrs.$set('delayBind', null); //Clear it out so no bindings occur

            return {
                pre: function(scope, elem, attrs) {
                    console.log('In delayBind pre ' + elem[0].tagName);
                },
                post: function(scope, elem, attrs) {
                    console.log('In delayBind pre ' + elem[0].tagName);
                    elem.on(attrs.trigger, function(event) {
                        var attr = attrs.attribute,
                            val = interpolateFunc(scope);
                        if (attr && !elem.attr(attr)) {
                            elem.attr(attr, val);
                        }
                    });
                }
            };

        };

      return {
          restrict: 'A',
          compile: compile
      };
  }];

  angular.module('directivesModule')
    .directive('delayBind', delayBindWithCompile);

}());
