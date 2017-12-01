package br.com.cycle.service;

import br.com.cycle.dto.CicloDTO;
import br.com.cycle.entity.Ciclo;
import br.com.cycle.repository.CicloRepository;
import br.com.cycle.util.TimeConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class CicloService {

    @Autowired
    private CicloRepository cicloRepository;

    public ResponseEntity<Ciclo> salvar(CicloDTO cicloDto) {

        Ciclo ciclo = new Ciclo();
        ciclo.setNome(cicloDto.getNomeCiclo());

        ciclo.setTotalHora(TimeConverter.horasEmSegundos(cicloDto.getTotalHoras()));
        ciclo.setDataCriacao(LocalDateTime.now());

        return ResponseEntity.ok(cicloRepository.save(ciclo));
    }

    public List<CicloDTO> listarTodos() {
        List<CicloDTO> ciclosDto = new ArrayList<>();
        cicloRepository.findAll().forEach(c -> ciclosDto.add(new CicloDTO(c.getId(), c.getNome(),
                TimeConverter.segundosEmHoras(c.getTotalHora()), c.getDataCriacao())));

        return ciclosDto;
    }

    public void deletar(Long codigo) {
        cicloRepository.delete(codigo);
    }

    public ResponseEntity<Ciclo> alterar(CicloDTO cicloDTO) {
        Ciclo ciclo = preencherCiclo(cicloDTO);

        return ResponseEntity.ok(cicloRepository.save(ciclo));
    }

    private Ciclo preencherCiclo(CicloDTO cicloDTO) {
        Ciclo ciclo = cicloRepository.findOne(cicloDTO.getCodigo());
        ciclo.setNome(cicloDTO.getNomeCiclo());
        ciclo.setTotalHora(TimeConverter.horasEmSegundos(cicloDTO.getTotalHoras()));
        ciclo.setDataCriacao(LocalDateTime.now());
        return ciclo;
    }
}
