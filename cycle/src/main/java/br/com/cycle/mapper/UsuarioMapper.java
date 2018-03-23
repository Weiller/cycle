package br.com.cycle.mapper;

import br.com.cycle.entity.Usuario;
import br.com.cycle.entity.dto.UsuarioDTO;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UsuarioMapper {

    Usuario toUsuario(UsuarioDTO usuarioDto);

    @InheritInverseConfiguration
    UsuarioDTO fromUsuario(Usuario usuario);

}
