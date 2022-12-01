"use strict";
class TesouroDireto extends Investimento {
    constructor(id, nome, valor, vencimento, taxaRetorno) {
        super(id, nome, valor);
        this._vencimento = vencimento;
        this._taxaRetorno = taxaRetorno;
    }
}
