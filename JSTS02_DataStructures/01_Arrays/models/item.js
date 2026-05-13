class Item {
  #sku;
  #preco;
  #categoria;
  #emEstoque;

  constructor(sku, preco, categoria, emEstoque) {
    this.#sku = sku;
    this.#preco = preco;
    this.#categoria = categoria;
    this.#emEstoque = emEstoque;
  }

  // Factory method
  static criarItem(sku, preco, categoria, emEstoque) {
    return new Item(sku, preco, categoria, emEstoque);
  }

  get sku() {
    return this.#sku;
  }

  get emEstoque() {
    return this.#emEstoque;
  }

  get categoria() {
    return this.#categoria;
  }

  get preco() {
    return this.#preco;
  }

  set preco(novoPreco) {
    if (novoPreco < 0) {
      throw new Error("O preço não pode ser negativo.");
    }
    this.#preco = novoPreco;
  }
}
