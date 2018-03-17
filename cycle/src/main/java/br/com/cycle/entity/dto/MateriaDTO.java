package br.com.cycle.entity.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MateriaDTO {

    private Long id;
    private String nome;
    private String horasEstudoCiclo;
    private String horasEstudadas;
    private Long idCiclo;
}
