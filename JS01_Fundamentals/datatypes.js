// === String ===
const nome = "Lucas Eduardo";
const saudacao = "Olá";

console.log(`${saudacao}, ${nome}!`);

// === Number ===
const int = 10; // Inteiro
const float = 42.8; // Decimal
const negativo = -120; // Negativo
const infinito = 10 / 0; // Infinito
const notANumber = 10 / x; // Not a Number

// === Boolean ===
const usuarioEstaLogado = true;
const temPermissao = false;
const maiorDeIdade = 20 >= 18; // A expressão é avaliada para 'true'

if (usuarioEstaLogado) {
  console.log("Mostrar painel do usuário.");
} else {
  console.log("Mostrar página de login.");
}

// === undefined ===
let nomeDoMeio;
console.log(nomeDoMeio); // undefined
console.log(typeof nomeDoMeio); // "undefined"

function saudar(nome) {
  console.log("Olá, " + nome);
}
saudar(); // "Olá, undefined"

// === null ===
let usuario = null;

if (usuario != null) {
  console.log("[Lógica usuário logado]");
}

console.log(typeof null); // "object" (o famoso bug)

// === BigInt ===
const numeroMaximoSeguro = Number.MAX_SAFE_INTEGER;
console.log(numeroMaximoSeguro); // 9007199254740991

const numeroGigante = 900719925474099156n; // O 'n' indica que é um BigInt
const outroGigante = BigInt("900719925474099157");

// === Symbol ===
const idSecreto = Symbol("descrição opcional para debug");
const idSecreto2 = Symbol("descrição opcional para debug");

console.log(idSecreto === idSecreto2); // false (cada Symbol é único!)

const novoUsuario = {
  nome: "Carlos",
  [idSecreto]: "xyz-123-abc", // Usando o Symbol como chave de propriedade
};

console.log(novoUsuario.nome); // "Carlos"
console.log(novoUsuario[idSecreto]); // "xyz-123-abc"

// Propriedades de Symbol são ignoradas por laços for...in e JSON.stringify()
console.log(Object.keys(novoUsuario)); // ["nome"]
console.log(JSON.stringify(novoUsuario)); // {"nome":"Carlos"}
