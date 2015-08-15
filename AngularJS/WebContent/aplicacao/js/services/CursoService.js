app.service('CursoService', function($resource) {
	return $resource("/AngularJS/resources/curso/consultar/", {matricula:''});
});