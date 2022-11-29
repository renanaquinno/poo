"use strict";
class Conta {
    constructor(id, saldo, ativos) {
        this._ativos = [];
        this._id = id;
        this._ativos = ativos;
        if (saldo < 0) {
            this.validarValor(saldo);
        }
        this._saldo = saldo;
    }
    validarValor(valor) {
        if (valor <= 0) {
            throw new ValorInvalidoError("Valor precisa ser maior que R$ 0,00.");
        }
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
        //let qtd = (valor_ordem/cotacao);
        //let acao: [string, number] = [cod_acao,qtd];
        //this._ativos.push(acao);
        this._saldo -= valor_ordem;
    }
    vender(cod_acao, valor_ordem) {
        if (valor_ordem < 0) {
            throw new Error("Valor precisa ser maior que 0");
        }
        //let qtd = (valor_ordem/cotacao);
        //let acao: [string, number] = [cod_acao,qtd];
        //this._ativos.push(acao);
        this._saldo += valor_ordem;
    }
}
