"use strict";
class Conta {
    constructor(id, saldo, ativos) {
        this._ativos = ['', '', 0];
        this.id = id;
        this._ativos = ativos;
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
    comprarAcao(acao) {
        if (this._saldo <= parseFloat(acao[1])) {
            throw new Error("Saldo Insuficiente");
        }
        else if (parseFloat(acao[1]) < 0) {
            throw new Error("Valor precisa ser maior que 0");
        }
        this._ativos.push(acao[0], acao[1], acao[2]); //CORRIGIR, PASSAR QUANTIDADE
        this._saldo -= parseFloat(acao[1]);
    }
    venderAcao(acao) {
        if (parseFloat(acao[1]) < 0) {
            throw new Error("Valor precisa ser maior que 0");
        }
        this._saldo += parseFloat(acao[1]);
    }
}
