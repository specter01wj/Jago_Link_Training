var demo_02_07;
(function (demo_02_07) {
    var squareItSimple = function (h, w) {
        return h * w;
    };
    var sqItSimp_lambda = function (h, w) { return h * w; };
    console.log('old func: ' + squareItSimple(7, 12));
    console.log('lambda func: ' + sqItSimp_lambda(7, 12));
    var helloWorld;
    helloWorld = function (name) {
        console.log('Hello ' + (name || 'unknown person!'));
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
    var va12 = squareIt(rectA);
    console.log("A rect: " + va12);
    var va13 = squareIt(rectB);
    console.log("B rect: " + va13);
})(demo_02_07 || (demo_02_07 = {}));
