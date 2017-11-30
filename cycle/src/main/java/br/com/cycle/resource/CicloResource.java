package br.com.cycle.resource;

import br.com.cycle.entity.Ciclo;
import br.com.cycle.service.CicloService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/ciclos")
public class CicloResource {

    @Autowired
    private CicloService cicloService;

    @PostMapping
    public ResponseEntity<Ciclo> salvar(@Valid @RequestBody Ciclo ciclo){
        return this.cicloService.salvar(ciclo);
    }

}
