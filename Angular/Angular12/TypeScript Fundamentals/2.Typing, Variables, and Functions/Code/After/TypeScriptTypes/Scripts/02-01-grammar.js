// namespace is the preferred keyword over module
var demo_02_01;
(function (demo_02_01) {
    var x = 1;
    var y;
    var firstName = 'John';
    var lastName = 'Papa';
    var num1 = 100;
    var num2 = 20;
    function addNumbers(n1, n2, n3) {
        var result = n1 + n2 + n3;
        var msg = 'Sum is = ' + result;
        alert(msg);
    }
    addNumbers(num1, num2, 7);
})(demo_02_01 || (demo_02_01 = {}));
//# sourceMappingURL=02-01-grammar.js.map