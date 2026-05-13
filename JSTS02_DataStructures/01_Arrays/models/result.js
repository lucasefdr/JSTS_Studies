export class Result {
    constructor(sucesso, entidade = null, mensagemErro = null) {
        this.sucesso = sucesso;
        this.entidade = entidade;
        this.mensagemErro = mensagemErro;
    }

    static sucesso(entidade) {
        return new Result(true, entidade, null);  
    }

    static falha(mensagemErro) {
        return new Result(false, null, mensagemErro);  
    }
}