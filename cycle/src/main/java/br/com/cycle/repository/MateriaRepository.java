package br.com.cycle.repository;

import br.com.cycle.entity.Ciclo;
import br.com.cycle.entity.Materia;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MateriaRepository extends JpaRepository<Materia, Long> {

    List<Materia> findAllByCicloId(Long cicloId);

}
