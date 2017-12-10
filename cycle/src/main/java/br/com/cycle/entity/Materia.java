package br.com.cycle.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "MATERIA", schema = "CYCLE")
@SequenceGenerator(name = "SQ_MATERIA",  sequenceName = "CYCLE.SQ_MATERIA", initialValue = 1, allocationSize = 1)
public class Materia {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator="SQ_MATERIA")
    private Long id;

    @Column(name = "nome")
    @NotNull
    private String nome;

    @Column(name = "hora_estudo_ciclo")
    @NotNull
    private Long horasEstudoCiclo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "codigo_ciclo")
    @NotNull
    private Ciclo ciclo;

    @Column(name = "total_horas_estudadas")
    private Long horasEstudadas;

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

    public Long getHorasEstudoCiclo() {
        return horasEstudoCiclo;
    }

    public void setHorasEstudoCiclo(Long horasEstudoCiclo) {
        this.horasEstudoCiclo = horasEstudoCiclo;
    }

    public Ciclo getCiclo() {
        return ciclo;
    }

    public void setCiclo(Ciclo ciclo) {
        this.ciclo = ciclo;
    }

    public Long getHorasEstudadas() {
        if(horasEstudadas == null) {
            return 0L;
        }

        return horasEstudadas;
    }

    public void setHorasEstudadas(Long horasEstudadas) {
        this.horasEstudadas = horasEstudadas;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Materia materia = (Materia) o;

        return id != null ? id.equals(materia.id) : materia.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}
