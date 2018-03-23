package br.com.cycle.resource;

import br.com.cycle.property.CycleProperty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/tokens")
public class TokenResource {

    public static final String REFRESH_TOKEN = "refreshToken";
    
    @Autowired
    private CycleProperty cycleProperty;

    @DeleteMapping("/revoke")
    public void revoke(HttpServletRequest req, HttpServletResponse resp) {
        Cookie cookie = new Cookie(REFRESH_TOKEN, null);
        cookie.setHttpOnly(cycleProperty.getSeguranca().isEnableHttps());
        cookie.setSecure(false);
        cookie.setPath(req.getContextPath() + "/oauth/token");
        cookie.setMaxAge(0);

        resp.addCookie(cookie);
        resp.setStatus(HttpStatus.NO_CONTENT.value());
    }
}
