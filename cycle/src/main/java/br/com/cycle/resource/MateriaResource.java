package br.com.cycle.resource;

import br.com.cycle.entity.Materia;
import br.com.cycle.event.RecursoCriadoEvent;
import br.com.cycle.repository.MateriaRepository;
import br.com.cycle.service.MateriaService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/materias")
public class MateriaResource {

    private MateriaRepository materiaRepository;

    private MateriaService materiaService;

    private ApplicationEventPublisher publisher;

    @GetMapping
    @PreAuthorize("hasAuthority('ROLE_GERAL') and #oauth2.hasScope('write')")
    public List<Materia> buscarTodos(){
      return materiaRepository.findAll();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('ROLE_GERAL') and #oauth2.hasScope('write')")
    public Materia buscarMateria(@PathVariable Long id){
        return materiaService.buscarMateria(id);
    }

    @PostMapping
    @PreAuthorize("hasAuthority('ROLE_GERAL') and #oauth2.hasScope('write')")
    public ResponseEntity<Materia> salvar(@Valid @RequestBody Materia materia, HttpServletResponse response){
        Materia materiaSalva = materiaRepository.save(materia);

        publisher.publishEvent(new RecursoCriadoEvent(this, response, materiaSalva.getId()));

        return ResponseEntity.status(HttpStatus.CREATED).body(materiaSalva);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('ROLE_GERAL') and #oauth2.hasScope('write')")
    public ResponseEntity<Materia> atualizar(@PathVariable Long id, @Valid @RequestBody Materia materia){
        return materiaService.atualizar(id, materia);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ROLE_GERAL') and #oauth2.hasScope('write')")
    public ResponseEntity<Materia> deletar(@PathVariable Long id){
        return materiaService.deletar(id);
    }
}
