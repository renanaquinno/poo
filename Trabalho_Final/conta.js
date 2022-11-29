"use strict";
class Conta {
    constructor(_id, _saldo) {
        this._ativos = [];
        this._id = _id;
        this._saldo = _saldo;
    }
    get saldo() {
        return this._saldo;
    }
    get id() {
        return this._id;
    }
    comprar(cod_acao, valor_ordem) {
        if (this._saldo <= valor_ordem) {
            throw new Error("Saldo Insuficiente");
        }
        else if (valor_ordem < 0) {
            throw new Error("Valor precisa ser maior que 0");
        }
        else {
            //let qtd = (valor_ordem/cotacao);
            //let acao: [string, number] = [cod_acao,qtd];
            //this._ativos.push(acao);
            this._saldo -= valor_ordem;
        }
    }
}
