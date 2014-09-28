'use strict';

/* Services */

var paleoServices = angular.module('paleoServices', ['ngResource']);

paleoServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
