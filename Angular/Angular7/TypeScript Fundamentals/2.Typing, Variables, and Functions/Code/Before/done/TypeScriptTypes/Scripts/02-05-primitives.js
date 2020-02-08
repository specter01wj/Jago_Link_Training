var demo_02_05;
(function (demo_02_05) {
    var data;
    var info;
    var doSomething = function (arg) {
        return arg;
    };
    var val = doSomething(2);
    //primitives
    var age = 2;
    var score = 98.23;
    var rating = 97.23;
    var hasData = true;
    var isReady = true;
    var isBald = function () {
        return 'y';
    };
    var hasHair = !!isBald();
    var firstName = "John";
    var lastName = "Papa";
    function getArrayleng(x) {
        var len = x.length;
        return len;
    }
    var names = ['Mike', 'James', 'Tim'];
    var firstPerson = names[0];
    console.log(getArrayleng(names));
    var animal = null;
    var company;
    console.log(company);
})(demo_02_05 || (demo_02_05 = {}));
