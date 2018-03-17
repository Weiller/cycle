package br.com.cycle.service;


import br.com.cycle.entity.Materia;
import br.com.cycle.entity.dto.MateriaDTO;
import br.com.cycle.mapper.CicloMapper;
import br.com.cycle.mapper.MateriaMapper;
import br.com.cycle.repository.MateriaRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class MateriaService {

    private MateriaRepository materiaRepository;

    public MateriaDTO salvar(Materia materia) {
        return MateriaMapper.materiaToMateriaDTO(materiaRepository.save(materia));
    }

    public MateriaDTO atualizar(Long id, Materia materia) {
        Materia materiaSalva = buscarMateria(id);
        BeanUtils.copyProperties(materia, materiaSalva, "id");
        return MateriaMapper.materiaToMateriaDTO(materiaRepository.save(materiaSalva));
    }

    public MateriaDTO deletar(Long id) {
        Materia materia = buscarMateria(id);
        materiaRepository.delete(materia);
        return MateriaMapper.materiaToMateriaDTO(materia);
    }

    public Materia buscarMateria(Long id) {
        return Optional.ofNullable(materiaRepository.findOne(id))
                .orElseThrow(() -> new EmptyResultDataAccessException(1));
    }

    public List<MateriaDTO> buscarTodos() {
        return materiaRepository.findAll().stream().
                map(MateriaMapper::materiaToMateriaDTO).collect(Collectors.toList());
    }

    public List<Materia> buscarMateriasPorCiclo(Long cicoId) {
        return materiaRepository.findAllByCicloId(cicoId);
    }
}
