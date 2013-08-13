(function() {
  'use strict';
  var APP_NAME, CURRENT_LANG, DEFAULT_LANGUAGE, LANG_FILE;

  APP_NAME = 'clientApp';

  LANG_FILE = 'scripts/language.json';

  DEFAULT_LANGUAGE = 'en';

  CURRENT_LANG = 'en';

  angular.module(APP_NAME).service('l10n', function($http, $rootScope) {
    var promise, selectedLang;
    selectedLang = DEFAULT_LANGUAGE;
    if (!$rootScope.translations) {
      $rootScope.translations = {};
      promise = $http.get(LANG_FILE);
      promise.success(function(response) {
        return $rootScope.translations = response;
      });
    }
    return {
      translate: function(id) {
        if (!_.isEmpty($rootScope.translations)) {
          return $rootScope.translations[id][selectedLang];
        }
      }
    };
  });

  angular.module(APP_NAME).filter('l10n', function(l10n) {
    return function(input) {
      return l10n.translate(input);
    };
  });

}).call(this);
