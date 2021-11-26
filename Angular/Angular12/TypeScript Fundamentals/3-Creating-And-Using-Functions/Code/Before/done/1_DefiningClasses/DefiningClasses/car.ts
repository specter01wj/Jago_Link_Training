
class Engine {
	constructor(public horsePower: number, public engineType: string) {}
}

class Car {
	private _engine: Engine;

	constructor(engine: Engine) {
		this.engine = engine;
	}

	get engine(): Engine {
		return this._engine;
	}

	set engine(value: Engine) {
		if(value === undefined) throw "Error!";
		this._engine = value;
	}

	start(): void {
		console.log("Engine start! type: " + this._engine.engineType);
	}

}


window.onload = function() {
	var engine = new Engine(3000, 'V8');
	var car = new Car(engine);

	console.log(car.engine.engineType);
	car.start();
}









