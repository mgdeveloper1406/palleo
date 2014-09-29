'use strict';

/* App Module */

var paleoApp = angular.module('paleoApp', [
  'ngRoute',
  'paleoControllers',
  'paleoFilters',
  'paleoServices'
]);

paleoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/recipes', {
        templateUrl: 'partials/recipe-list.html',
        controller: 'RecipeListCtrl'
      }).
      when('/recipes/:recipeId', {
        templateUrl: 'partials/recipe-detail.html',
        controller: 'RecipeDetailCtrl'
      }).
      otherwise({
        redirectTo: '/recipes'
      });
  }]);
