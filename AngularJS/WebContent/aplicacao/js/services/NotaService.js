app.service('NotaService', function($resource) {
	return $resource("/AngularJS/resources/nota/consultar", {matricula: '',	siglaCurso: '', siglaDisciplina: '', dataInicial: '', dataFinal: ''});
});