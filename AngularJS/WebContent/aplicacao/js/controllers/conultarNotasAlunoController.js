app.controller('conultarNotasAlunoController', function ($scope, $http,  $location, Mensagem, DisciplinaService, NotaService, CursoService, MSG) {

	$scope.usuario = $location.search();
	$scope.notaFiltro = {matricula:$scope.usuario.login, siglaCurso:'', siglaDisciplina:'', dataInicial:'', dataFinal:''};
	
	CursoService.query({matricula:$scope.usuario.login}).$promise.then(
    	function(data) {
			$scope.cursos = data;
	    }, 
	    function (error){
	    	new Mensagem($scope).enviar(MSG.D, error.status + " - " + error.statusText);
	    });
	
	$scope.pesquisarDisciplinas = function () {
		
		if ($scope.notaFiltro.siglaCurso != ''){

		    DisciplinaService.query({matricula:$scope.usuario.login}).$promise.then(
		    	function(data) {
					$scope.disciplinas = data;
			    }, 
			    function (error){
			    	new Mensagem($scope).enviar(MSG.D, error.status + " - " + error.statusText);
			    });
	    
		}
		
		else {
			$scope.disciplinas = {};
		}
    
	};
   
    $scope.consultarNotas = function () {
    	
    	if ($scope.notaFiltro.siglaDisciplina == '' && ($scope.notaFiltro.dataInicial == '' || $scope.notaFiltro.dataInicial == '')){
    		new Mensagem($scope).enviar(MSG.D, "Deve-se fornecer a disciplina ou o período!");
    	}
    	
    	else {
	    	
    		NotaService.query($scope.notaFiltro).$promise.then(
	    		function(data) {
					$scope.notas = data;
					new Mensagem($scope);  	// Limpar mensagem
					if (data == ''){
						new Mensagem($scope).enviar(MSG.D, "Nenhum Registro Encontrado!");
					}
		    	},
		    	function (error){
		        	new Mensagem($scope).enviar(MSG.D, error.status + " - " + error.statusText);
		        });
    	}

    };
    
});	