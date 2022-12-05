"use strict";
class Conta {
    constructor(id, saldo, ativos) {
        this._ativos = ['', '', 0];
        this.id = id;
        this._ativos = ativos;
        this._saldo = saldo;
    }
    get saldo() {
        return this._saldo;
    }
    get ativos() {
        return this._ativos;
    }
    comprarAcao(acao) {
        if (this._saldo <= parseFloat(acao[1])) {
            throw new Error("Saldo Insuficiente");
        }
        else if (parseFloat(acao[1]) < 0) {
            throw new Error("Valor precisa ser maior que 0");
        }
        this._ativos.push(acao[0], acao[1], acao[2]); //CORRIGIR
        this._saldo -= parseFloat(acao[1]);
    }
    venderAcao(acao) {
        if (parseFloat(acao[1]) < 0) {
            throw new Error("Valor precisa ser maior que 0");
        }
        this._saldo += parseFloat(acao[1]);
    }
}
