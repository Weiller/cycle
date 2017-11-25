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
        Optional<Materia> materiaSalva = Optional.ofNullable(materiaRepository.findOne(id));

        materiaSalva.orElseThrow(() -> new EmptyResultDataAccessException(1));

        BeanUtils.copyProperties(materia, materiaSalva.get(), "id");

        return ResponseEntity.ok(materiaRepository.save(materiaSalva.get()));
    }

    public ResponseEntity<Materia> deletar(Long id) {
        Optional<Materia> materia = Optional.ofNullable(materiaRepository.findOne(id));

        materia.orElseThrow(() -> new EmptyResultDataAccessException(1));

        materiaRepository.delete(materia.get());

        return ResponseEntity.ok(materia.get());
    }
}
