///<reference path="jquery.d.ts" />
$(document).ready(function () {
    var calc = new Calculator('X', 'Y', 'Output');
});
var Calculator = (function () {
    function Calculator(xId, yId, outputId) {
        this.x = $('#' + xId);
        this.y = $('#' + yId);
        this.output = $('#' + outputId);
        this.wireEvents();
    }
    Calculator.prototype.wireEvents = function () {
        var _this = this;
        $('#Add').click(function (event) {
            _this.output.html(_this.add(parseInt(_this.x.val()), parseInt(_this.y.val())).toString());
        });
        $('#Subtract').click(function (event) {
            _this.output.html(_this.subtract(parseInt(_this.x.val()), parseInt(_this.y.val())).toString());
        });
    };
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.subtract = function (x, y) {
        return x - y;
    };
    return Calculator;
})();
//# sourceMappingURL=calculatorJQuery.js.map