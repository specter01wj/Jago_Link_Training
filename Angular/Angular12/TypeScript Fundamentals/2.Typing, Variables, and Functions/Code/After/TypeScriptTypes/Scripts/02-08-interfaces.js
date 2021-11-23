// namespace is the preferred keyword over module
var demo_02_08;
(function (demo_02_08) {
    // Simple arrow function demo from the slides
    var greetMe;
    greetMe = function (msg) {
        console.log(msg);
    };
    greetMe('Hello!');
    var squareItBasic = function (num) { return num * num; };
    console.log('Square of 12 = ' + squareItBasic(12));
    //var squareIt: (rect: { h: number; w?: number; }) => number;
    var squareIt;
    var rectA = { h: 7 };
    var rectB = { h: 7, w: 12 };
    squareIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
    var val1 = squareIt(rectA);
    console.log('rectangle h and w of 7 = ' + val1);
    var val2 = squareIt(rectB);
    console.log('rectangle h of 7 and width of 12 = ' + val2);
    var p = {
        name: 'John',
        age: 40,
        kids: 4,
        calcPets: function () {
            return this.kids * 2;
        },
        makeYounger: function (years) {
            this.age -= years;
        },
        greet: function (msg) {
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
    function sessionEvaluator() {
        var ratings = [];
        var addRating = function (rating) {
            if (rating === void 0) { rating = 5; }
            return ratings.push(rating);
        };
        ;
        var calcRating = function () {
            var sum = 0;
            ratings.forEach(function (score) {
                sum += score;
            });
            return sum / ratings.length;
        };
        return {
            addRating: addRating,
            calcRating: calcRating
        };
    }
    var s = sessionEvaluator();
    s.addRating(4);
    s.addRating(5);
    s.addRating(5);
    s.addRating(5);
    console.log(s.calcRating());
})(demo_02_08 || (demo_02_08 = {}));
//# sourceMappingURL=02-08-interfaces.js.map