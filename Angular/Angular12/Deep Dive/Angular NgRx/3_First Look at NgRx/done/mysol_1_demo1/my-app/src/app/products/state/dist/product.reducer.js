"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.productReducer = void 0;
var store_1 = require("@ngrx/store");
exports.productReducer = store_1.createReducer({ showProductCode: true }, store_1.on(store_1.createAction('[Product] Toggle Product Code'), function (state) {
    return __assign(__assign({}, state), { showProductCode: !state.showProductCode });
}));
