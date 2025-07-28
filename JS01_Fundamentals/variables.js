// === VARIÁVEIS ===
// const: constantes
const PI = 3.14159;
console.log(PI);

// let: variáveis que podem ser reatribuídas
let ano = 2025;
ano = 2026;
console.log(ano);

// var: variáveis que podem ser reatribuídas (vazam escopo - não usar)
function verificarStatus(isAtivo) {
  if (isAtivo) {
    var status = "Usuário Ativo";
    console.log(status); // "Usuário Ativo"
  }
  // A variável 'status' vazou para fora do bloco 'if'
  console.log(status); // "Usuário Ativo" - Isso pode não ser o comportamento esperado.
}

verificarStatus(true);

// hoisting: var
console.log(cidade); // undefined (NÃO dá erro!)
var cidade = "São Paulo";
console.log(cidade); // "São Paulo"

// hoisting: let, const
// console.log(idade); // ReferenceError: Cannot access 'idade' before initialization
let idade = 30; // Fim da TDZ para 'idade'
console.log(idade); // 30

// Escopo Global
const APP_VERSION = "1.0.1";

function returnVersion() {
  console.log(APP_VERSION); // APP_VERSION pode ser acessado
}

// Escopo de Função
function returnMessage() {
  const message = "Hello, World!";
  console.log(message);
}
// console.log(message) - não pode ser acessado

// Escopo de bloco
let bonus = 100;
if (bonus > 50) {
  const message = "Você ganhou um bônus!";
  console.log(message);
}
// console.log(message) - não pode ser acessado

// const com objetos
const usuario = {
  nome: "Lucas",
  idade: 26,
};

usuario.idade = 27; // Permitido, pois estamos alterando uma propriedade e não a referência
console.log(usuario);

// const com arrays
const cores = ["Branco", "Azul"];
cores.push("Verde"); // Permitido, pois estamos modificando o conteúdo do array

// ISSO NÃO É PERMITIDO! Estamos tentando atribuir um novo objeto/array à constante.
// usuario = { nome: "Carlos", id: 456 }; // TypeError
// cores = ["preto", "branco"]; // TypeError
