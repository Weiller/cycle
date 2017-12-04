package br.com.cycle.exceptionhandler;

import br.com.cycle.exceptionhandler.exception.NegocioException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.ArrayList;
import java.util.List;

@ControllerAdvice
public class CycleExceptionHandler extends ResponseEntityExceptionHandler {


    @Autowired
    private MessageSource messageSource;

    private final Logger log = LoggerFactory.getLogger(this.getClass());


    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
                                                                  HttpHeaders headers, HttpStatus status, WebRequest request) {
        List<Erro> erros = listaErro(ex.getBindingResult());

        return handleExceptionInternal(ex, erros, headers, HttpStatus.BAD_REQUEST, request);
    }

    @ExceptionHandler({EmptyResultDataAccessException.class})
    public ResponseEntity<Object> handleEmptyResultDataAccessException(EmptyResultDataAccessException ex,
                                                                       WebRequest request) {
        String mensagemUsuario = messageSource.getMessage("recurso.nao.encontrado", null, LocaleContextHolder.getLocale());
        String mensagemDesenvolvedor = ex.toString();
        Erro erros = new Erro(mensagemUsuario, mensagemDesenvolvedor);

        return handleExceptionInternal(ex, erros, new HttpHeaders(), HttpStatus.NOT_FOUND, request);
    }

    @ExceptionHandler({NegocioException.class})
    public ResponseEntity<Object> handleBusinessViolationException(NegocioException e, WebRequest request) {
        String mensagemUsuario = messageSource.getMessage(e.getMessage(), null, LocaleContextHolder.getLocale());
        String mensagemDesenvolvedor = e.toString();
        log.error(mensagemUsuario, e);

        return ResponseEntity.badRequest().body(new Erro(mensagemUsuario, mensagemDesenvolvedor));
    }

    public List<Erro> listaErro(BindingResult bindingResult) {

        List<Erro> erros = new ArrayList<>();

        for(FieldError fieldError: bindingResult.getFieldErrors()) {
            String mensagemUsuario = messageSource.getMessage(fieldError, LocaleContextHolder.getLocale());
            String mensagemDesenvolvedor = fieldError.toString();
            erros.add(new Erro(mensagemUsuario, mensagemDesenvolvedor));
        }

        return erros;
    }

    public static class Erro{

        private String mensagemUsuario;
        private String mensagemDesenvolvedor;

        public Erro(String mensagemUsuario, String mensagemDesenvolvedor) {
            super();
            this.mensagemUsuario = mensagemUsuario;
            this.mensagemDesenvolvedor = mensagemDesenvolvedor;
        }

        public String getMensagemUsuario() {
            return mensagemUsuario;
        }

        public void setMensagemUsuario(String mensagemUsuario) {
            this.mensagemUsuario = mensagemUsuario;
        }

        public String getMensagemDesenvolvedor() {
            return mensagemDesenvolvedor;
        }

        public void setMensagemDesenvolvedor(String mensagemDesenvolvedor) {
            this.mensagemDesenvolvedor = mensagemDesenvolvedor;
        }
    }
}
