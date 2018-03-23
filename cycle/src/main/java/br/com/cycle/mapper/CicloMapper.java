package br.com.cycle.mapper;

import br.com.cycle.entity.dto.CicloDTO;
import br.com.cycle.entity.dto.MateriaDTO;
import br.com.cycle.entity.Ciclo;
import br.com.cycle.entity.Materia;
import br.com.cycle.util.TimeConverter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

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

        if (Objects.nonNull(cicloDto.getCodigo())) {
            ciclo.setId(cicloDto.getCodigo());
        }

        ciclo.setNome(cicloDto.getNomeCiclo());
        ciclo.setTotalHora(TimeConverter.horasEmSegundos(cicloDto.getTotalHoras()));

        if (Objects.nonNull(cicloDto.getHorasEstudadas())) {
            ciclo.setHorasEstudadas(TimeConverter.horasEmSegundos(cicloDto.getHorasEstudadas()));
        }

        preencherDataCriacaoCicloDto(cicloDto, ciclo);
        return ciclo;
    }

    private static void preencherDataCriacaoCicloDto(CicloDTO cicloDto, Ciclo ciclo) {
        if (Objects.nonNull(cicloDto.getDataCriacao())) {
            ciclo.setDataCriacao(cicloDto.getDataCriacao());
        } else {
            ciclo.setDataCriacao(LocalDateTime.now());
        }
    }

    private static List<Materia> preencherMaterias(CicloDTO cicloDto) {
        List<Materia> materias = new ArrayList<>();

        cicloDto.getMaterias().forEach(materiaDTO -> {
            Materia materia = new Materia();

            if (Objects.nonNull(materiaDTO.getId())) {
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

        if (Objects.nonNull(ciclo.getId())) {
            cicloDto.setCodigo(ciclo.getId());
        }

        cicloDto.setNomeCiclo(ciclo.getNome());

        preencherHorasEstudos(ciclo, cicloDto);
        preencherDataCriacaoCicloDto(ciclo, cicloDto);

        return cicloDto;
    }

    private static void preencherHorasEstudos(Ciclo ciclo, CicloDTO cicloDto) {
        cicloDto.setTotalHoras(TimeConverter.segundosEmHoras(ciclo.getTotalHora()));

        if (Objects.nonNull(ciclo.getHorasEstudadas())) {
            cicloDto.setHorasEstudadas(TimeConverter.segundosEmHoras(ciclo.getHorasEstudadas()));
        }
    }

    private static void preencherDataCriacaoCicloDto(Ciclo ciclo, CicloDTO cicloDto) {
        if (Objects.nonNull(ciclo.getDataCriacao())) {
            cicloDto.setDataCriacao(ciclo.getDataCriacao());
        } else {
            cicloDto.setDataCriacao(LocalDateTime.now());
        }
    }

    private static List<MateriaDTO> preencherMateriasDto(Ciclo ciclo) {
        return ciclo.getMaterias().stream().map(materia -> {
            MateriaDTO materiaDTO = new MateriaDTO();

            materiaDTO.setId(materia.getId());
            materiaDTO.setNome(materia.getNome());
            materiaDTO.setHorasEstudoCiclo(TimeConverter.segundosEmHoras(materia.getHorasEstudoCiclo()));

            if (Objects.nonNull(materia.getHorasEstudadas())) {
                materiaDTO.setHorasEstudadas(TimeConverter.segundosEmHoras(materia.getHorasEstudadas()));
            }
            return materiaDTO;
        }).collect(Collectors.toList());
    }
}
