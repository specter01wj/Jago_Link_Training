
namespace demo_02_06 {

	var points1 = {x: 10, y: 20};

	var poitns2: Object = {x: 5, y: 6};
	var poitns3: {} = {x: 5, y: 6};

	var rect = {
		h: 10,
		w: 20,
		calcArea: function() {
			return this.h * this.w;
		}
	}

	console.log("rec area = " + rect.calcArea());

	var squareIt = function(rect: {h: number, w?: number;}) {
		if(rect.w === undefined) {
			return rect.h * rect.h;
		}

		return rect.h * rect.w;
	}

	var sq1: number = squareIt({h:10, w:40});
	console.log(sq1);
	var sq2: number = squareIt({h:10});
	console.log(sq2);

}
