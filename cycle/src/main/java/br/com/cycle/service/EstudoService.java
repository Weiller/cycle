package br.com.cycle.service;

import br.com.cycle.dto.MateriaDTO;
import br.com.cycle.entity.Ciclo;
import br.com.cycle.entity.Materia;
import br.com.cycle.mapper.MateriaMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EstudoService {

    @Autowired
    private CicloService cicloService;

    @Autowired
    private MateriaService materiaService;


    public void salvarEstudo(MateriaDTO materiaDTO) {
        Materia materia = MateriaMapper.materiaDtoToMateria(materiaDTO);
        Ciclo ciclo = cicloService.buscarCiclo(materiaDTO.getIdCiclo());
        materia.setCiclo(ciclo);
        materiaService.salvar(materia);

        salvarCicloEstudo(ciclo);
    }

    private void salvarCicloEstudo(Ciclo ciclo) {
        long totalHorasEstudadas = ciclo.getMaterias().stream().mapToLong(Materia::getHorasEstudadas).sum();

        ciclo.setHorasEstudadas(totalHorasEstudadas);
        cicloService.salvarCiclo(ciclo);
    }

}
