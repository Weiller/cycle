import { Message } from 'primeng/components/common/api';

export class Mensagens {

  public static MENSAGEM_CADASTRAR_MATERIA_SUCESSO: Message = {
    severity: 'sucess', summary: 'Inclusão Matéria', detail: 'Matéria cadastrada com sucesso.'
  };

  public static MENSAGEM_ALTERAR_MATERIA_SUCESSO: Message = {
    severity: 'success', summary: 'Alteração Matéria', detail: `Matéria alterada com sucesso.`
  };

  public static MENSAGEM_ALTERAR_MATERIA_ERRO: Message = {
    severity: 'error', summary: 'Alteração Matéria', detail: 'Erro ao atualizar mateŕia.'
  };

  public static sucesso(mensagem: string, sumario: string) {
    return {severity: 'success', summary: sumario, detail: mensagem};
  }

  public static erro(mensagem: string, sumario: string) {
    return {severity: 'error', summary: sumario, detail: mensagem};
  }

  public static info(mensagem: string, sumario: string) {
    return {severity: 'info', summary: sumario, detail: mensagem};
  }

  public static warn(mensagem: string, sumario: string) {
    return {severity: 'warn', summary: sumario, detail: mensagem};
  }


}
