package br.com.cycle.mapper;

import br.com.cycle.entity.dto.MateriaDTO;
import br.com.cycle.entity.Materia;
import br.com.cycle.util.TimeConverter;

public class MateriaMapper {

    private MateriaMapper() {
    }

    public static MateriaDTO materiaToMateriaDTO(Materia materia) {
        MateriaDTO materiaDTO = new MateriaDTO();

        if (materia.getId() != null) {
            materiaDTO.setId(materia.getId());
        }

        materiaDTO.setNome(materia.getNome());
        materiaDTO.setHorasEstudoCiclo(TimeConverter.segundosEmHoras(materia.getHorasEstudoCiclo()));

        return materiaDTO;
    }

    public static Materia materiaDtoToMateria(MateriaDTO materiaDto) {
        Materia materia = new Materia();

        if (materiaDto.getId() != null) {
            materia.setId(materiaDto.getId());
        }

        materia.setNome(materiaDto.getNome());
        materia.setHorasEstudoCiclo(TimeConverter.horasEmSegundos(materiaDto.getHorasEstudoCiclo()));

        if (materiaDto.getHorasEstudadas() != null) {
            materia.setHorasEstudadas(TimeConverter.horasEmSegundos(materiaDto.getHorasEstudadas()));
        }

        return materia;
    }

}
