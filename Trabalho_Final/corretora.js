"use strict";
class Corretora {
    constructor() {
        this._contas = [];
    }
    operacao(id_acionista, cod_acao, qtd, operacao) {
        switch (operacao) {
            case 1:
                this.venda(id_acionista, number, cod_acao, string, qtd, number);
                break;
            case 2:
                this.compra(id_acionista, number, cod_acao, string, qtd, number);
                break;
            default:
                break;
        }
    }
}
