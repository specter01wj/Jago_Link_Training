(function () {
  'use strict';

  angular
    .module('app')
    .service('VehicleService', VehicleService);

  function VehicleService() {
    this.getVehicles = function () {
      return [
        { id: 1, name: 'X-Wing Fighter' },
        { id: 2, name: 'Tie Fighter' },
        { id: 3, name: 'Y-Wing Fighter' }
      ];
    }
  }
})();

/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/