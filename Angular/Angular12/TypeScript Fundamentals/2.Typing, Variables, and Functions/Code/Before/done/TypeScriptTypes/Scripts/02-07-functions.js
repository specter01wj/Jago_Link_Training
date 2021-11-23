var demo_02_07;
(function (demo_02_07) {
    var squareItSimple = function (h, w) {
        return h * w;
    };
    var sqItSimp_express = function (h, w) { return h * w; };
    console.log('old func: ' + squareItSimple(7, 12));
    console.log('new func: ' + sqItSimp_express(7, 12));
    var helloWorld;
    helloWorld = function (name) {
        console.log('Hello ' + (name || ' unknown person!'));
    };
    helloWorld('James');
    helloWorld();
    var squareIt;
    var rectA = { h: 7 };
    var rectB = { h: 7, w: 12 };
    squareIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
    var val2 = squareIt(rectA);
    console.log("A rect: " + val2);
    var val3 = squareIt(rectB);
    console.log("B rect: " + val3);
})(demo_02_07 || (demo_02_07 = {}));
