(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];

  function MenuDataService($http) {
    var service =this;

    service.getAllCategories = function () {
      return $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/categories.json'
      })
      .then(function (resp) {
        return resp.data;
      });
    }

    service.getItemsForCategory = function (categoryShortName) {

        return $http({
        method: "GET",
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
        params: {
          category: categoryShortName
        }
      }).then(function (resp) {
        return resp.data.menu_items;
      });
    }
  }
})();
