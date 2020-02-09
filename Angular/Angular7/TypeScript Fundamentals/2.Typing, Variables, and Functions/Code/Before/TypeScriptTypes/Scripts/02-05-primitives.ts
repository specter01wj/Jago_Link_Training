
namespace demo_02_05 {

	var data: any;
	var info;
	var doSomething = function(arg) {
		return arg;
	}
	var val = doSomething(2);

	var age: number = 2;
	var score: number = 98.23;
	var rating = 97.23;

	var hasData: boolean = true;
	var isReady = true;
	var isBald = function() {
		return 'y';
	}
	var hasHair = !!isBald();
	console.log(hasData);

	var firstName: string = "John";
	var lastName = "Wang";
	function getArrayleng(x: string[]) {
		var len = x.length;
		return len;
	}
	var name: string[] = ['Mike', 'James', 'Tim'];
	var firsPerson: string = name[0];
	console.log(getArrayleng(name));

	var animal = null;

	var company: string;
	console.log(animal);
	console.log(company);



}

