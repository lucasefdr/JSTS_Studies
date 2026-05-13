const itensCarrinho = [
  Item.criarItem("LAPTOP-X", 3300.0, "Eletrônicos", true),
  Item.criarItem("SMARTPHONE-Y", 1500.0, "Eletrônicos", true),
  Item.criarItem("FONE-Z", 200.0, "Acessórios", false),
  Item.criarItem("TABLET-W", 1200.0, "Eletrônicos", true),
];

// === Filter ===
const itensDisponiveis = itensCarrinho.filter(
  (item) => item.emEstoque === true,
);
console.log("Itens disponíveis:", itensDisponiveis);

const eletronicos = itensCarrinho.filter(
  (item) => item.categoria === "Eletrônicos",
);
console.log("Eletrônicos:", eletronicos);

// === Map ===
const itensComDesconto = itensCarrinho.map((item) => {
  return Iwtem.criarItem(
    item.sku,
    item.preco * 0.9, // 10% de desconto
    item.categoria,
    item.emEstoque,
  );
});
console.log("Itens com desconto:", itensComDesconto);
console.log("Itens do carrinho:", itensCarrinho);

// === Reduce ===
const valorTotal = itensCarrinho.reduce((total, item) => total + item.preco, 0);
console.log("Valor total do carrinho:", valorTotal);

// Reduzir por categoria
const listaPorCategoria = itensCarrinho.reduce((dict, item) => {
  const categoria = item.categoria;

  if (!dict[categoria]) {
    dict[categoria] = [];
  }

  dict[categoria].push(item);

  return dict;
}, {});
console.log("Itens agrupados por categoria:", listaPorCategoria);
