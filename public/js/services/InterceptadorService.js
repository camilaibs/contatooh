angular.module('contatooh')
    .factory('meuInterceptor', 
        function($location, $q) {
            var interceptador = {
                responseError: function(resposta) {
                    if (resposta.status == 401) {
                        $location.path('/auth');
                    }
                    return $q.reject(resposta);
                }
            }
            return interceptador;
        });