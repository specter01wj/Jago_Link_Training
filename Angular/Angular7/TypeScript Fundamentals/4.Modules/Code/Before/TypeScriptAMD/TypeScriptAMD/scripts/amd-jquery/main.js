/// <reference path="../typings/require.d.ts" />
/// <reference path="bootstrapper.ts" />
require.config({
    baseUrl: 'scripts/amd-jquery',
    shim: {
        jquery: {
            exports: '$'
        }
    },
    paths: {
        'jquery': '../jquery',
        'toastr': '../toastr'
    }
});
require(['bootstrapper', 'jquery', 'toastr'], function (bootstrapper, $, toastr) {
    bootstrapper.run();
});
//# sourceMappingURL=main.js.map