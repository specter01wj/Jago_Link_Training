define(["require", "exports", "./alerter"], function (require, exports, al) {
    function run() {
        var alerter = new al.Alerter();
        alerter.showMessage();
    }
    exports.run = run;
    ;
});
//# sourceMappingURL=bootstrapper.js.map