
class Car {

	public engine: string;

	constructor(engine: string) {
		this.engine = engine;
	}

	start() {
		alert("Engine Start! ------- " + this.engine);
	}

	stop() {
		alert("Engine Stop! ------- " + this.engine);
	}

}


window.onload = function() {

	var car = new Car('V8');
	car.start();
	car.stop();

}
