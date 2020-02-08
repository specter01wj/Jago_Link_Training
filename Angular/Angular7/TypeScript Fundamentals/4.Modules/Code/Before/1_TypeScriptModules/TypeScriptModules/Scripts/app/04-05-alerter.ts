/// <reference path="../typings/toastr.d.ts" />
/// <reference path="04-05-dataservice.ts" />

var dataservice = new DataService();

interface IAlerter {
    name: string;
    showMessage(): void;
}

class Alerter implements IAlerter {
    name = 'John';
    showMessage() {
        var msg = dataservice.getMessage();
        toastr.info(msg + ', ' + this.name);
    };
}
