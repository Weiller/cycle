package br.com.cycle.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

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

@Getter
@Setter
@EqualsAndHashCode
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
}
