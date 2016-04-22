/**
 * Created by Илья on 18.01.2016.
 */
(function() {
    angular.module('APP').controller("EditCtrl", EditCtrl);

    EditCtrl.$inject = ['notesService', '$state', 'toaster'];

    function EditCtrl (notesService, $state, toaster, ngAnimate) {
        this.note = notesService.get({id: $state.params.id});
        var self = this;
        this.disabled = false;
        this.save = save;
        this.cancel = cancel;
        this.remove = remove;

        function save(){
            self.disabled = true;
            notesService.put({id: self.note.id}, {title: self.note.title}, function(data){
                self.disabled = false;
                if (data.error) {
                    toaster.error("Error", data.error);
                } else {
                    $state.go('list');
                }
            });
        };

        function cancel(){
            $state.go('list');
        };

        function remove(){
            self.disabled = true;
            notesService.delete({id: self.note.id}, function(data){
                self.disabled = false;
                if (data.error) {
                    toaster.error("Error", data.error);
                } else {
                    $state.go('list');
                }
            });
        }

    };
})();