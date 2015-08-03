app.service('DisciplinaService', function($resource) {
	return $resource("/AngularJS/resources/disciplina/consultar/", {matricula:'17'});
});