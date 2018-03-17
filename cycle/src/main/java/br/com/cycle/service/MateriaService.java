package br.com.cycle.service;


import br.com.cycle.entity.Materia;
import br.com.cycle.repository.MateriaRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class MateriaService {

    private MateriaRepository materiaRepository;

    public Materia salvar(Materia materia) {
        return materiaRepository.save(materia);
    }

    public ResponseEntity<Materia> atualizar(Long id, Materia materia) {
        Materia materiaSalva = buscarMateria(id);
        BeanUtils.copyProperties(materia, materiaSalva, "id");
        return ResponseEntity.ok(materiaRepository.save(materiaSalva));
    }

    public ResponseEntity<Materia> deletar(Long id) {
        Materia materia = buscarMateria(id);
        materiaRepository.delete(materia);
        return ResponseEntity.ok(materia);
    }

    public Materia buscarMateria(Long id) {
        return Optional.ofNullable(materiaRepository.findOne(id))
                .orElseThrow(() -> new EmptyResultDataAccessException(1));
    }

    public List<Materia> buscarMateriasPorCiclo(Long cicoId) {
        return materiaRepository.findAllByCicloId(cicoId);
    }
}
