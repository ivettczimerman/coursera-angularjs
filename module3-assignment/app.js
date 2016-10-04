(function () {
'use strict';

angular.module('MenuFilterApp', [])
.controller('MenuFilterController', MenuFilterController)
.service('MenuFilterService', MenuFilterService)
.directive('listItemDescription', ListItemDescription)
.directive('listItem', ListItem)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");



function ListItemDescription(){
	var ddo = {
		template : '{{ category.short_name }} {{ category.name }} {{category.description}}'
	}
	return ddo;
}

function ListItem(){
	var ddo = {
		templateUrl : 'listItem.html'
	}
	return ddo;
}

MenuFilterController.$inject = ['MenuFilterService'];
function MenuFilterController(MenuFilterService) {
  var menu = this;

  var promise = MenuFilterService.getMenuFilter();

  promise.then(function (response) {
    menu.categories = response.data;
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });

  menu.logMenuItems = function (shortName) {
    var promise = MenuFilterService.getMenuForCategory(shortName);

    promise.then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  };

}


MenuFilterService.$inject = ['$http', 'ApiBasePath']
function MenuFilterService($http, ApiBasePath) {
  var service = this;

  service.getMenuFilter = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    });

    return response;
  };


  service.getFilteredMenu = function (shortName) {
	  console.log($searchWord);
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
      //params: {
        //category: shortName
      //}
    });

    return response;
  };

}

})();