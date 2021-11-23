/// <reference path="../typings/toastr.d.ts" />
//Extending Internal modules
var App;
(function (App) {
    var Tools;
    (function (Tools) {
        var Utils;
        (function (Utils) {
            Utils.LoggerMode = {
                Console: 1,
                Alert: 2,
                Toastr: 3
            };
            var Logger = (function () {
                function Logger(mode) {
                    if (mode === void 0) { mode = Utils.LoggerMode.Console; }
                    this.mode = mode;
                    switch (this.mode) {
                        case Utils.LoggerMode.Console:
                            this.writer = function (msg) { return console.log(msg); };
                            break;
                        case Utils.LoggerMode.Alert:
                            this.writer = function (msg) { return alert(msg); };
                            break;
                        case Utils.LoggerMode.Toastr:
                            this.writer = function (msg) { return toastr.info(msg); };
                            break;
                    }
                }
                Logger.prototype.write = function (msg) {
                    this.writer(msg);
                };
                ;
                return Logger;
            })();
            Utils.Logger = Logger;
        })(Utils = Tools.Utils || (Tools.Utils = {}));
    })(Tools = App.Tools || (App.Tools = {}));
})(App || (App = {}));
var App;
(function (App) {
    var Tools;
    (function (Tools) {
        var Shapes;
        (function (Shapes) {
            var Point = (function () {
                function Point(x, y) {
                    this.x = x;
                    this.y = y;
                }
                Point.prototype.getDist = function () { return Math.sqrt(this.x * this.x + this.y * this.y); };
                return Point;
            })();
            Shapes.Point = Point;
        })(Shapes = Tools.Shapes || (Tools.Shapes = {}));
    })(Tools = App.Tools || (App.Tools = {}));
})(App || (App = {}));
var App;
(function (App) {
    var Tools;
    (function (Tools) {
        var Shapes;
        (function (Shapes) {
            var Rectangle = (function () {
                function Rectangle(height, width) {
                    this.height = height;
                    this.width = width;
                }
                Rectangle.prototype.getPerimeter = function () { return this.height * 2 + this.width * 2; };
                Rectangle.prototype.getArea = function () { return this.height * this.width; };
                return Rectangle;
            })();
            Shapes.Rectangle = Rectangle;
        })(Shapes = Tools.Shapes || (Tools.Shapes = {}));
    })(Tools = App.Tools || (App.Tools = {}));
})(App || (App = {}));
var Tools = App.Tools;
//Wrapper will pull variables below out of the global scope
(function () {
    var log = new Tools.Utils.Logger(App.Tools.Utils.LoggerMode.Toastr);
    var p = new Tools.Shapes.Point(3, 4);
    var dist = p.getDist();
    log.write("distance = " + dist);
    var rect = new Tools.Shapes.Rectangle(10, 4);
    var perimeter = rect.getPerimeter();
    log.write("perimeter = " + perimeter);
})();
//# sourceMappingURL=04-03-extending-internal-module.js.map