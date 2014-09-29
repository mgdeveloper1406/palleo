'use strict';

/* Services */

var paleoServices = angular.module('paleoServices', ['ngResource']);

paleoServices.factory('Recipe', ['$resource',
  function($resource){
    return $resource('recipes/:recipeId.json', {}, {
      query: {method:'GET', params:{recipeId:'recipes'}, isArray:true}
    });
  }]);

// 1. Registers Recipe as a resource. 
// 2. a json object from the template URL 'recipes/:recipeId.json' where recipeId is as a variable.
// Maybe it returns 'recipes' as the model varialbe, which is used in the ng-repeat directive
