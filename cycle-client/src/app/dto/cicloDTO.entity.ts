import { Materia } from './../entity/materia.entity';

export class CicloDTO {
  public codigo: number;
  public nomeCiclo: string;
  public totalHoras: string;
  public horasEstudadas: string;
  public dataCriacao: Date;
  public materias: Materia[];
  public materiasExcluir: Materia[];
}
