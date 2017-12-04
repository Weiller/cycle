package br.com.cycle.security;

import java.util.Collection;

import br.com.cycle.entity.Usuario;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;


public class UsuarioSistema extends User {

	private static final long serialVersionUID = 1L;

	private transient Usuario usuario;

	public UsuarioSistema(Usuario usuario, Collection<? extends GrantedAuthority> authorities) {
		super(usuario.getEmail(), usuario.getSenha(), authorities);
		this.usuario = usuario;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		if (!super.equals(o)) return false;

		UsuarioSistema that = (UsuarioSistema) o;

		return usuario != null ? usuario.equals(that.usuario) : that.usuario == null;
	}

	@Override
	public int hashCode() {
		int result = super.hashCode();
		result = 31 * result + (usuario != null ? usuario.hashCode() : 0);
		return result;
	}
}
