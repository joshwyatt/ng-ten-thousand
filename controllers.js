function MainController(MainService){
  var vm = this;

  vm.data = ['josh', 'blue', 'wild'];

  vm.reverse = MainService.reverse;

  vm.remove = function(){
    vm.data.pop();
  };
}

function LinkController(){
  var vm = this;
  vm.link = 'http://theonion.com';
}

angular.module('controllers', ['services'])
.controller('MainController', MainController);