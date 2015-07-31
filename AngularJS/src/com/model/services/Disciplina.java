package com.model.services;

public class Disciplina {

	private String nome;

	private String sigla;

	public Disciplina(String nome, String sigla) {
		this.nome = nome;
		this.sigla = sigla;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSigla() {
		return sigla;
	}

	public void setSigla(String sigla) {
		this.sigla = sigla;
	}

	public static Disciplina[] obterTodos() {

		return new Disciplina[] {
				new Disciplina("Metodologia da Pesquisa Cient�fica", "MPC"),
				new Disciplina("Desenvolvimento �gil de Software", "DAS"),
				new Disciplina("Princ�pios de Arquitetura de Software", "PAS"),
				new Disciplina("An�lise e Projeto de Arquitetura de Software", "APA"),
				new Disciplina("Gerenciamento de Processos de Neg�cio", "BPM"),
				new Disciplina("Arquitetura e Qualidade de Dados", "AQD"),
				new Disciplina("Arquiteturas Corporativas", "AC"),
				new Disciplina("Padr�es de Projeto", "PP"),
				new Disciplina("Arquitetura Orientada a Servi�os", "SOA"),
				new Disciplina("Arquitetura de Software na Web", "ASW"),
				new Disciplina("Arquitetura de Software no Ambiente .NET", "NET"),
				new Disciplina("Arquitetura de Software no Ambiente JEE", "JEE"),
				new Disciplina("Arquitetura de Aplicativos M�veis", "AAM"),
				new Disciplina("Desenvolvimento de Aplicativos M�veis", "DAM"),
				new Disciplina("Integra��o de Aplica��es", "EAI"),
				new Disciplina("Avalia��o de Arquitetura de Software", "AAS"),
				new Disciplina("Big Data", "BIG"),
				new Disciplina("Arquitetura de Sofware e de Dados Seguro", "ASS"),
				new Disciplina("Arquitetura de Computa��o em Nuvens e em Grid", "ACN") };
	}

	public static Disciplina obterPorId(String pId) {
		
		for (Disciplina item : obterTodos()) {
			if (item.getSigla().equals(pId)){
				return item;
			}
		}

		return null;
	}

}
