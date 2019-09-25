// namespace is the preferred keyword over module
namespace demo_02_07 {

    // Demo A
    // Type the parameters
    var squareItSimple = function (h: number, w: number) {
        return h * w;
    };

    var squareItSimplest = (h: number, w: number) => h * w;

    console.log('squareItSimple = ' + squareItSimple(7, 12));
    console.log('squareItSimplest = ' + squareItSimplest(7, 12));

    // Demo B
    // Arrow functions and returning void
    var helloWorld: (name?: string) => void;
    helloWorld = (name?: string) => {
        console.log('Hello ' + (name || ' unknown person'));
    }
    helloWorld('John');
    helloWorld();

    // Demo C
    // Pass an object literal as the parameter and use arrow functions
    var squareIt: (rect: { h: number; w?: number; }) => number;

    var rectA = { h:7 };
    var rectB = { h:7, w: 12 };

    squareIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };

    var val2: number = squareIt(rectA);
    console.log('rectangle h and w of 7 = ' + val2);

    var val3: number = squareIt(rectB);
    console.log('rectangle h of 7 and width of 12 = ' + val3);
}