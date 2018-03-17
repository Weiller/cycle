package br.com.cycle.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Getter
@Setter
@EqualsAndHashCode
@Entity
@Table(name = "PERMISSAO", schema = "CYCLE")
@SequenceGenerator(name = "SQ_PERMISSAO", sequenceName = "CYCLE.SQ_PERMISSAO", initialValue = 1, allocationSize = 1)
public class Permissao {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_PERMISSAO")
	@Column(name = "codigo")
	private Long codigo;

	@Column(name = "descricao")
	private String descricao;
}
