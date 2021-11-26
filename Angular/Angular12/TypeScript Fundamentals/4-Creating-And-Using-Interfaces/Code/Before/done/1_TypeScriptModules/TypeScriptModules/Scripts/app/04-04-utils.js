/// <reference path="../typings/toastr.d.ts" />
var App;
(function (App) {
    App.LoggerMode = {
        Console: 1,
        Alert: 2,
        Toastr: 3
    };
    var Utils;
    (function (Utils) {
        var Logger = /** @class */ (function () {
            function Logger(mode) {
                if (mode === void 0) { mode = App.LoggerMode.Console; }
                this.mode = mode;
                switch (this.mode) {
                    case App.LoggerMode.Console:
                        this.writer = function (msg) { return console.log(msg); };
                        break;
                    case App.LoggerMode.Alert:
                        this.writer = function (msg) { return alert(msg); };
                        break;
                    case App.LoggerMode.Toastr:
                        this.writer = function (msg) { return toastr.info(msg); };
                        break;
                }
            }
            Logger.prototype.write = function (msg) {
                this.writer(msg);
            };
            ;
            return Logger;
        }());
        Utils.Logger = Logger;
    })(Utils = App.Utils || (App.Utils = {}));
})(App || (App = {}));
