var Engine = /** @class */ (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    return Engine;
}());
var Car = /** @class */ (function () {
    function Car(engine) {
        this._engine = engine;
    }
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value === undefined)
                throw "Error!";
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.start = function () {
        console.log("Engine start! type: " + this._engine.engineType);
    };
    return Car;
}());
window.onload = function () {
    var engine = new Engine(3000, 'V8');
    var car = new Car(engine);
    // var engine2 = new Engine(20000, 'V12');
    // car.engine(engine2);
    console.log(car.engine.engineType);
    car.start();
};
