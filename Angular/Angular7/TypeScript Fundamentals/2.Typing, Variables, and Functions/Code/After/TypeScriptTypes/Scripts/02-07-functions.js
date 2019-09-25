// namespace is the preferred keyword over module
var demo_02_07;
(function (demo_02_07) {
    // Demo A
    // Type the parameters
    var squareItSimple = function (h, w) {
        return h * w;
    };
    var squareItSimplest = function (h, w) { return h * w; };
    console.log('squareItSimple = ' + squareItSimple(7, 12));
    console.log('squareItSimplest = ' + squareItSimplest(7, 12));
    // Demo B
    // Arrow functions and returning void
    var helloWorld;
    helloWorld = function (name) {
        console.log('Hello ' + (name || ' unknown person'));
    };
    helloWorld('John');
    helloWorld();
    // Demo C
    // Pass an object literal as the parameter and use arrow functions
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
    console.log('rectangle h and w of 7 = ' + val2);
    var val3 = squareIt(rectB);
    console.log('rectangle h of 7 and width of 12 = ' + val3);
})(demo_02_07 || (demo_02_07 = {}));
//# sourceMappingURL=02-07-functions.js.map