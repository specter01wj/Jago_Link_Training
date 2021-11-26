/// <reference path="../typings/toastr.d.ts" />
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
            var Logger = /** @class */ (function () {
                function Logger(mode) {
                    if (mode === void 0) { mode = Utils.LoggerMode.Console; }
                    this.mode = mode;
                    switch (this.mode) {
                        case Utils.LoggerMode.Console:
                            this.writter = function (msg) { return console.log(msg); };
                            break;
                        case Utils.LoggerMode.Alert:
                            this.writter = function (msg) { return alert(msg); };
                            break;
                        case Utils.LoggerMode.Toastr:
                            this.writter = function (msg) { return toastr.info(msg); };
                            break;
                    }
                }
                Logger.prototype.write = function (msg) {
                    this.writter(msg);
                };
                return Logger;
            }());
            Utils.Logger = Logger;
        })(Utils = Tools.Utils || (Tools.Utils = {}));
    })(Tools = App.Tools || (App.Tools = {}));
})(App || (App = {}));
(function (App) {
    var Tools;
    (function (Tools) {
        var Shapes;
        (function (Shapes) {
            var Point = /** @class */ (function () {
                function Point(x, y) {
                    this.x = x;
                    this.y = y;
                }
                Point.prototype.getDist = function () {
                    return Math.sqrt(this.x * this.x + this.y * this.y);
                };
                return Point;
            }());
            Shapes.Point = Point;
        })(Shapes = Tools.Shapes || (Tools.Shapes = {}));
    })(Tools = App.Tools || (App.Tools = {}));
})(App || (App = {}));
(function (App) {
    var Tools;
    (function (Tools) {
        var Shapes;
        (function (Shapes) {
            var Rectangle = /** @class */ (function () {
                function Rectangle(height, width) {
                    this.height = height;
                    this.width = width;
                }
                Rectangle.prototype.getArea = function () {
                    return this.height * this.width;
                };
                Rectangle.prototype.getPerimeter = function () {
                    return this.height * 2 * this.width * 2;
                };
                return Rectangle;
            }());
            Shapes.Rectangle = Rectangle;
        })(Shapes = Tools.Shapes || (Tools.Shapes = {}));
    })(Tools = App.Tools || (App.Tools = {}));
})(App || (App = {}));
(function (print) {
    var log = new App.Tools.Utils.Logger(App.Tools.Utils.LoggerMode.Toastr);
    var p = new App.Tools.Shapes.Point(3, 4);
    log.write("Distance = " + p.getDist());
    var rect = new App.Tools.Shapes.Rectangle(10, 4);
    log.write("Perimeter = " + rect.getPerimeter());
})();
