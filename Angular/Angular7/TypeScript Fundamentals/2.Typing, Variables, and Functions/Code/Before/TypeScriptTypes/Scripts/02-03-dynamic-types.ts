
namespace demo_02_03 {

	var person;
	person = 'John Papa';
	var output = person.substring(1, 4);

	// person = 1;
	// output = person.substring(1, 4);

	person = {
		name: 'James',
		age: 32
	}
	output = person.substring(1, 4);

	console.log(output);

}

