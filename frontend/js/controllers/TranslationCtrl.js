/* Translations Controller */
(function() {
    angular.module('APP').controller("TranslationCtrl", TranslationCtrl);

    TranslationCtrl.$inject = ['translationService'];

    function TranslationCtrl (translationService) {
        var self = this;
        this.language = 'EN';
        this.changeLanguage = changeLanguage;
        translationService.getTranslation('EN');

        function changeLanguage(){
            translationService.getTranslation(self.language);
        }

    };
})();