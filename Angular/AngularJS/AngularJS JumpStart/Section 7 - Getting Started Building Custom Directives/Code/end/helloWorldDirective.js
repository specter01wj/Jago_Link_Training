(function() {

    var app = angular.module('directivesModule', []);

    app.directive('helloWorld', function() {
        return {
            template: 'Hello World'
        };
    });

}());
