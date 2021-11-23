/// <reference path="../typings/toastr.d.ts" />
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
var p = new Point(3, 4);
var dist = p.getDist();
toastr.info("Distance = " + dist);
