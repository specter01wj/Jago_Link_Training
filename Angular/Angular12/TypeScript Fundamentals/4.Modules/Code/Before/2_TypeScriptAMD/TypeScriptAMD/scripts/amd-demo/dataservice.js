define(["require", "exports"], function (require, exports) {
    ;
    var DataService = (function () {
        function DataService() {
            this.msg = 'Welcome to the Show!';
        }
        DataService.prototype.getMessage = function () { return this.msg; };
        return DataService;
    })();
    exports.DataService = DataService;
});
//# sourceMappingURL=dataservice.js.map