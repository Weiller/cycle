package br.com.cycle.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;


@EqualsAndHashCode
@Getter
@Setter
@Entity
@Table(name = "CICLO", schema = "CYCLE")
@SequenceGenerator(name = "SQ_CICLO", sequenceName = "CYCLE.SQ_CICLO", allocationSize = 1, initialValue = 1)
public class Ciclo {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_CICLO")
    @Column(name = "codigo")
    private Long id;

    @Column(name = "nome")
    @NotNull
    private String nome;

    @Column(name = "total_hora")
    @NotNull
    private Long totalHora;

    @Column(name = "data_criacao")
    @Convert(converter = Jsr310JpaConverters.LocalDateTimeConverter.class)
    @NotNull
    private LocalDateTime dataCriacao;

    @OneToMany(mappedBy = "ciclo", fetch = FetchType.LAZY)
    private List<Materia> materias;

    @Column(name = "total_horas_estudadas")
    private Long horasEstudadas;

    @Column(name = "data_ultimo_estudo")
    private LocalDateTime dataUltimoEstudo;
}
