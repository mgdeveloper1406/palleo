'use strict';

/* Controllers */

var paleoControllers = angular.module('paleoControllers', []);

paleoControllers.controller('RecipeListCtrl', ['$scope', 'Recipe',
  function($scope, Recipe) {
    $scope.recipes = Recipe.query(); // from the Recipe service, invoke query() function
    $scope.orderProp = '-stars';
  }]);

paleoControllers.controller('RecipeDetailCtrl', ['$scope', '$routeParams', 'Recipe',
  function($scope, $routeParams, Recipe) {
    $scope.recipe = Recipe.get({recipeId: $routeParams.recipeId}, function(recipe) {
      $scope.mainImageUrl = recipe.largeImageUrl;
    });
    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);

/*
paleoControllers.controller('RatingCtrl', ['$scope',
  function($scope) {
    $scope.rating = 5;
    $scope.rateFunction = function(rating) {
      alert('Rating selected - ' + rating);
    };
  ]})


paleoControllers.directive('starRating',['$watch',
  function() {
    return {
      restrict : 'A',
      template : '<ul class="rating">'
           + '  <li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">'
           + '\u2605'
           + '</li>'
           + '</ul>',
      scope : {
        ratingValue : '=',
        max : '=',
        onRatingSelected : '&'
      },
      link : function(scope, elem, attrs) {
        var updateStars = function() {
          scope.stars = [];
          for ( var i = 0; i < scope.max; i++) {
            scope.stars.push({
              filled : i < scope.ratingValue
            });
          }
        };
        
        scope.toggle = function(index) {
          scope.ratingValue = index + 1;
          scope.onRatingSelected({
            rating : index + 1
          });
        };
        
        scope.$watch('ratingValue',
          function(oldVal, newVal) {
            if (newVal) {
              updateStars();
            }
          }
        );
      }
    };
  }
]);*/