package com.model.services;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

//http://localhost:8080/AngularJS/resources/nota/consultar
@Path("/nota")
public class NotaService {

	@GET
	@Path("/consultar")
	@Produces({ MediaType.APPLICATION_JSON })
	public Nota[] obterNotasPorAluno(
			@QueryParam(value = "matricula") String pMatricula,
			@QueryParam(value = "siglaCurso") String pSiglaCurso,
			@QueryParam(value = "siglaDisciplina") String pSiglaDisciplina,
			@QueryParam(value = "dataInicial") String pDataInicial,
			@QueryParam(value = "dataFinal") String pDataFinal)
			throws Exception {

		return Nota.obterPorFiltro(pSiglaDisciplina, pDataInicial, pDataFinal);
	}
}
