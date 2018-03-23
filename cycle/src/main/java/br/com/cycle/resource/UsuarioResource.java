package br.com.cycle.resource;

import br.com.cycle.entity.Usuario;
import br.com.cycle.entity.dto.UsuarioDTO;
import br.com.cycle.mapper.UsuarioMapper;
import br.com.cycle.service.UsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/usuarios")
@RequiredArgsConstructor
public class UsuarioResource {

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private UsuarioMapper usuarioMapper;

    @PostMapping
    public Usuario salvar(@RequestBody UsuarioDTO usuarioDTO) {
        return usuarioService.salvar(usuarioMapper.toUsuario(usuarioDTO));
    }

}
