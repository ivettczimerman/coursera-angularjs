(function () {
	
	angular.module('shop-app', [])
	.service('ListService', ListService)
	.controller('toBuyController', toBuyController)
	.controller('boughtController', boughtController);

function ListService() {
	var service = this;
	var toBuy = [{
		name: "banana",
		quantity: 2
	},
	{
		name: "apple",
		quantity: 3
	},
	{
		name: "pear",
		quantity: 2
	},
	{
		name: "grapes",
		quantity: 6
	},
	{
		name: "bread",
		quantity: 1
	}];
	
	var bought = [];

	service.getToBuy = function(){
		return toBuy;
	}
	
	service.boughtItem = function(indexItem){
		bought.push(toBuy.splice(indexItem, 1)[0]);
	}
	
	service.getBought = function(){
		return bought;
	}
}

toBuyController.$inject = ['$scope', 'ListService'];
function toBuyController($scope, ListService){
	this.items = ListService.getToBuy();
	
	this.bought = function(itemIndex){
		ListService.boughtItem(itemIndex);
	}
}
	
boughtController.$inject = ['$scope', 'ListService'];
function boughtController($scope, ListService){
	this.items = ListService.getBought();
}	
})();