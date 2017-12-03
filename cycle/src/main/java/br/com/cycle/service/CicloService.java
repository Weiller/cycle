package br.com.cycle.service;

import br.com.cycle.dto.CicloDTO;
import br.com.cycle.entity.Ciclo;
import br.com.cycle.entity.Materia;
import br.com.cycle.mapper.CicloMapper;
import br.com.cycle.mapper.MateriaMapper;
import br.com.cycle.repository.CicloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CicloService {

    @Autowired
    private CicloRepository cicloRepository;

    @Autowired
    private MateriaService materiaService;

    public ResponseEntity<CicloDTO> salvar(CicloDTO cicloDto) {
        Ciclo ciclo = salvarCiclo(cicloDto);
        salvarMaterias(cicloDto, ciclo);

        return ResponseEntity.ok(cicloDto);
    }

    private Ciclo salvarCiclo(CicloDTO cicloDto) {
        Ciclo ciclo = CicloMapper.cicloDtoToCiclo(cicloDto);
        cicloRepository.save(ciclo);

        return ciclo;
    }

    private void salvarMaterias(CicloDTO cicloDto, Ciclo ciclo) {
        cicloDto.getMaterias().forEach(materiaDTO -> {
            Materia materia = MateriaMapper.materiaDtoToMateria(materiaDTO);
            materia.setCiclo(ciclo);
            materiaService.salvar(materia);
        });
    }

    public List<CicloDTO> listarTodos() {
        List<CicloDTO> ciclosDto = new ArrayList<>();
        cicloRepository.findAll().forEach(ciclo -> {
            CicloDTO cicloDto = CicloMapper.cicloToCicloDto(ciclo);
            ciclosDto.add(cicloDto);
        });

        return ciclosDto;
    }

    public void deletar(Long codigo) {
        List<Materia> materias = materiaService.buscarMateriasPorCiclo(codigo);
        materias.forEach(materia -> {
            materiaService.deletar(materia.getId());
        });

        cicloRepository.delete(codigo);
    }

    public ResponseEntity<CicloDTO> alterar(CicloDTO cicloDTO) {
        Ciclo ciclo = CicloMapper.cicloDtoToCiclo(cicloDTO);
        salvarMaterias(cicloDTO, ciclo);
        deletarMaterias(cicloDTO);

        cicloRepository.save(ciclo);
        return ResponseEntity.ok(cicloDTO);
    }

    private void deletarMaterias(CicloDTO cicloDTO) {
        cicloDTO.getMateriasExcluir().forEach(materiaDto -> {
            materiaService.deletar(materiaDto.getId());
        });
    }

    public CicloDTO buscarCiclo(Long codigo) {
        Ciclo ciclo = cicloRepository.findOne(codigo);

        return CicloMapper.cicloToCicloDtoWithMateriasDto(ciclo);
    }

}
