import { Transacao } from './models/transacao.js'
import { HistoricoTransacoes } from './models/historico-transacoes.js'

// Inicializar array
const modulos = [];

// Adicionar ao final do array
modulos.push("Autenticação");
modulos.push("Faturamento");

// Remover o último elemento do array
const ultimoModulo = modulos.pop();

const transacoes = [
  { id: 101, tipo: "credito", valor: 5000, ativa: true },
  { id: 102, tipo: "debito", valor: 200, ativa: true },
  { id: 103, tipo: "credito", valor: 1500, ativa: false },
];

// Pipeline de processamento funcional
const totalCreditoAtivo = transacoes
  .filter((transacao) => transacao.ativa && transacao.tipo === "credito")
  .map((transacaoValida) => transacaoValida.valor)
  .reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log(totalCreditoAtivo); // Output: 5000

// Transacoes
const arrayTransacoes = [
  new Transacao(104, 300, Date.now(), "debito"),
  new Transacao(105, 700, Date.now(), "credito"),
  new Transacao(106, 1000, Date.now(), "credito"),
];

const historicoTransacoes = HistoricoTransacoes.criar(arrayTransacoes).entidade;
console.log(historicoTransacoes);

historicoTransacoes.adicionarTransacao(
  new Transacao(107, 400, Date.now(), "debito")
);
console.log(historicoTransacoes);

console.log(historicoTransacoes.obterSaldoTotal());
