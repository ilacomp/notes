/**
 * Created by Илья on 18.01.2016.
 */
(function() {
    angular.module('APP').controller("ListCtrl", ListCtrl);

    ListCtrl.$inject = ['notesService'];

    function ListCtrl (notesService) {
        this.list = notesService.query();
    };
})();