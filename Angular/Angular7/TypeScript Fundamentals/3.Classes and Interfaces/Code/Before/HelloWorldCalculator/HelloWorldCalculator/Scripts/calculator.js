///<reference path="jquery.d.ts" />
window.onload = function () {
    var calc = new CalculatorjQuery('X', 'Y', 'Output');
};
var CalculatorjQuery = (function () {
    function CalculatorjQuery(xId, yId, outputId) {
        this.x = document.getElementById(xId);
        this.y = document.getElementById(yId);
        this.output = document.getElementById(outputId);
        this.wireEvents();
    }
    CalculatorjQuery.prototype.wireEvents = function () {
        var _this = this;
        document.getElementById('Add').addEventListener('click', function (event) {
            _this.output.innerHTML = _this.add(parseInt(_this.x.value), parseInt(_this.y.value)).toString();
        });
        document.getElementById('Subtract').addEventListener('click', function (event) {
            _this.output.innerHTML = _this.subtract(parseInt(_this.x.value), parseInt(_this.y.value)).toString();
        });
    };
    CalculatorjQuery.prototype.add = function (x, y) {
        return x + y;
    };
    CalculatorjQuery.prototype.subtract = function (x, y) {
        return x - y;
    };
    return CalculatorjQuery;
})();
//# sourceMappingURL=calculator.js.map