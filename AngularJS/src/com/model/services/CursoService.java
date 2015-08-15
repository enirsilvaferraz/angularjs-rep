package com.model.services;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

@Path("/curso")
public class CursoService {

	@GET
	@Path("/consultar")
	@Produces({ MediaType.APPLICATION_JSON })
	public List<Curso> consultarCurso(
			@QueryParam(value = "matricula") String matricula) {

		return Curso.consultarPorUsuario(matricula);
	}

}
