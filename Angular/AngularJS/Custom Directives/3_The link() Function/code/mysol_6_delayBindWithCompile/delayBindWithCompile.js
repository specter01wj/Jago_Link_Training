(function() {

    var delayBindWithCompile = ['$interpolate', function ($interpolate) {

    	var compile = function(elem, attrs) {
    		var interpolateFunc = $interpolate(attrs.delayBind);
    		attrs.$set('delayBind', null);


    		return {

    			pre: function(scope, elem, attrs) {
    				console.log("Pre --- " + elem[0].tagName);
    			},
    			post: function(scope, elem, attrs) {
    				console.log("Post +++ " + elem[0].tagName);
    				elem.on(attrs.trigger, function(e) {
    					var attr = attrs.attribute;
    					var val = interpolateFunc(scope);
    					if(attr && !elem.attr(attr)) {
    						elem.attr(attr, val);
    					}
    				});
    			}

    		}

    	};

      return {
          restrict: 'A',
          compile: compile
      };
  }];

  angular.module('directivesModule')
    .directive('delayBind', delayBindWithCompile);

}());
