(function() {



  var linkDemo = function () {
      return {
        restrict: 'A',
        link: function(scope, elem, attrs){
          elem.on('click', function(){
            elem.html('you clicked me!');
          });
          elem.on('mouseenter', function(){
            elem.css('background-color', 'blue');
          });
          elem.on('mouseleave', function(){
            elem.css('background-color', 'green');
          });
        }
      };
  };

  var app = angular.module('directivesModule', []).directive('linkDemo', linkDemo);


}());

