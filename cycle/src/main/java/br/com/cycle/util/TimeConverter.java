package br.com.cycle.util;

import java.util.Arrays;
import java.util.Iterator;

public class TimeConverter {

    public static final Long HORA_EM_SEGUNDOS = 3600L;

    public static final Long MINUTO_EM_SEGUNDOS = 60L;

    private TimeConverter() {
    }

    public static Long horasEmSegundos(String totalHoras) {
        Iterator<String> arrayHoras = Arrays.asList(totalHoras.split(":")).iterator();
        Integer horas = Integer.parseInt(arrayHoras.next());
        Integer minutos = Integer.parseInt(arrayHoras.next());
        Integer segundos = 0;

        if (arrayHoras.hasNext()) {
            segundos = Integer.parseInt(arrayHoras.next());
        }

        return (horas * HORA_EM_SEGUNDOS) + (minutos * MINUTO_EM_SEGUNDOS) + (segundos);
    }

    public static String segundosEmHoras(Long segundosEmHoras) {
        Long horas = segundosEmHoras / HORA_EM_SEGUNDOS;

        Long minutosEmSegundos = segundosEmHoras % HORA_EM_SEGUNDOS;
        Long segundos = minutosEmSegundos % MINUTO_EM_SEGUNDOS;

        Long minutos = minutosEmSegundos / MINUTO_EM_SEGUNDOS;

        return horas + ":" + minutos + ":" + segundos;
    }

}
