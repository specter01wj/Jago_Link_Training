/// <reference path="jquery.d.ts" />
$(document).ready(function () {
    var calc = new CalculatorJQuery('X', 'Y', 'Output');
});
var CalculatorJQuery = /** @class */ (function () {
    function CalculatorJQuery(xId, yId, outputId) {
        this.x = $('#' + xId);
        this.y = $('#' + yId);
        this.output = $('#' + outputId);
        this.wireEvents();
    }
    CalculatorJQuery.prototype.wireEvents = function () {
        var _this = this;
        $('#Add').click(function (event) {
            _this.output.html(_this.add(parseInt(_this.x.val()), parseInt(_this.y.val())).toString());
        });
        $('#Subtract').click(function (event) {
            _this.output.html(_this.subtract(parseInt(_this.x.val()), parseInt(_this.y.val())).toString());
        });
    };
    CalculatorJQuery.prototype.add = function (x, y) {
        return x + y;
    };
    CalculatorJQuery.prototype.subtract = function (x, y) {
        return x - y;
    };
    return CalculatorJQuery;
}());
