package br.com.cycle.resource;

import br.com.cycle.dto.CicloDTO;
import br.com.cycle.entity.Ciclo;
import br.com.cycle.service.CicloService;
import org.springframework.beans.factory.annotation.Autowired;
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

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/ciclos")
public class CicloResource {

    @Autowired
    private CicloService cicloService;

    @PostMapping
    @PreAuthorize("hasAuthority('ROLE_GERAL') and #oauth2.hasScope('write')")
    public ResponseEntity<Ciclo> salvar(@Valid @RequestBody CicloDTO cicloDto){
        return this.cicloService.salvar(cicloDto);
    }

    @GetMapping
    @PreAuthorize("hasAuthority('ROLE_GERAL') and #oauth2.hasScope('write')")
    public List<CicloDTO> listarTodos(){
        return cicloService.listarTodos();
    }

    @PutMapping("/{codigo}")
    @PreAuthorize("hasAuthority('ROLE_GERAL') and #oauth2.hasScope('write')")
    public ResponseEntity<Ciclo> alterar(@RequestBody CicloDTO cicloDTO){
        return cicloService.alterar(cicloDTO);
    }

    @DeleteMapping("/{codigo}")
    @PreAuthorize("hasAuthority('ROLE_GERAL') and #oauth2.hasScope('write')")
    public void deletar(@PathVariable Long codigo){
        cicloService.deletar(codigo);
    }

}
