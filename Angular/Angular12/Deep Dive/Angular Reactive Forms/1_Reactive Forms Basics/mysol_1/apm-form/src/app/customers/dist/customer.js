"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, email, sendCatalog, addressType, street1, street2, city, state, zip) {
        if (firstName === void 0) { firstName = ''; }
        if (lastName === void 0) { lastName = ''; }
        if (email === void 0) { email = ''; }
        if (sendCatalog === void 0) { sendCatalog = false; }
        if (addressType === void 0) { addressType = 'home'; }
        if (state === void 0) { state = ''; }
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.sendCatalog = sendCatalog;
        this.addressType = addressType;
        this.street1 = street1;
        this.street2 = street2;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
    return Customer;
}());
exports.Customer = Customer;
