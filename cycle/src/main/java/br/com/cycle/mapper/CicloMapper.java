package br.com.cycle.mapper;

import br.com.cycle.dto.CicloDTO;
import br.com.cycle.dto.MateriaDTO;
import br.com.cycle.entity.Ciclo;
import br.com.cycle.entity.Materia;
import br.com.cycle.util.TimeConverter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class CicloMapper {

    private CicloMapper() {
    }

    public static Ciclo cicloDtoToCiclo(CicloDTO cicloDto) {
        return preencherCiclo(cicloDto);
    }

    public static Ciclo cicloDtoToCicloWithMaterias(CicloDTO cicloDto) {
        Ciclo ciclo = preencherCiclo(cicloDto);

        List<Materia> materias = preencherMaterias(cicloDto);

        ciclo.setMaterias(materias);

        return ciclo;
    }

    private static Ciclo preencherCiclo(CicloDTO cicloDto) {
        Ciclo ciclo = new Ciclo();

        if (cicloDto.getCodigo() != null) {
            ciclo.setId(cicloDto.getCodigo());
        }

        ciclo.setNome(cicloDto.getNomeCiclo());
        ciclo.setTotalHora(TimeConverter.horasEmSegundos(cicloDto.getTotalHoras()));

        if (cicloDto.getDataCriacao() != null) {
            ciclo.setDataCriacao(cicloDto.getDataCriacao());
        } else {
            ciclo.setDataCriacao(LocalDateTime.now());
        }
        return ciclo;
    }

    private static List<Materia> preencherMaterias(CicloDTO cicloDto) {
        List<Materia> materias = new ArrayList<>();

        cicloDto.getMaterias().forEach(materiaDTO -> {
            Materia materia = new Materia();

            if (materiaDTO.getId() != null) {
                materia.setId(materiaDTO.getId());
            }

            materia.setNome(materiaDTO.getNome());
            materia.setHorasEstudoCiclo(TimeConverter.horasEmSegundos(materiaDTO.getHorasEstudoCiclo()));
            materias.add(materia);
        });

        return materias;
    }

    public static CicloDTO cicloToCicloDto(Ciclo ciclo) {
        return preencherCicloDto(ciclo);
    }

    public static CicloDTO cicloToCicloDtoWithMateriasDto(Ciclo ciclo) {
        CicloDTO cicloDto = preencherCicloDto(ciclo);

        List<MateriaDTO> materiasDto = preencherMateriasDto(ciclo);

        cicloDto.setMaterias(materiasDto);

        return cicloDto;
    }

    private static CicloDTO preencherCicloDto(Ciclo ciclo) {
        CicloDTO cicloDto = new CicloDTO();

        if (ciclo.getId() != null) {
            cicloDto.setCodigo(ciclo.getId());
        }

        cicloDto.setNomeCiclo(ciclo.getNome());
        cicloDto.setTotalHoras(TimeConverter.segundosEmHoras(ciclo.getTotalHora()));

        if (ciclo.getDataCriacao() != null) {
            cicloDto.setDataCriacao(ciclo.getDataCriacao());
        } else {
            cicloDto.setDataCriacao(LocalDateTime.now());
        }
        return cicloDto;
    }

    private static List<MateriaDTO> preencherMateriasDto(Ciclo ciclo) {
        List<MateriaDTO> materiasDto = new ArrayList<>();

        ciclo.getMaterias().forEach(materia -> {
            MateriaDTO materiaDTO = new MateriaDTO();

            materiaDTO.setId(materia.getId());
            materiaDTO.setNome(materia.getNome());
            materiaDTO.setHorasEstudoCiclo(TimeConverter.segundosEmHoras(materia.getHorasEstudoCiclo()));
            materiasDto.add(materiaDTO);
        });
        return materiasDto;
    }
}
