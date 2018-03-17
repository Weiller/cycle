package br.com.cycle.resource;

import br.com.cycle.entity.dto.MateriaDTO;
import br.com.cycle.service.EstudoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/estudos")
public class EstudoResource {

    @Autowired
    private EstudoService estudoService;

    @PutMapping("/{id}")
    public void salvarEstudo(@RequestBody MateriaDTO materiaDTO) {
        estudoService.salvarEstudo(materiaDTO);
    }

}
