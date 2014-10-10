function MainController(MainService){
  var vm = this;

  vm.data = ['josh', 'blue', 'wild'];

  vm.reverse = MainService.reverse;

  vm.remove = function(){
    vm.data.pop();
  };
}

angular.module('controllers', ['services'])
.controller('MainController', MainController);