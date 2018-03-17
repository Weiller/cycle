package br.com.cycle.service;

import br.com.cycle.entity.dto.CicloDTO;
import br.com.cycle.entity.Ciclo;
import br.com.cycle.entity.Materia;
import br.com.cycle.exceptionhandler.exception.NegocioException;
import br.com.cycle.mapper.CicloMapper;
import br.com.cycle.mapper.MateriaMapper;
import br.com.cycle.repository.CicloRepository;
import br.com.cycle.repository.filter.CicloFilter;
import br.com.cycle.util.TimeConverter;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Objects;

@AllArgsConstructor
@Service
public class CicloService {

    private CicloRepository cicloRepository;

    private MateriaService materiaService;

    public CicloDTO salvar(CicloDTO cicloDto) {
        preValidate(cicloDto);
        salvarMaterias(cicloDto, salvarCiclo(cicloDto));

        return cicloDto;
    }

    private void preValidate(CicloDTO cicloDto) {
        Long totalHorasMaterias = cicloDto.getMaterias().stream().mapToLong(horasEstudo ->
                TimeConverter.horasEmSegundos(horasEstudo.getHorasEstudoCiclo())).sum();

        if (!totalHorasMaterias.equals(TimeConverter.horasEmSegundos(cicloDto.getTotalHoras()))) {
            throw new NegocioException("MSG_TOTAL_HORAS_INVALIDO");
        }
    }

    private Ciclo salvarCiclo(CicloDTO cicloDto) {
        return cicloRepository.save(CicloMapper.cicloDtoToCiclo(cicloDto));
    }

    public Ciclo salvarCiclo(Ciclo ciclo) {
        return cicloRepository.save(ciclo);
    }

    private void salvarMaterias(CicloDTO cicloDto, Ciclo ciclo) {
        cicloDto.getMaterias().forEach(materiaDTO -> {
            Materia materia = MateriaMapper.materiaDtoToMateria(materiaDTO);
            materia.setCiclo(ciclo);
            materiaService.salvar(materia);
        });
    }

    public Page<CicloDTO> listarTodos(CicloFilter cicloFilter, Pageable pageable) {
        validarFiltro(cicloFilter);
        return cicloRepository.findAllByNomeIgnoreCaseContainingOrderByNomeAsc(cicloFilter.getNome(), pageable)
                .map(CicloMapper::cicloToCicloDto);
    }

    private void validarFiltro(CicloFilter cicloFilter) {
        if (Objects.isNull(cicloFilter.getNome())) {
            cicloFilter.setNome("");
        }
    }

    public void deletar(Long codigo) {
        materiaService.buscarMateriasPorCiclo(codigo).forEach(materia -> materiaService.deletar(materia.getId()));
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

    public CicloDTO buscarCicloDto(Long codigo) {
        return CicloMapper.cicloToCicloDtoWithMateriasDto(cicloRepository.findOne(codigo));
    }

    public Ciclo buscarCiclo(Long codigo) {
        return cicloRepository.findOne(codigo);
    }
}
