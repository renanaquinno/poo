"use strict";
class Acionista {
    //private _ativos: Acoes[] = [];
    constructor(_id, _nome, _saldo) {
        this._id = _id;
        this._nome = _nome;
        this._saldo = _saldo;
    }
    get saldo() {
        return this._saldo;
    }
    get id() {
        return this._id;
    }
}
