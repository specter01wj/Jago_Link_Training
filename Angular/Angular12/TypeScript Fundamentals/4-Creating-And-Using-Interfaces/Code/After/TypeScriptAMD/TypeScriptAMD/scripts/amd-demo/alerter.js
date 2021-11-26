define(["require", "exports", "./dataservice"], function (require, exports, ds) {
    var dataservice = new ds.DataService();
    var Alerter = (function () {
        function Alerter() {
            this.name = 'John';
        }
        Alerter.prototype.showMessage = function () {
            var msg = dataservice.getMessage();
            alert(msg + ', ' + this.name);
        };
        ;
        return Alerter;
    })();
    exports.Alerter = Alerter;
});
//# sourceMappingURL=alerter.js.map