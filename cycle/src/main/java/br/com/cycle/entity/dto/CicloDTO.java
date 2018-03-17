package br.com.cycle.entity.dto;


import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class CicloDTO {

    private Long codigo;
    private String nomeCiclo;
    private String totalHoras;
    private String horasEstudadas;
    private LocalDateTime dataCriacao;
    private List<MateriaDTO> materias;
    private List<MateriaDTO> materiasExcluir;
}
