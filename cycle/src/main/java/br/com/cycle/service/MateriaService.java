package br.com.cycle.service;


import br.com.cycle.entity.Materia;
import br.com.cycle.repository.MateriaRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MateriaService {

    @Autowired
    private MateriaRepository materiaRepository;

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
        Optional<Materia> materia = Optional.ofNullable(materiaRepository.findOne(id));

        materia.orElseThrow(() -> new EmptyResultDataAccessException(1));
        return materia.get();
    }
}
