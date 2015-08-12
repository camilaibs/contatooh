angular.module('contatooh').controller('ContatoController', function($scope, $routeParams, Contato) {
    if ($routeParams.contatoId) {
        Contato.get({id: $routeParams.contatoId}, 
            function(contato) {
                console.log(contato);
                $scope.contato = contato;
                // console.log($scope.contato)
            }, 
            function(erro) {
                $scope.mensagem = {
                    texto:'Não foi possível obter o contato.'
                };
                console.log(erro);
            }
        );
    } else {
        $scope.contato = new Contato();
    }

    Contato.query(function(contatos) {
        $scope.contatos = contatos;
    });

    $scope.salva = function() {
        $scope.contato.$save()
            .then(function(){
                $scope.mensagem = {texto: 'Salvo com sucesso'};
                $scope.contato = new Contato();
            })
            .catch(function(erro) {
                $scope.mensagem = {texto: 'Não foi possível salvar'};
            });
    };
});