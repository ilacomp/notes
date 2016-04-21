/**
 * Created by Илья on 18.01.2016.
 */
(function() {
    angular.module('APP').controller("EditCtrl", EditCtrl);

    EditCtrl.$inject = ['notesService', '$state'];

    function EditCtrl (notesService, $state) {
        this.note = notesService.get({id: $state.params.id});
    };
})();