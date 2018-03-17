package br.com.cycle.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Getter
@Setter
@EqualsAndHashCode
@Entity
@Table(name = "USUARIO", schema = "CYCLE")
@SequenceGenerator(name = "SQ_USUARIO", sequenceName = "CYCLE.SQ_USUARIO" ,allocationSize = 1 ,initialValue = 1)
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_USUARIO")
	@Column(name = "codigo")
    private Long codigo;

	@Column(name = "nome")
	private String nome;

	@Column(name = "email")
	private String email;

	@Column(name = "senha")
	private String senha;
	
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(schema = "cycle", name = "usuario_permissao", joinColumns = @JoinColumn(name = "codigo_usuario"),
	inverseJoinColumns = @JoinColumn(name = "codigo_permissao"))
	private List<Permissao> permissoes;
	
}
