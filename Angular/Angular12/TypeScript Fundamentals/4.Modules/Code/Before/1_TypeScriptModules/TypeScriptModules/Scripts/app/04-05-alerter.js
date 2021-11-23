/// <reference path="../typings/toastr.d.ts" />
/// <reference path="04-05-dataservice.ts" />
var dataservice = new DataService();
var Alerter = /** @class */ (function () {
    function Alerter() {
        this.name = 'John';
    }
    Alerter.prototype.showMessage = function () {
        var msg = dataservice.getMessage();
        toastr.info(msg + ', ' + this.name);
    };
    ;
    return Alerter;
}());
