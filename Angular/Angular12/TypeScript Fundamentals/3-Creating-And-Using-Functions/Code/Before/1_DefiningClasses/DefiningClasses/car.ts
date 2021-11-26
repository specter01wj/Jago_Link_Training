
class Engine {
	constructor(public horsePower: number,
				public engineType: string) {}
}

class Car {
	private _engine: Engine;

	constructor(engine: Engine) {
		this._engine = engine;
	}

	get engine(): Engine {
		return this._engine;
	}

	set engine(value: Engine) {
		if(value === undefined) throw "my Error!";
		this._engine = value;
	}

	start(): void {
		console.log("Engine start! type: " + this._engine.engineType);
	}


}


window.onload = function() {

	var engine = new Engine(3000, 'V8');
	var car = new Car(engine);

	var engine2 = new Engine(20000, 'V12');
	car.engine = engine2;
	console.log(car.engine.engineType);
	car.start();
}
