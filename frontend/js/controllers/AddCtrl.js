/* Add note controller */
(function() {
    angular.module('APP').controller("AddCtrl", AddCtrl);

    AddCtrl.$inject = ['$state', 'notesService', 'toaster', '$rootScope'];

    function AddCtrl ($state, notesService, toaster, $rootScope) {
        var self = this;
        this.title = '';
        this.disabled = false;
        this.addNote = addNote;
        this.cancel = cancel;

        function addNote(){
            self.disabled = true;
            notesService.post({title: self.title}, onSuccess, onError);

            function onError(data){
                self.disabled = false;
                toaster.error($rootScope.translation.ERROR, $rootScope.translation.ERROR_SAVE);
            }

            function onSuccess(data){
                self.disabled = false;
                $state.go('list');
            }
        }

        function cancel(){
            $state.go('list');
        }
    };
})();