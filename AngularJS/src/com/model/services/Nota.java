package com.model.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Nota {

	private Disciplina disciplina;

	private Date dataPostagem;

	private Double valor;

	public Nota(Disciplina disciplina, Date dataPostagem, Double valor) {
		super();
		this.disciplina = disciplina;
		this.dataPostagem = dataPostagem;
		this.valor = valor;
	}

	public Disciplina getDisciplina() {
		return disciplina;
	}

	public void setDisciplina(Disciplina disciplina) {
		this.disciplina = disciplina;
	}

	public Date getDataPostagem() {
		return dataPostagem;
	}

	public void setDataPostagem(Date dataPostagem) {
		this.dataPostagem = dataPostagem;
	}

	public Double getValor() {
		return valor;
	}

	public void setValor(Double valor) {
		this.valor = valor;
	}

	public static Nota[] obterTodos() {
		return new Nota[] {
				new Nota(Disciplina.obterPorId("ASW"), new Date(), 90D),
				new Nota(Disciplina.obterPorId("NET"), new Date(), 20D),
				new Nota(Disciplina.obterPorId("DAS"), new Date(), 59D),
				new Nota(Disciplina.obterPorId("JEE"), new Date(), 37D),
				new Nota(Disciplina.obterPorId("ASW"), new Date(), 85D),
				new Nota(Disciplina.obterPorId("ASW"), new Date(), 90D),
				new Nota(Disciplina.obterPorId("NET"), new Date(), 20D),
				new Nota(Disciplina.obterPorId("DAS"), new Date(), 59D),
				new Nota(Disciplina.obterPorId("JEE"), new Date(), 37D),
				new Nota(Disciplina.obterPorId("ASW"), new Date(), 85D) };
	}

	public static Nota[] obterPorFiltro(String pSiglaDisciplina,
			String pDataInicial, String pDataFinal) {

		List<Nota> notas = new ArrayList<>();

		for (Nota item : obterTodos()) {
			if (item.getDisciplina().getSigla().equals(pSiglaDisciplina)) {
				notas.add(item);
			}
		}

		return notas.toArray(new Nota[0]);
	}

}
