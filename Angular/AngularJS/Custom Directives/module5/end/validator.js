(function() {

  var validator = function () {

      var regexes = {
          phone: /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g,
          zipcode: /^\d{5}([\-]?\d{4})?$/g,
          email: /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/g,
          date: /^((0?[13578]|10|12)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[01]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1}))|(0?[2469]|11)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[0]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1})))$/g
      };

      var link = function(scope, elem, attrs, ngModelCtrl) {

          var validationType = attrs.validator,
              regex = new RegExp(regexes[validationType]);

          //Model to the View
          ngModelCtrl.$formatters.unshift(function(value) {
              setErrorIfInvalid(value);
              return value;
          });

          //View to the Model
          ngModelCtrl.$parsers.unshift(function(value) {
              var isValid = setErrorIfInvalid(value);
              return isValid ? value : undefined;
          });

          function setErrorIfInvalid(value) {
              var isValid = regex.test(value);
              ngModelCtrl.$setValidity('invalid', isValid);
              return isValid;
          }

//          ngModelCtrl.$validators.invalid = function(modelValue, viewValue) {
//              var value = modelValue || viewValue;
//              return regex.test(value);
//          };

      };

      return {
          restrict: 'A',
          require: 'ngModel',
          link: link
      };
  };

  angular.module('directivesModule')
    .directive('validator', validator);

}());
