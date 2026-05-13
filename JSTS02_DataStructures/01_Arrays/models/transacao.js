export class Transacao {
    #id;
    #valor;
    #data;
    #tipo; // 'credito' ou 'debito'

    constructor(id, valor, data, tipo) {
        this.#id = id;
        this.#valor = valor;
        this.#data = data;
        this.#tipo = tipo; // 'credito' ou 'debito'
    }

    get id() {
        return this.#id;
    }

    get valor() {
        return this.#valor;
    }

    get data() {
        return this.#data;
    }

    get tipo() {
        return this.#tipo;
    }
}
