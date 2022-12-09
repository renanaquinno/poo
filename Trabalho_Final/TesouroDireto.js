"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Investimento_1 = require("./Investimento");
class TesouroDireto extends Investimento_1.Investimento {
    constructor(id, nome, valor, vencimento, taxaRetorno) {
        super(id, nome, valor);
        this._vencimento = vencimento;
        this._taxaRetorno = taxaRetorno;
    }
}
