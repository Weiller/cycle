package br.com.cycle.resource;

import br.com.cycle.entity.Materia;
import br.com.cycle.event.RecursoCriadoEvent;
import br.com.cycle.repository.MateriaRepository;
import br.com.cycle.service.MateriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/materias")
public class MateriaResource {

    @Autowired
    private MateriaRepository materiaRepository;

    @Autowired
    private MateriaService materiaService;

    @Autowired
    private ApplicationEventPublisher publisher;


    @GetMapping
    public List<Materia> buscarTodos(){
      return materiaRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Materia> salvar(@Valid @RequestBody Materia materia, HttpServletResponse response){
        Materia materiaSalva = materiaRepository.save(materia);

        publisher.publishEvent(new RecursoCriadoEvent(this, response, materiaSalva.getId()));

        return ResponseEntity.status(HttpStatus.CREATED).body(materiaSalva);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Materia> atualizar(@PathVariable Long id, @Valid @RequestBody Materia materia){
        return materiaService.atualizar(id, materia);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Materia> deletar(@PathVariable Long id){
        return materiaService.deletar(id);
    }
}
