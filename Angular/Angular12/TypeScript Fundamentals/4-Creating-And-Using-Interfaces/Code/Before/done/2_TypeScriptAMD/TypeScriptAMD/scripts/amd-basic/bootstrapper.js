define(["require", "exports", "./greeter"], function (require, exports, gt) {
    function run() {
        var el = document.getElementById("content");
        var greeter = new gt.Greeter(el);
        greeter.start();
    }
    exports.run = run;
    ;
});
// Optional:
// Expose a class, instead of a function.
//export class BootStrapper {
//    run() {
//        var el = document.getElementById("content");
//        var greeter = new gt.Greeter(el);
//        greeter.start();
//    };
//} 
//# sourceMappingURL=bootstrapper.js.map