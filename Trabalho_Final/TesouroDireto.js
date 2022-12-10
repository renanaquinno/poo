"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TesouroDireto = void 0;
const Investimento_1 = require("./Investimento");
class TesouroDireto extends Investimento_1.Investimento {
    constructor(id, nome_ativo, valor_ativo, data_vencimento, taxaRetorno) {
        super(id, nome_ativo, valor_ativo);
        this.data_vencimento = data_vencimento;
        this.rentabilidade_anual = taxaRetorno;
    }
}
exports.TesouroDireto = TesouroDireto;
