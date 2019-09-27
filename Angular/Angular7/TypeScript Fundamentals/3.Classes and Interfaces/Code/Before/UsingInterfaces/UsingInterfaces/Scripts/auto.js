var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Engine = (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    Engine.prototype.start = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };
    Engine.prototype.stop = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };
    return Engine;
})();
var Accessory = (function () {
    function Accessory(accessoryNumber, title) {
        this.accessoryNumber = accessoryNumber;
        this.title = title;
    }
    return Accessory;
})();
var Auto = (function () {
    function Auto(basePrice, engine, make, model, state, year) {
        this.engine = engine;
        this.basePrice = basePrice;
        this.state = state;
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Auto.prototype.calculateTotal = function () {
        var taxRate = .08;
        return this.basePrice + (taxRate * this.basePrice);
    };
    Auto.prototype.addAccessories = function () {
        var accessories = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            accessories[_i - 0] = arguments[_i];
        }
        this.accessoryList = '';
        for (var i = 0; i < accessories.length; i++) {
            var ac = accessories[i];
            this.accessoryList += ac.accessoryNumber + ' ' + ac.title + '<br />';
        }
    };
    Auto.prototype.getAccessoryList = function () {
        return this.accessoryList;
    };
    Object.defineProperty(Auto.prototype, "basePrice", {
        get: function () {
            return this._basePrice;
        },
        set: function (value) {
            if (value <= 0)
                throw 'price must be >= 0';
            this._basePrice = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Auto.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value == undefined)
                throw 'Please supply an engine.';
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    return Auto;
})();
var Truck = (function (_super) {
    __extends(Truck, _super);
    function Truck(basePrice, engine, make, model, state, year, bedLength, fourByFour) {
        _super.call(this, basePrice, engine, make, model, state, year);
        this.bedLength = bedLength;
        this.fourByFour = fourByFour;
    }
    return Truck;
})(Auto);
window.onload = function () {
    //var auto = new Auto({
    //    engine: new Engine(250, 'V6'),
    //    basePrice: 45000,
    //    state: 'Arizona',
    //    make: 'Ford',
    //    model: 'F-150',
    //    year: 2013
    //});
    //alert(auto.engine.horsePower.toString());
};
//# sourceMappingURL=auto.js.map