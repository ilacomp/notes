(function() {
    angular.module('APP').controller("AddCtrl", AddCtrl);

    AddCtrl.$inject = ['$state', 'notesService', 'toaster'];

    function AddCtrl ($state, notesService) {
        var self = this;
        this.title = '';
        this.disabled = false;
        this.addNote = addNote;
        this.cancel = cancel;

        function addNote(){
            self.disabled = true;
            notesService.post({title: self.title}, function(data){
                self.disabled = false;
                if (data.error) {
                    toaster.error("Error", data.error);
                } else {
                    $state.go('list');
                }
            });

        }

        function cancel(){
            $state.go('list');
        }
    };
})();