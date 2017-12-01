package br.com.cycle.util;

public class TimeConverter {

    public static final Long HORA_EM_SEGUNDOS = 3600L;

    public static final Long MINUTO_EM_SEGUNDOS = 60L;


    public static Long horasEmSegundos(String totalHoras) {
        String[] arrayHoras = totalHoras.split(":");
        Integer horas = Integer.parseInt(arrayHoras[0]);
        Integer minutos = Integer.parseInt(arrayHoras[1]);

        return (horas * HORA_EM_SEGUNDOS) + (minutos * MINUTO_EM_SEGUNDOS);
    }

    public static String segundosEmHoras(Long segundosEmHoras) {
        Long horas = segundosEmHoras / HORA_EM_SEGUNDOS;

        Long minutosEmSegundos = segundosEmHoras % HORA_EM_SEGUNDOS;
        Long minutos = minutosEmSegundos / MINUTO_EM_SEGUNDOS;

        return horas + ":" + minutos;
    }
}
