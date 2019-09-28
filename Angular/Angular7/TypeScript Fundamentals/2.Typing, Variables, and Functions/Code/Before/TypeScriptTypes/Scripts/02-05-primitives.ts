namespace demo_02_05 {

	var data: any;
	var info;
	var doSomething = function(arg) {
		return arg;
	}
	var val = doSomething(2);

	//primitives
	var age: number = 2;
	var score: number = 98.23;
	var rating = 97.23;

	var hasData: boolean = true;
	var isReady = true;
	var isBald = function() {
		return 'y';
	}
	var hasHair = !!isBald();

	var firstName: string = "John";
	var lastName = "Papa";
	function getArrayleng(x: string[]) {
		var len = x.length;
		return len;
	}
	var names: string[] = ['Mike', 'James', 'Tim'];
	var firstPerson: string = names[0];
	console.log(getArrayleng(names));

	var animal = null;

	var company: string;
	console.log(company);

}