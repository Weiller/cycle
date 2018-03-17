package br.com.cycle.resource;

import br.com.cycle.entity.dto.CicloDTO;
import br.com.cycle.repository.filter.CicloFilter;
import br.com.cycle.service.CicloService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

@AllArgsConstructor
@RestController
@RequestMapping("/ciclos")
public class CicloResource {

    private CicloService cicloService;

    @PostMapping
    @PreAuthorize("hasAuthority('ROLE_GERAL') and #oauth2.hasScope('write')")
    public ResponseEntity<CicloDTO> salvar(@Valid @RequestBody CicloDTO cicloDto){
        return ResponseEntity.ok(this.cicloService.salvar(cicloDto));
    }

    @GetMapping
    @PreAuthorize("hasAuthority('ROLE_GERAL') and #oauth2.hasScope('write')")
    public Page<CicloDTO> listarTodos(CicloFilter cicloFilter, Pageable pageable){
        return cicloService.listarTodos(cicloFilter, pageable);
    }

    @PutMapping("/{codigo}")
    public ResponseEntity<CicloDTO> alterar(@RequestBody CicloDTO cicloDTO){
        return cicloService.alterar(cicloDTO);
    }

    @DeleteMapping("/{codigo}")
    @PreAuthorize("hasAuthority('ROLE_GERAL') and #oauth2.hasScope('write')")
    public void deletar(@PathVariable Long codigo){
        cicloService.deletar(codigo);
    }

    @GetMapping("/{codigo}")
    public CicloDTO buscarCiclo(@PathVariable Long codigo){
        return cicloService.buscarCicloDto(codigo);
    }

}
