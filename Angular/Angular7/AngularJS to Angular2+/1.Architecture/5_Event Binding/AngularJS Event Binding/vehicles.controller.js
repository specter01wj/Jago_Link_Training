(function () {
  angular
    .module('app', [])
    .controller('VehiclesController', VehiclesController);

  function VehiclesController() {
    var vm = this;

    vm.title = 'Angular 1 Binding Events';
    vm.imagePath = 'optimum.jpeg';
    vm.messages = [];

    vm.vehicles = [
      { id: 1, name: 'X-Wing Fighter' },
      { id: 2, name: 'Tie Fighter' },
      { id: 3, name: 'Y-Wing Fighter' }
    ];

    vm.log = function (msg, data) {
      vm.messages.splice(0, 0, msg);
      console.log(msg);
      if (data) {
        console.log(data);
      }
    }

  }
})();



/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/