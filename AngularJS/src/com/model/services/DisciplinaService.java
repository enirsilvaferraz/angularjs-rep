package com.model.services;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

//http://localhost:8080/AngularJS/resources/disciplina/consultar
@Path("/disciplina")
public class DisciplinaService {

	@GET
	@Path("/consultar")
	@Produces({ MediaType.APPLICATION_JSON })
	public Disciplina[] obterDisciplinasPorAluno(
			@QueryParam(value = "matricula") String pMatricula,
			@QueryParam(value = "curso") String pCurso) {
		return Disciplina.obterTodos();
	}
}
