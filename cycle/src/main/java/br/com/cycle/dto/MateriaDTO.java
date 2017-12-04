package br.com.cycle.dto;

public class MateriaDTO {

    private Long id;
    private String nome;
    private String horasEstudoCiclo;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getHorasEstudoCiclo() {
        return horasEstudoCiclo;
    }

    public void setHorasEstudoCiclo(String horasEstudoCiclo) {
        this.horasEstudoCiclo = horasEstudoCiclo;
    }
}
