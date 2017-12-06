package br.com.cycle.repository;

import br.com.cycle.entity.Ciclo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CicloRepository extends JpaRepository<Ciclo, Long> {

    Page<Ciclo> findAllByNomeIgnoreCaseContaining(String nome, Pageable pageable);


}
