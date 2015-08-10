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
    	
    	// $scope.notaFiltro.siglaDisciplina = angular.isUndefined($scope.disciplinaSelecionada.selected) ? '' : $scope.disciplinaSelecionada.selected.sigla;
    
    	console.log($scope.notaFiltro.siglaDisciplina);
    	
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
    
})

.directive('convert', function() {
  
	return {
    
		require: 'ngModel',
		link: 
			
			function(scope, element, attrs, ngModel) {
      
				ngModel.$parsers.push(function(val) {
					
					var objeto = [];
					angular.forEach(scope.disciplinas, function(value, key) {
						if (value.nome == val){
							this.push(value);
						}
					}, objeto);
					
					if (objeto.length == 0){
						return "";						
					}
					
					return objeto[0].sigla;
				});
				
				ngModel.$formatters.push(function(val) {
					return '' + val;
				});
			}
	};
});
	