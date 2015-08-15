app.service('DisciplinaService', function($resource) {
	return $resource("/AngularJS/resources/disciplina/consultar/", {curso:'', matricula:''});
});