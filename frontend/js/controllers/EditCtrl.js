/* Edit note controller */

(function() {
    angular.module('APP').controller("EditCtrl", EditCtrl);

    EditCtrl.$inject = ['notesService', '$state', 'toaster', '$rootScope'];

    function EditCtrl (notesService, $state, toaster, $rootScope) {
        this.note = notesService.get({id: $state.params.id});
        var self = this;
        this.disabled = false;
        this.save = save;
        this.cancel = cancel;
        this.remove = remove;

        function save(){
            self.disabled = true;
            notesService.put({id: self.note.id}, {title: self.note.title}, onSuccess, onError);

            function onError(data){
                self.disabled = false;
                toaster.error($rootScope.translation.ERROR, $rootScope.translation.ERROR_SAVE);
            }

            function onSuccess(data){
                self.disabled = false;
                $state.go('list');
            }
        };

        function cancel(){
            $state.go('list');
        };

        function remove(){
            self.disabled = true;
            notesService.delete({id: self.note.id}, onSuccess, onError);

            function onError(data){
                self.disabled = false;
                toaster.error($rootScope.translation.ERROR, $rootScope.translation.ERROR_REMOVE);
            }

            function onSuccess(data){
                self.disabled = false;
                $state.go('list');
            }

        }

    };
})();