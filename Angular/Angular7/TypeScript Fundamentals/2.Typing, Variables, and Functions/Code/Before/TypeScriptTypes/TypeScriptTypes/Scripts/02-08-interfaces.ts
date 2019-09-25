// namespace is the preferred keyword over module
namespace demo_02_08 {

    // Simple arrow function demo from the slides
    var greetMe : (msg: string) => void;
    greetMe = function (msg) {
        console.log(msg);
    }
    greetMe('Hello!');

    // Demo A
    // Use interfaces
    interface SquaringFunction {
        (x: number) : number;
    }

    var squareItBasic: SquaringFunction
        = (num) => num * num;

    console.log('Square of 12 = ' + squareItBasic(12));

    // Demo B
    // Pass an object literal as the parameter and use arrow functions
    interface Rectangle {
        h: number;
        w?: number;
    }

    //var squareIt: (rect: { h: number; w?: number; }) => number;
    var squareIt: (rect: Rectangle) => number;

    var rectA: Rectangle = { h:7 };
    var rectB: Rectangle = { h:7, w: 12 };

    squareIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };

    var val1: number = squareIt(rectA);
    console.log('rectangle h and w of 7 = ' + val1);

    var val2: number = squareIt(rectB);
    console.log('rectangle h of 7 and width of 12 = ' + val2);

    // Demo C
    // Type the function, the parameter, and use arrow functions
    // Learn more about interfaces in Module 3
    interface Person {
        name: string;
        age?: number;
        kids: number;
        calcPets: () => number;
        makeYounger: (years: number) => void;
        greet: (msg: string) => string;
    }

    var p: Person = {
        name: 'John',
        age: 40,
        kids: 4,
        calcPets: function () {
            return this.kids * 2;
        },
        makeYounger: function (years: number) {
            this.age -= years;
        },
        greet: function (msg: string) {
            return msg + ', ' + this.name;
        }
    };

    var pets = p.calcPets();
    console.log('pets = ' + pets);

    p.makeYounger(10);
    var newAge = p.age;
    console.log('new age = ' + newAge);

    var msg = p.greet('Good day');
    console.log(msg);


    // Demo D
    // Returning an interface from a function
    interface SessionEval {
        addRating: (rating: number) => void;
        calcRating: () => number;
    }

    function sessionEvaluator(): SessionEval {
        var ratings: number[] = [];
        var addRating = (rating: number = 5) =>
            ratings.push(rating);
        ;
        var calcRating = () => {
            var sum: number = 0;
            ratings.forEach(function (score) {
                sum += score;
            });

            return sum / ratings.length;
        };

        return {
            addRating: addRating,
            calcRating: calcRating
        }
    }

    var s = sessionEvaluator();
    s.addRating(4);
    s.addRating(5);
    s.addRating(5);
    s.addRating(5);
    console.log(s.calcRating());
}