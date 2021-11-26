/// <reference path="../typings/toastr.d.ts" />

namespace App.Tools.Utils {

	export interface ILogger {
		write: (msg: string) => void;
	}

	export var LoggerMode = {
		Console: 1,
		Alert: 2,
		Toastr: 3
	}

	export class Logger implements ILogger {
		private writter: any;

		constructor(public mode: number = LoggerMode.Console) {
			switch (this.mode) {
				case LoggerMode.Console:
					this.writter = (msg: string) => console.log(msg);
					break;
				
				case LoggerMode.Alert:
					this.writter = (msg: string) => alert(msg);
					break;

				case LoggerMode.Toastr:
					this.writter = (msg: string) => toastr.info(msg);
					break;
			}
		}

		write(msg) {
			this.writter(msg);
		}

	}


}


interface IPoint {
	getDist(): number;
}


namespace App.Tools.Shapes {
	export class Point implements IPoint {
		constructor(public x: number, public y: number) {}

		getDist() {
			return Math.sqrt(this.x * this.x + this.y * this.y);
		}
	}
}


interface IRectangle {
	height: number;
	width: number;
	getArea(): number;
	getPerimeter(): number;
}

namespace App.Tools.Shapes {
	export class Rectangle implements IRectangle {
		constructor(public height: number, public width: number) {}

		getArea() {
			return this.height * this.width;
		}

		getPerimeter() {
			return this.height * 2 * this.width * 2;
		}
	}
}



( (print): void => {

	var log = new App.Tools.Utils.Logger(App.Tools.Utils.LoggerMode.Toastr);

	var p: IPoint = new App.Tools.Shapes.Point(3, 4);
	log.write("Distance = " + p.getDist());

	var rect: IRectangle = new App.Tools.Shapes.Rectangle(10, 4);
	log.write("Perimeter = " + rect.getPerimeter());

})();










