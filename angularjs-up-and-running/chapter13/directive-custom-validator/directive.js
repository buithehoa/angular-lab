// File: chapter13/directive-custom-validator/directive.js
angular.module('stockMarketApp')
  .directive('validZip', [function() {
    var zipCodeRegex = /^\d{5}(?:[-\s]\d{4})?$/g;
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function($scope, $element, $attrs, ngModelCtrl) {
        ngModelCtrl.$validators.zip = function(value) {
          console.log("You called me?");
          return zipCodeRegex.test(value);
        };

        ngModelCtrl.$validators.whatever = function(value) {
          console.log("This is where validation rule is defined.");
        };
      }
    };
  }]);
