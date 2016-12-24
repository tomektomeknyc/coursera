/**
 * Created by tomaszosuchowski on 12/21/16.
 */
(function () {
    'use strict';
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItems)
        .constant('UrlPath', "http://davids-restaurant.herokuapp.com");


       function FoundItems() {

            var ddo = {
                restrict:"AE" ,
             templateUrl: 'index.html',
                scope: {
                    foundItems: '<',
                    onRemove: '&'
                       },
                controller: NarrowItDownController,
                controllerAs: 'list',
                bindToController: true

            };

         return ddo;
       }





    NarrowItDownController.$inject= [MenuSearchService];

    function NarrowItDownController(MenuSearchService) {

        var search = this;
        var found = this;
        found = MenuSearchService.getMatchedMenuItems(searchTerm);

        found.then(function(response){

        search.items = response.data;
            console.log = response.data;

        })
            .catch(function(error) {
                console.log("There are errors");
            });




    }
MenuSearchService.$inject=['http', 'UrlPath']
    function MenuSearchService($http,UrlPath){

var service = this;

       var  foundItems = [];

        service.getMatchedMenuItems= function(searchTerm) {

             var response = $http({
                method:"GET",
                url:(UrlPath+ "/menu_items.json"),
                params: {
                    category:menuItems
                }
            });
            return response;

        };

    }




})();
