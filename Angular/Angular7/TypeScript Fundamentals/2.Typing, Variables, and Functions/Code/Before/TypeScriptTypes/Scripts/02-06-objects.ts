// namespace is the preferred keyword over module
namespace demo_02_06 {

    // Object
    var points1 = { x: 10, y: 20 };

    var points2: {};
    points2 = { x: 10, y: 20 };

    var points3: Object = { x: 10, y: 20 };
    points3 = { foo: 'john' };

    var rectangle = {
        h: 10,
        w: 20,
        calcArea: function() {
            return this.h * this.w;
        }
    };
    console.log('rectangle area = ' + rectangle.calcArea());

    // Functions
    var squareIt1 = function (x) {
        return x * x;
    };
    var val1 = squareIt1('2');
    console.log('squareIt1 = ' + val1);
    val1 = squareIt1('John');
    console.log('squareIt1 = ' + val1);

    // Type the parameter
    var squareIt2 = function (x: number) {
        return x * x;
    };
    //var val2 = squareIt2('John');
    //var val2 = squareIt2('4');
    var val2 = squareIt2(4);
    console.log('squareIt2 = ' + val2);

    var squareIt3: Function;
    squareIt3 = function (x: number) {
        return x * x;
    };

    var val3: number = squareIt3(8);
    console.log('squareIt3 = ' + val3);

    var squareIt = function (rect: { h: number; w?: number; }) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
    var sq1: number = squareIt({ h: 10 });
    console.log('rectangle h and w of 10 = ' + sq1);
    var sq2: number = squareIt({ h: 10, w: 40 });
    console.log('rectangle h of 10 and width of 40 = ' + sq2);

}