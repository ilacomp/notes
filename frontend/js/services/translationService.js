/* Notes Translation Services */
(function() {
    angular.module('APP').factory('translationService', translationService);

    translationService.$inject = ['$resource', '$rootScope'];

    function translationService($resource, $rootScope) {
        return {getTranslation : getTranslation};

        function getTranslation(language) {
            var languageFilePath = '/translations/' + language + '.json';
            $resource(languageFilePath).get(function (data) {
                $rootScope.translation = data;
            });
        };
    };
})();