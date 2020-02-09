
namespace demo_02_07 {

	var squareItSimple = function(h: number, w: number) {
		return h * w;
	}
	var sqItSimp_lambda = (h: number, w: number) => h * w;
	console.log('old func: ' + squareItSimple(7, 12));
	console.log('lambda func: ' + sqItSimp_lambda(7, 12));

	var helloWorld: (name?: string) => void;
	helloWorld = (name?: string) => {
		console.log('Hello ' + (name || 'unknown person!'))
	}
	helloWorld('James');
	helloWorld();

	var squareIt: (rect: {h: number, w?: number}) => number;

	var rectA = {h: 7};
	var rectB = {h: 7, w: 12};

	squareIt = function(rect) {
		if(rect.w === undefined) {
			return rect.h * rect.h;
		}

		return rect.h * rect.w;
	}

	var va12: number = squareIt(rectA);
	console.log("A rect: " + va12);

	var va13: number = squareIt(rectB);
	console.log("B rect: " + va13);

}


