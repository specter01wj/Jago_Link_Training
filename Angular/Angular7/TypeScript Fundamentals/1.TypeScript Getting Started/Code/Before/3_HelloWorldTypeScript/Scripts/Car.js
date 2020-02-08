var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.start = function () {
        alert("Engine Start! ------- " + this.engine);
    };
    Car.prototype.stop = function () {
        alert("Engine Stop! ------- " + this.engine);
    };
    return Car;
}());
window.onload = function () {
    var car = new Car('V8');
    car.start();
    car.stop();
};
