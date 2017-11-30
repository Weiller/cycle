package br.com.cycle.repository;

import br.com.cycle.entity.Ciclo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CicloRepository extends JpaRepository<Ciclo, Long> {
}
