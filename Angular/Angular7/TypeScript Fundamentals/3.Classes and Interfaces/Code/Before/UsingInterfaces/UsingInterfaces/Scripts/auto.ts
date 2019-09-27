class Engine {
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

class Accessory {
    constructor(public accessoryNumber: number, public title: string) {}
}

class Auto {
    private _basePrice: number;
    private _engine: Engine;
    state: string;
    make: string;
    model: string;
    year: number;
    accessoryList: string;

    constructor(basePrice: number, engine: Engine, make: string, model: string,
                state: string, year: number) {
        this.engine = engine;
        this.basePrice = basePrice;
        this.state = state;
        this.make = make;
        this.model = model;
        this.year = year;
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

    get basePrice(): number {
        return this._basePrice;
    }

    set basePrice(value: number) {
        if (value <= 0) throw 'price must be >= 0';
        this._basePrice = value;
    }

    get engine(): Engine {
        return this._engine;
    }

    set engine(value: Engine) {
        if (value == undefined) throw 'Please supply an engine.';
        this._engine = value;
    }
}

class Truck extends Auto {
    bedLength: string;
    fourByFour: boolean;

    constructor(basePrice: number, engine: Engine, make: string, model: string,
                state: string, year: number, bedLength: string, fourByFour: boolean) {
        super(basePrice, engine, make, model, state, year);
        this.bedLength = bedLength;
        this.fourByFour = fourByFour;
    }
}


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


