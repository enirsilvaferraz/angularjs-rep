package com.model.services;

import java.util.ArrayList;
import java.util.List;

public class Curso {

	private String sigla;

	private String nome;

	public Curso(String sigla, String nome) {
		super();
		this.sigla = sigla;
		this.nome = nome;
	}

	public String getSigla() {
		return sigla;
	}

	public void setSigla(String sigla) {
		this.sigla = sigla;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public static List<Curso> consultarPorUsuario(String matricula) {

		List<Curso> lista = new ArrayList<>();
		lista.add(new Curso("ASD", "Arquitetura de Software Distribuído"));

		return lista;
	}

}
