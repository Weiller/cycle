package br.com.cycle.service;

import br.com.cycle.entity.Ciclo;
import br.com.cycle.repository.CicloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class CicloService {

    @Autowired
    private CicloRepository cicloRepository;

    public ResponseEntity<Ciclo> salvar(Ciclo ciclo) {
        return ResponseEntity.ok(cicloRepository.save(ciclo));
    }
}
