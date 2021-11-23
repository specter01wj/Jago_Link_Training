
interface IEngine {
    start(callback: (startStatus: boolean, engineType: string) => void ): void;
    stop(callback: (stopStatus: boolean, engineType: string) => void ): void;
}


class Engine implements IEngine {
    constructor(public horsePower: number, public engineType: string) { }

    start(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }

    stop(callback: (stopStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }
}

class CustomEngine implements IEngine {
	constructor(public horsePower: number, public engineType: string) { }

    start(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, 'Custom Engine');
        }, 1000);
    }

    stop(callback: (stopStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, 'Custom Engine');
        }, 1000);
    }
}

class Accessory {
    constructor(public accessoryNumber: number, public title: string) {}
}

class Auto {
	private _basePrice: number;
    private _engine: IEngine;
    state: string;
    make: string;
    model: string;
    year: number;
    accessoryList: string;


    constructor(basePrice: number, engine: Engine, make: string, model: string, state: string, year: number) {
        this.engine = engine;
        this.basePrice = basePrice;
        this.state = state;
        this.make = make;
        this.model = model;
        this.year = year;
    }

    get basePrice(): number {
        return this._basePrice;
    }

    set basePrice(value: number) {
        if (value <= 0) throw 'price must be >= 0';
        this._basePrice = value;
    }

    get engine(): IEngine {
        return this._engine;
    }

    set engine(value: IEngine) {
        if (value == undefined) throw 'Please supply an engine.';
        this._engine = value;
    }

    calculateTotal() : number {
        var taxRate = .08;
        return this.basePrice + (taxRate * this.basePrice);
    }

    addAccessories(...accessories: Accessory[]) {
        this.accessoryList = '';
        for (var i = 0; i < accessories.length; i++) {
            var ac = accessories[i];
            this.accessoryList += ac.accessoryNumber + ' ' + ac.title + '<br />';
        }
    }

    getAccessoryList(): string {
        return this.accessoryList;
    }

}

window.onload = function () {

    // Using Interfaces
    var auto = new Auto(40000, new Engine(400, 'V12'), 'Ferrari', 'F430', 'NY', 2019);
    var myEngine = <Engine>auto.engine;
    console.log(myEngine.horsePower.toString());

    var auto = new Auto(40000, new CustomEngine(20000, 'V12'), 'Ferrari', 'F430', 'NY', 2019);
    var myEngine2 = <CustomEngine>auto.engine;
    console.log(myEngine2.horsePower.toString());

}







