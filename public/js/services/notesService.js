/* Notes REST Services */
(function() {
    angular.module('APP').factory('notesService', notesService);

    notesService.$inject = ['$resource'];

    function notesService($resource) {
        return $resource('http://private-9aad-note10.apiary-mock.com/notes/:id',
            {},
            {
                post: {method:'POST'},
                put: {method: 'PUT'}
            }
        );
    };
})();