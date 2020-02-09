var demo_02_05;
(function (demo_02_05) {
    var data;
    var info;
    var doSomething = function (arg) {
        return arg;
    };
    var val = doSomething(2);
    var age = 2;
    var score = 98.23;
    var rating = 97.23;
    var hasData = true;
    var isReady = true;
    var isBald = function () {
        return 'y';
    };
    var hasHair = !!isBald();
    console.log(hasData);
    var firstName = "John";
    var lastName = "Wang";
    function getArrayleng(x) {
        var len = x.length;
        return len;
    }
    var name = ['Mike', 'James', 'Tim'];
    var firsPerson = name[0];
    console.log(getArrayleng(name));
    var animal = null;
    var company;
    console.log(animal);
    console.log(company);
})(demo_02_05 || (demo_02_05 = {}));
