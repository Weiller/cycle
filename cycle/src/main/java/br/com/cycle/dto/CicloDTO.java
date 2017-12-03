package br.com.cycle.dto;


import java.time.LocalDateTime;
import java.util.List;

public class CicloDTO {

    private Long codigo;
    private String nomeCiclo;
    private String totalHoras;
    private LocalDateTime dataCriacao;
    private List<MateriaDTO> materias;
    private List<MateriaDTO> materiasExcluir;

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

    public List<MateriaDTO> getMaterias() {
        return materias;
    }

    public void setMaterias(List<MateriaDTO> materias) {
        this.materias = materias;
    }

    public List<MateriaDTO> getMateriasExcluir() {
        return materiasExcluir;
    }

    public void setMateriasExcluir(List<MateriaDTO> materiasExcluir) {
        this.materiasExcluir = materiasExcluir;
    }
}
