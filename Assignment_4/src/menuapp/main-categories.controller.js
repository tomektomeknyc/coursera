(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('MainCategoriesController', MainCategoriesController);

  MainCategoriesController.$inject = ['catlist'];
  function MainCategoriesController(catlist) {
    var ctrl = this;

    ctrl.categories = 1;
    ctrl.catlist = catlist;
  }
})();
