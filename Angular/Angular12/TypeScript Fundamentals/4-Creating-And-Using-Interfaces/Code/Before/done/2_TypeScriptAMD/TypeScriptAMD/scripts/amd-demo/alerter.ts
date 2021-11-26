import ds = require("./dataservice");

var dataservice = new ds.DataService();

export interface IAlerter {
    name: string;
    showMessage(): void;
}

export class Alerter implements IAlerter {
    name = 'James';
    showMessage() {
        var msg = dataservice.getMessage();
        alert(msg + ', ' + this.name);
    };
}