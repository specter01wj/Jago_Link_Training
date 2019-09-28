/// <reference path="../typings/toastr.d.ts" />
var Shapes;
(function (Shapes) {
    var Rectangle = (function () {
        function Rectangle(height, width) {
            this.height = height;
            this.width = width;
        }
        Rectangle.prototype.getArea = function () { return this.height * this.width; };
        return Rectangle;
    })();
    Shapes.Rectangle = Rectangle;
})(Shapes || (Shapes = {}));
var MyProgram;
(function (MyProgram) {
    function run() {
        var rect = new Shapes.Rectangle(10, 4);
        var area = rect.getArea();
        toastr.info("area = " + area);
    }
    run();
})(MyProgram || (MyProgram = {}));
//# sourceMappingURL=04-02-internal-module.js.map