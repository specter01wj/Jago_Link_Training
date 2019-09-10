(function () {
  angular
    .module('app', [])
    .controller('VehiclesController', VehiclesController);

  VehiclesController.$inject = ['VehicleService'];
  function VehiclesController(VehicleService) {
    var vm = this;
    vm.title = 'Services';
    vm.vehicles = VehicleService.getVehicles();
  }
})();



/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/