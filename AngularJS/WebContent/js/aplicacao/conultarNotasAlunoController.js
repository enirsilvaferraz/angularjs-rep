var app = angular.module('aplicacao', ['ui.bootstrap', 'ui.select']);

app.controller('conultarNotasAlunoController', function ($scope, $http) {

	$scope.curso = "Arquitetura de Software Distribuído"
	
	$scope.disciplinaSelecionada = {};
    consultarDisciplinas($scope, $http);
    
    $scope.siglaDisciplina = "";
    $scope.dataInicial="";
    $scope.dataFinal="";
    
    $scope.consultarNotas = function () {
        
    	$http({
            url: '../resources/nota/consultar',
            method: 'GET',
            params:	{
            	"matricula": "10",
            	"siglaDisciplina": $scope.disciplinaSelecionada.selected.sigla,
            	"dataInicial": $scope.dataInicial,
            	"dataFinal": $scope.dataFinal
            }
        })
        .success(function (data) {
        	$scope.notas = data; 

        	$scope.mensagemAlerta = '';
        	if ($scope.notas.length == 0){
        		$scope.mensagemAlerta = 'Nenuhm registro encontrado!'
        	}
        	
        })
        .error(function (){
        	alert("Erro ao consultar!!!");
        });

    };
    
});

function consultarDisciplinas ($scope, $http) {
    
	$http({
        url: '../resources/disciplina/consultar',
        method: 'GET',
        params:	{
        	"matricula": "10"
        }
    })
    .success(function (data) {
    	$scope.disciplinas = data; 
    })
    .error(function (){
    	alert("Erro ao consultar!!!");
    });
	
};

