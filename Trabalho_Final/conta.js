"use strict";
class Conta {
    constructor(_id, _saldo, _ativos) {
        this._ativos = [];
        this._id = _id;
        this._saldo = _saldo;
        this._ativos = _ativos;
    }
    get saldo() {
        return this._saldo;
    }
    get id() {
        return this._id;
    }
    comprar(cod_acao, valor_ordem) {
        //this.validarValor(cod_acao);
        if (this._saldo <= valor_ordem) {
            throw new SaldoInsuficienteError("Saldo Insuficiente");
        }
        //let qtd = (valor_ordem/cotacao);
        //let acao: [string, number] = [cod_acao,qtd];
        //this._ativos.push(acao);
        this._saldo -= valor_ordem;
    }
}
