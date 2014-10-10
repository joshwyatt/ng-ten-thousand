function MainService(){
  var MainService = {};

  MainService.reverse = function(str){
    return str.split('').reverse().join('');
  }

  return MainService;
}




angular.module('services', [])

.factory('MainService', MainService);