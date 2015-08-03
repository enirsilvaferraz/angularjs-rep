var app = angular.module('AngularJS', ['ui.bootstrap', 'ui.select', 'ngResource'])

.constant("URLWS", {
    "CONSULTAR_NOTAS": "/AngularJS/resources/nota/consultar",
    "CONSULTAR_DISCIPLINAS": "/AngularJS/resources/disciplina/consultar"
})

.constant("MSG", {
    "I": "info",
    "W": "warning",
    "D": "danger",
    "S": "success"
});