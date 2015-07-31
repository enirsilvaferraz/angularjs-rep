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
				new Disciplina("Metodologia da Pesquisa Científica", "MPC"),
				new Disciplina("Desenvolvimento Ágil de Software", "DAS"),
				new Disciplina("Princípios de Arquitetura de Software", "PAS"),
				new Disciplina("Análise e Projeto de Arquitetura de Software", "APA"),
				new Disciplina("Gerenciamento de Processos de Negócio", "BPM"),
				new Disciplina("Arquitetura e Qualidade de Dados", "AQD"),
				new Disciplina("Arquiteturas Corporativas", "AC"),
				new Disciplina("Padrões de Projeto", "PP"),
				new Disciplina("Arquitetura Orientada a Serviços", "SOA"),
				new Disciplina("Arquitetura de Software na Web", "ASW"),
				new Disciplina("Arquitetura de Software no Ambiente .NET", "NET"),
				new Disciplina("Arquitetura de Software no Ambiente JEE", "JEE"),
				new Disciplina("Arquitetura de Aplicativos Móveis", "AAM"),
				new Disciplina("Desenvolvimento de Aplicativos Móveis", "DAM"),
				new Disciplina("Integração de Aplicações", "EAI"),
				new Disciplina("Avaliação de Arquitetura de Software", "AAS"),
				new Disciplina("Big Data", "BIG"),
				new Disciplina("Arquitetura de Sofware e de Dados Seguro", "ASS"),
				new Disciplina("Arquitetura de Computação em Nuvens e em Grid", "ACN") };
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
