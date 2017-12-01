package br.com.cycle.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class CicloDTO {

    private Long codigo;
    private String nomeCiclo;
    private String totalHoras;
    private LocalDateTime dataCriacao;

    public CicloDTO(){
        super();
    }

    public CicloDTO(Long codigo, String nomeCiclo, String totalHoras, LocalDateTime dataCriacao) {
        this.codigo = codigo;
        this.nomeCiclo = nomeCiclo;
        this.totalHoras = totalHoras;
        this.dataCriacao = dataCriacao;
    }

    public Long getCodigo() {
        return codigo;
    }

    public void setCodigo(Long codigo) {
        this.codigo = codigo;
    }

    public String getNomeCiclo() {
        return nomeCiclo;
    }

    public void setNomeCiclo(String nomeCiclo) {
        this.nomeCiclo = nomeCiclo;
    }

    public String getTotalHoras() {
        return totalHoras;
    }

    public void setTotalHoras(String totalHoras) {
        this.totalHoras = totalHoras;
    }

    public LocalDateTime getDataCriacao() {
        return dataCriacao;
    }

    public void setDataCriacao(LocalDateTime dataCriacao) {
        this.dataCriacao = dataCriacao;
    }
}
