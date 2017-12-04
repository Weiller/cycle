package br.com.cycle.security;

import java.util.Collection;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import br.com.cycle.entity.Usuario;
import br.com.cycle.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class AppUserDetailsService implements UserDetailsService {

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Override
	public UserDetails loadUserByUsername(String username) {
		Optional<Usuario> usuarioOptional = usuarioRepository.findByEmail(username);
		Usuario usuario = usuarioOptional
				.orElseThrow(() -> new UsernameNotFoundException("Usuário ou senha incorretos"));
		return new UsuarioSistema(usuario, buscarPermissoes(usuario));
	}

	private Collection<? extends GrantedAuthority> buscarPermissoes(Usuario usuario) {
		Set<SimpleGrantedAuthority> authorities = new HashSet<>();
		usuario.getPermissoes()
				.forEach(p -> authorities.add(new SimpleGrantedAuthority(p.getDescricao().toUpperCase())));
		return authorities;
	}

}
