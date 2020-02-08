import al = require("./alerter");

export function run() {
    var alerter = new al.Alerter();
    alerter.showMessage();
};