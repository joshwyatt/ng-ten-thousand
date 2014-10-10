function MainController(){
  this.data = {
    name: 'josh',
    age: 34,
    eyes: 'blue'
  };
}


angular.module('controllers', [])

.controller('MainController', MainController);