package br.com.cycle.exceptionhandler.exception;

public class NegocioException extends RuntimeException {

    public NegocioException() {
        super();
    }

    public NegocioException(String mensagem) {
        super(mensagem);
    }

    public NegocioException(Throwable exception) {
        super(exception);
    }

    public NegocioException(String mensagem, Throwable exception) {
        super(mensagem, exception);
    }

}
