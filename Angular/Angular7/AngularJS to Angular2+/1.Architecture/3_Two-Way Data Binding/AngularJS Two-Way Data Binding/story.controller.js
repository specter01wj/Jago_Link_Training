(function () {
  angular
    .module('app', [])
    .controller('StoryController', StoryController);

  function StoryController() {
    var vm = this;

    vm.title = 'Angular 1 Two-Way Binding';

    vm.story = {
      name: 'The Empire Strikes Back'
    };
    
  }
})();



/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/