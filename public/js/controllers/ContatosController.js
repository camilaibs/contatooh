angular.module('contatooh').controller('ContatosController', function($scope, Contato){
    $scope.mensagem = {texto: ''};

    $scope.filtro = '';

    $scope.contatos = [];

    function buscaContatos() {
        Contato.query(
            function(contatos) {
                $scope.contatos = contatos;
                $scope.mensagem = {};
            },
            function(erro) {
                console.log(erro);
                $scope.mensagem = {
                    texto: 'Não foi possível obter a lista'
                };
            }
        );
    }

    buscaContatos();

    $scope.remove = function(contato) {
        Contato.delete({id: contato._id}, 
            buscaContatos, 
            function(erro) {
                $scope.mensagem = {
                    texto: 'Não foi possível remover o contato'
                };
                consile.log(erro);
            }
        );
    };
});