app.controller('conultarNotasAlunoController', function ($scope, $http, Mensagem, MSG, URLWS) {

	$scope.curso = "Arquitetura de Software Distribuído"
	
	$scope.disciplinaSelecionada = {};
    consultarDisciplinas($scope, $http);
    
    $scope.siglaDisciplina = "";
    $scope.dataInicial="";
    $scope.dataFinal="";
    
    $scope.consultarNotas = function () {
    	
    	new Mensagem($scope);  	// Limpar mensagem
    	
    	$http({
            url: URLWS.CONSULTAR_NOTAS,
            method: 'GET',
            params:	{
            	"matricula": "10",
            	"siglaDisciplina": angular.isUndefined($scope.disciplinaSelecionada.selected) ? '' : $scope.disciplinaSelecionada.selected.sigla,
            	"dataInicial": $scope.dataInicial,
            	"dataFinal": $scope.dataFinal
            }
        })
        .success(function (data) {
        	$scope.notas = data; 

        	if ($scope.notas.length == 0){
        		new Mensagem($scope).enviar(MSG.W, 'Nenuhm registro encontrado!');
        	}
        	
        })
        .error(function (data){
        	new Mensagem($scope).enviar(MSG.D, data);
        });

    };
    
});

function consultarDisciplinas ($scope, $http) {
    
	$http({
        url: URLWS.CONSULTAR_DISCIPLINAS,
        method: 'GET',
        params:	{
        	"matricula": "10"
        }
    })
    .success(function (data) {
    	$scope.disciplinas = data; 
    })
    .error(function (){
    	new Mensagem($scope).enviar(MSG.D, data);
    });
	
};

