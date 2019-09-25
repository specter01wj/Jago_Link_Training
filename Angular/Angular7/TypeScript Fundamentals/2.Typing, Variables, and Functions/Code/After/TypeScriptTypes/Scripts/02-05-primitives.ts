// namespace is the preferred keyword over module
namespace demo_02_05 {
    // any
    var data: any;
    var info;
    var doSomething = function (arg) {
        return arg
    };
    var val = doSomething(2);

    // primitives
    var age: number = 2;
    var score: number = 98.25;
    var rating = 98.25;

    var hasData: boolean = true;
    var isReady = true;
    var isBald = function () { return 'yes'; };
    var hasHair = !!isBald();

    var firstName: string = 'John';
    var lastName = 'Papa';

    // string array
    function getArrayLength(x: string[]) {
        var len = x[0].length;
        return len;
    }

    var names: string[] = ['John', 'Dan', 'Aaron', 'Fritz'];

    var firstPerson: string = names[0];

    console.log(getArrayLength(names))


    // null
    var guitarSales: any = null;
    var animal = null;
    var orderDate: Date = null;
    var num: number = null;
    var str: string = null;
    var isHappy: boolean = null;
    var customer: {} = null;


    // undefined
    var quantity: number;
    var company = undefined;
    console.log('undefined examples');
    console.log(quantity);
    console.log(company);
}