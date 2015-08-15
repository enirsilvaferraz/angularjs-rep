<<<<<<< HEAD
var app = angular.module('AngularJS', ['ui.bootstrap', 'ngResource', 'ngRoute'])

.constant("URLWS", {
    "CONSULTAR_NOTAS": "/AngularJS/resources/nota/consultar",
    "CONSULTAR_DISCIPLINAS": "/AngularJS/resources/disciplina/consultar"
})

.constant("MSG", {
    "I": "info",
    "W": "warning",
    "D": "danger",
    "S": "success"
})

.config(function($locationProvider){
    $locationProvider.html5Mode({
        enabled : true,
        requireBase : false
    }).hashPrefix('#');
});

/*
.config(function($routeProvider, $locationProvider){
    
    $routeProvider
    .when('/', {
    	 templateUrl : 'aplicacao/paginas/acesso.html',
         controller : 'loginController'
    })
    .when('/consultar-nota/:tipoAcesso/:login', {
        templateUrl : 'aplicacao/paginas/area-aluno.html',
        controller : 'conultarNotasAlunoController'
    })
    .otherwise({
        redirectTo : '/'
    });
    
    $locationProvider.html5Mode(true);
    
})
=======
var app = angular.module('AngularJS', ['ui.bootstrap', 'ngResource', 'ngRoute'])

.constant("URLWS", {
    "CONSULTAR_NOTAS": "/AngularJS/resources/nota/consultar",
    "CONSULTAR_DISCIPLINAS": "/AngularJS/resources/disciplina/consultar"
})

.constant("MSG", {
    "I": "info",
    "W": "warning",
    "D": "danger",
    "S": "success"
})

.config(function($locationProvider){
    $locationProvider.html5Mode({
        enabled : true,
        requireBase : false
    }).hashPrefix('#');
});

/*
.config(function($routeProvider, $locationProvider){
    
    $routeProvider
    .when('/', {
    	 templateUrl : 'aplicacao/paginas/acesso.html',
         controller : 'loginController'
    })
    .when('/consultar-nota/:tipoAcesso/:login', {
        templateUrl : 'aplicacao/paginas/area-aluno.html',
        controller : 'conultarNotasAlunoController'
    })
    .otherwise({
        redirectTo : '/'
    });
    
    $locationProvider.html5Mode(true);
    
})
>>>>>>> origin/master
*/