var demo_02_08;
(function (demo_02_08) {
    var squareItBasic = function (num) { return num * num; };
    console.log('Square: ' + squareItBasic(12));
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
    var person = {
        name: 'James',
        age: 32,
        kids: 2,
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
    var pets = person.calcPets();
    console.log("pets = " + pets);
    person.makeYounger(10);
    var newAge = person.age;
    console.log("new age = " + newAge);
    var msg = person.greet("Hello!!!");
    console.log(msg);
    var SessionEval = /** @class */ (function () {
        function SessionEval() {
        }
        return SessionEval;
    }());
    function sessionEval() {
        var ratings = [];
        var addRating = function (rating) {
            if (rating === void 0) { rating = 5; }
            return ratings.push(rating);
        };
        var calcRating = function () {
            var sum = 0;
            ratings.forEach(function (score) {
                sum += score;
            });
            return sum / ratings.length;
        };
        return {
            ratings: ratings,
            addRating: addRating,
            calcRating: calcRating
        };
    }
    var s1 = sessionEval();
    s1.addRating(3);
    s1.addRating(4);
    s1.addRating(5);
    s1.addRating(5);
    s1.addRating(2);
    s1.addRating(3);
    s1.addRating(4);
    s1.addRating(5);
    s1.addRating(1);
    console.log(s1.calcRating());
})(demo_02_08 || (demo_02_08 = {}));
