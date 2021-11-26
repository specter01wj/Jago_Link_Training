import gt = require("./greeter");

export function run() {
    var el = document.getElementById("content");
    var greeter = new gt.Greeter(el);
    greeter.start();
};

// Optional:
// Expose a class, instead of a function.
//export class BootStrapper {
//    run() {
//        var el = document.getElementById("content");
//        var greeter = new gt.Greeter(el);
//        greeter.start();
//    };
//}