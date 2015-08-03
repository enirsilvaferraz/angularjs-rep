app.controller('conultarNotasAlunoController', function ($scope, $http, Mensagem, DisciplinaService, NotaService, MSG) {

	$scope.curso = "Arquitetura de Software Distribuído"
	
	$scope.disciplinaSelecionada = {};
	$scope.notaFiltro = {matricula:1, siglaDisciplina:'', dataInicial:'', dataFinal:''};

    DisciplinaService.query().$promise.then(
    	function(data) {
			$scope.disciplinas = data;
	    }, 
	    function (error){
	    	new Mensagem($scope).enviar(MSG.D, error.status + " - " + error.statusText);
	    });
    
   
    $scope.consultarNotas = function () {
    	
    	$scope.notaFiltro.siglaDisciplina = angular.isUndefined($scope.disciplinaSelecionada.selected) ? '' : $scope.disciplinaSelecionada.selected.sigla;
    	
    	NotaService.query($scope.notaFiltro).$promise.then(
    		function(data) {
				$scope.notas = data;
				new Mensagem($scope);  	// Limpar mensagem
	    	},
	    	function (error){
	        	new Mensagem($scope).enviar(MSG.D, error.status + " - " + error.statusText);
	        });

    };
    
});
