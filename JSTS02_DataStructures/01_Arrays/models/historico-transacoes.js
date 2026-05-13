import { Transacao } from './transacao.js'
import { Result } from './result.js'

export class HistoricoTransacoes {
  #transacoes;

  constructor(transacoes = []) {
    this.#transacoes = transacoes;
  }

  // Factory method para criar um histórico de transações a partir de um array de objetos
  static criar(payload) {
    if (
      !Array.isArray(payload) ||
      !payload.every((item) => item instanceof Transacao)
    ) {
      return Result.falha("Payload deve ser um array de transações");
    }

    return Result.sucesso(new HistoricoTransacoes(payload));
  }

  adicionarTransacao(transacao) {
    if (transacao instanceof Transacao) {
      if (transacao.valor <= 0) {
        return Result.falha("Valor da transação deve ser maior que zero");
      }

      this.#transacoes.push(transacao);
    }

    return Result.falha("Transação inválida");
  }

  obterSaldoTotal() {
    return this.#transacoes.reduce((saldo, transacao) => {
      return transacao.tipo === "credito"
        ? saldo + transacao.valor
        : saldo - transacao.valor;
    }, 0);
  }
}
