/// <reference path="typings/knockout.d.ts" />
declare var ko: KnockoutStatic;

// namespace is the preferred keyword over module
namespace demo_02_04 {

    var name = ko.observable('John Papa');
    var id = ko.observable(1);
    var guy = {
        id: id,
        fullName: name
    };

    // not what you expected!
    //var value: string = guy.fullName;

    var value: string = guy.fullName();
    console.log(guy.fullName);

    var a = ko.observableArray([]);
}