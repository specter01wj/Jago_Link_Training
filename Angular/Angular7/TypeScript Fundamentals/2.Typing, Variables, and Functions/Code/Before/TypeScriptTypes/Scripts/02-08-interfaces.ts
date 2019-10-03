
namespace demo_02_08 {

	interface SquaringFunction {
		(x: number): number;
	}

	var squareItBasic: SquaringFunction = (num) => num * num;

	console.log('Square: ' + squareItBasic(12));


	interface Rectangle {
		h: number;
		w?: number;
	}

	var squareIt: (rect: Rectangle) => number;

	var rectA: Rectangle = {h: 7};
	var rectB: Rectangle = {h: 7, w: 12};

	squareIt = function(rect) {
		if(rect.w === undefined) {
			return rect.h * rect.h;
		}
		return rect.h * rect.w;
	}

	var val2: number = squareIt(rectA);
	console.log("A rect: " + val2);

	var val3: number = squareIt(rectB);
	console.log("B rect: " + val3);


	interface Person {
		name: string;
		age?: number;
		kids: number;
		calcPets: () => number;
		makeYounger: (years: number) => void;
		greet: (msg: string) => string;
	}

	var person: Person = {
		name: 'James',
		age: 32,
		kids: 2,
		calcPets: function() {
			return this.kids * 2;
		},
		makeYounger: function(years: number) {
			this.age -= years;
		},
		greet: function(msg: string) {
			return msg + ', ' + this.name;
		}
	}

	var pets = person.calcPets();
	console.log("pets = " + pets);

	person.makeYounger(10);
	var newAge = person.age;
	console.log("new Age = " + newAge);

	var msg = person.greet('Hello!!!');
	console.log(msg);


	interface SessionEval {
		ratings: number[];
		addRating: (rating: number) => void;
		calcRating: () => number;
	}


	function sessionEval(): SessionEval {
		var ratings: number[] = [];
		var addRating = (rating: number = 5) => ratings.push(rating);
		var calcRating = () => {
			var sum: number = 0;
			ratings.forEach(function(score) {
				sum += score;
			});
			return sum / ratings.length;
		};

		return {
			ratings: ratings,
			addRating: addRating,
			calcRating: calcRating
		}
	}

	var s1 = sessionEval();
	s1.addRating(3);
	s1.addRating(4);
	s1.addRating(5);
	s1.addRating(5);
	s1.addRating(2);
	s1.addRating(3);
	s1.addRating(4);
	s1.addRating(5);
	s1.addRating(1);
	console.log(s1.calcRating());


}







