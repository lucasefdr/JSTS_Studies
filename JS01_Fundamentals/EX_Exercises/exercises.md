# 🚀 Desafios Práticos: JavaScript Fundamentos e Objetos Avançados

Este repositório contém exercícios práticos para consolidar o entendimento de variáveis, coerção de tipos e a natureza dinâmica dos objetos em JavaScript.

## 🛠️ Instruções
1. Crie um arquivo `.js` para cada exercício (ex: `ex01-variaveis.js`).
2. Leia o cenário e os requisitos.
3. Escreva o código onde há a indicação `// TODO`.
4. Rode o arquivo usando o Node.js (`node ex01-variaveis.js`) para testar.

---

### Exercício 1: Variáveis e Tipos Primitivos (O Motor de Cobrança)
**Cenário:** Você precisa criar uma função que calcule o valor da mensalidade de um restaurante no seu SaaS. A regra de negócio exige o uso correto de `let` e `const` para evitar mutações indesejadas.

**Requisitos:**
- Declare uma constante para a taxa base do SaaS (ex: 99.90).
- Declare uma variável que guarde o número de mesas ativas.
- Declare uma variável booleana indicando se o restaurante tem o módulo de "Delivery" ativo (que adiciona 20% ao valor total).
- Retorne uma *Template String* formatada com o valor final.

```javascript
function calculateMonthlySaaS(tables, hasDelivery) {
    if (typeof tables !== 'number' || typeof hasDelivery !== 'boolean') {
        throw new TypeError("Invalid input: 'tables' should be a number and 'hasDelivery' should be a boolean.");
    }

    let totalFee = 0;
    const baseRate = 100;
    let activeTables = tables;
    let isDelivery = hasDelivery;

    totalFee = baseRate * (activeTables) * (isDelivery ? 1.2 : 1);

    return `The monthly fee is ${totalFee.toFixed(2)}`;
}

console.log(calculateMonthlySaaS(10, true));
console.log(calculateMonthlySaaS(10, false));
```