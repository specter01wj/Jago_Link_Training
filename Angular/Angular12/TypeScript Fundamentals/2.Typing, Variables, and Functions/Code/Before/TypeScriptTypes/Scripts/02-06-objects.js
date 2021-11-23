var demo_02_06;
(function (demo_02_06) {
    var point1 = { x: 10, y: 20 };
    var point2 = { x: 5, y: 6 };
    var point3 = { x: 5, y: 6 };
    var rect = {
        h: 10,
        w: 20,
        calArea: function () {
            return this.h * this.w;
        }
    };
    console.log("Rect area = " + rect.calArea());
    var squareIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
    var sq1 = squareIt({ h: 10, w: 40 });
    console.log(sq1);
    var sq2 = squareIt({ h: 10 });
    console.log(sq2);
})(demo_02_06 || (demo_02_06 = {}));
