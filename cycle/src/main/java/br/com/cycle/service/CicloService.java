package br.com.cycle.service;

import br.com.cycle.dto.CicloDTO;
import br.com.cycle.entity.Ciclo;
import br.com.cycle.entity.Materia;
import br.com.cycle.exceptionhandler.exception.NegocioException;
import br.com.cycle.mapper.CicloMapper;
import br.com.cycle.mapper.MateriaMapper;
import br.com.cycle.repository.CicloRepository;
import br.com.cycle.repository.filter.CicloFilter;
import br.com.cycle.util.TimeConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
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
        preValidate(cicloDto);
        Ciclo ciclo = salvarCiclo(cicloDto);
        salvarMaterias(cicloDto, ciclo);

        return ResponseEntity.ok(cicloDto);
    }

    private void preValidate(CicloDTO cicloDto) {
        Long totalHorasCiclo = TimeConverter.horasEmSegundos(cicloDto.getTotalHoras());

        Long totalHorasMaterias = cicloDto.getMaterias().stream().mapToLong(horasEstudo ->
                TimeConverter.horasEmSegundos(horasEstudo.getHorasEstudoCiclo())).sum();

        if (!totalHorasMaterias.equals(totalHorasCiclo)) {
            throw new NegocioException("MSG_TOTAL_HORAS_INVALIDO");
        }
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

    public Page<CicloDTO> listarTodos(CicloFilter cicloFilter, Pageable pageable) {
        List<CicloDTO> ciclosDto = new ArrayList<>();

        Page<Ciclo> pageCiclo = cicloRepository.findAllByNomeIgnoreCaseContaining(cicloFilter.getNome(), pageable);

        pageCiclo.forEach(ciclo -> {
            CicloDTO cicloDto = CicloMapper.cicloToCicloDto(ciclo);
            ciclosDto.add(cicloDto);
        });

        return new PageImpl<>(ciclosDto, pageable, pageCiclo.getTotalElements());
    }

    public void deletar(Long codigo) {
        List<Materia> materias = materiaService.buscarMateriasPorCiclo(codigo);
        materias.forEach(materia -> materiaService.deletar(materia.getId()));

        cicloRepository.delete(codigo);
    }

    public ResponseEntity<CicloDTO> alterar(CicloDTO cicloDTO) {
        preValidate(cicloDTO);
        Ciclo ciclo = CicloMapper.cicloDtoToCiclo(cicloDTO);
        salvarMaterias(cicloDTO, ciclo);
        deletarMaterias(cicloDTO);

        cicloRepository.save(ciclo);
        return ResponseEntity.ok(cicloDTO);
    }

    private void deletarMaterias(CicloDTO cicloDTO) {
        cicloDTO.getMateriasExcluir().forEach(materiaDto -> materiaService.deletar(materiaDto.getId()));
    }

    public CicloDTO buscarCiclo(Long codigo) {
        Ciclo ciclo = cicloRepository.findOne(codigo);

        return CicloMapper.cicloToCicloDtoWithMateriasDto(ciclo);
    }

}
