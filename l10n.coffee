'use strict';
APP_NAME = 'clientApp'
LANG_FILE = 'scripts/language.json'
DEFAULT_LANGUAGE = 'en'
CURRENT_LANG = 'en'

angular.module(APP_NAME)
  .service 'l10n', ($http, $rootScope) ->
    selectedLang = DEFAULT_LANGUAGE
    if !$rootScope.translations
      $rootScope.translations = {}
      promise = $http.get(LANG_FILE)
      promise.success((response) ->
        $rootScope.translations = response
      )

    translate: (id) ->
      $rootScope.translations[id][selectedLang] unless _.isEmpty($rootScope.translations)

angular.module(APP_NAME)
  .filter 'l10n', (l10n) ->
    (input) ->
      l10n.translate input