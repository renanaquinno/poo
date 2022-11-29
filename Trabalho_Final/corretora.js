"use strict";
class Corretora {
    constructor() {
        this._homeBroker = [];
    }
    adicionarAtivo(ativo) {
        this._homeBroker.push(ativo);
    }
    operacao(id_acionista, cod_acao, qtd, operacao) {
        switch (operacao) {
            case 1:
                break;
            case 2:
                compra(id_acionista, number, cod_acao, string, qtd, number);
                break;
            default:
                break;
        }
    }
}
