
    var app = angular.module('directivesModule', []);

    app.directive('helloWorld', function() {
        return {
            template: '<h1>Hello World</h1>'
        };
    });
