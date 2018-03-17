package br.com.cycle.service;

import br.com.cycle.entity.dto.CicloDTO;
import br.com.cycle.entity.dto.MateriaDTO;
import br.com.cycle.entity.Ciclo;
import br.com.cycle.exceptionhandler.exception.NegocioException;
import br.com.cycle.repository.CicloRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import static org.mockito.Mockito.verify;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CicloServiceTest {

    @MockBean
    private CicloRepository cicloRepository;

    @MockBean
    private MateriaService materiaService;

    private CicloService cicloService;

    private CicloDTO cicloDTO;

    private Ciclo ciclo;

    @Before
    public void init() {
        cicloService = new CicloService(cicloRepository, materiaService);
        this.ciclo = new Ciclo();
        ciclo.setNome("ENEM");
    }

    @Test
    public void testSalvarCiclo(){
        cicloService.salvarCiclo(ciclo);
        verify(cicloRepository).save(ciclo);
    }

    @Test(expected = NegocioException.class)
    public void testSalvarHorasInvalidas(){
        preencherCiclo();
        cicloDTO.setTotalHoras("10:00");
        cicloService.salvar(cicloDTO);
    }

    @Test
    public void testSalvarHorasValidas(){
        preencherCiclo();
        cicloDTO.setTotalHoras("20:00");
        cicloService.salvar(cicloDTO);
        Assert.assertTrue(Objects.nonNull(cicloDTO));
    }

    private void preencherCiclo() {
        this.cicloDTO = new CicloDTO();
        cicloDTO.setNomeCiclo("ENEM");
        cicloDTO.setDataCriacao(LocalDateTime.now());
        cicloDTO.setMaterias(preencherMaterias());
        cicloDTO.setCodigo(1L);
    }

    private List<MateriaDTO> preencherMaterias() {
        List<MateriaDTO> materias = new ArrayList<>();
        MateriaDTO materiaDTO = new MateriaDTO();
        materiaDTO.setId(1L);
        materiaDTO.setIdCiclo(1L);
        materiaDTO.setNome("Português");
        materiaDTO.setHorasEstudoCiclo("20:00");
        materiaDTO.setHorasEstudadas("15:00:36");
        materias.add(materiaDTO);

        return materias;
    }
}
