/* List notes controller */
(function() {
    angular.module('APP').controller("ListCtrl", ListCtrl);

    ListCtrl.$inject = ['$state', 'notesService'];

    function ListCtrl ($state, notesService) {
        this.list = notesService.query();
        this.add = add;

        function add(){
            $state.go('add');
        }
    };
})();