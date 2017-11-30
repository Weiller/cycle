package br.com.cycle.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import java.time.LocalDate;

@Entity
@Table(name = "CICLO", schema = "CYCLE")
@SequenceGenerator(name = "SQ_CICLO", sequenceName = "CYCLE.SQ_CICLO", allocationSize = 1, initialValue = 1)
public class Ciclo {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_CICLO")
    private Long id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "total_hora")
    private Long totalHora;

    @Column(name = "data_criacao")
    private LocalDate dataCriacao;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Long getTotalHora() {
        return totalHora;
    }

    public void setTotalHora(Long totalHora) {
        this.totalHora = totalHora;
    }

    public LocalDate getDataCriacao() {
        return dataCriacao;
    }

    public void setDataCriacao(LocalDate dataCriacao) {
        this.dataCriacao = dataCriacao;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Ciclo ciclo = (Ciclo) o;

        if (id != null ? !id.equals(ciclo.id) : ciclo.id != null) return false;
        if (nome != null ? !nome.equals(ciclo.nome) : ciclo.nome != null) return false;
        if (totalHora != null ? !totalHora.equals(ciclo.totalHora) : ciclo.totalHora != null) return false;
        return dataCriacao != null ? dataCriacao.equals(ciclo.dataCriacao) : ciclo.dataCriacao == null;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (nome != null ? nome.hashCode() : 0);
        result = 31 * result + (totalHora != null ? totalHora.hashCode() : 0);
        result = 31 * result + (dataCriacao != null ? dataCriacao.hashCode() : 0);
        return result;
    }
}
