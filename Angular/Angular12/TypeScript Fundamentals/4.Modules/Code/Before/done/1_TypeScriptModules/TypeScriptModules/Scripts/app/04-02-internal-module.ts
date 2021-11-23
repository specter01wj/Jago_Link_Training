/// <reference path="../typings/toastr.d.ts" />

namespace Shapes {

	export interface IRectangle {
		height: number;
		width: number;
		getArea(): number;
	}

	export class Rectangle implements IRectangle {
		constructor(public height: number, public width: number) {}

		getArea() {
			return this.height * this.width;
		}
	}


}


namespace MyProgram {
	function run() {
		var rect: Shapes.IRectangle = new Shapes.Rectangle(10, 4);
		var area = rect.getArea();
		toastr.info("Area = " + area);
	}

	run();
}


