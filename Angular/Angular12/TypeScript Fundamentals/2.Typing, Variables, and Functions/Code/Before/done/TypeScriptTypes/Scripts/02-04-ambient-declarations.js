/// <reference path="typings/knockout.d.ts" />
var demo_02_04;
(function (demo_02_04) {
    var name = ko.observable('John Papa');
    var id = ko.observable(1);
    var guy = {
        id: id,
        fullName: name
    };
    // not what you expected!
    //var value: string = guy.fullName;
    var value = guy.fullName();
    console.log(guy.fullName);
    var a = ko.observableArray([]);
})(demo_02_04 || (demo_02_04 = {}));
