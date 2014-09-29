'use strict';

/* Filters */

var paleoFilters = angular.module('paleoFilters', []);

paleoFilters.filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});


