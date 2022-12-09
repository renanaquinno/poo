"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Acao = void 0;
const Investimento_1 = require("./Investimento");
class Acao extends Investimento_1.Investimento {
    constructor(id, nome, valor, ticket) {
        super(id, nome, valor);
        this.ticket = ticket;
    }
}
exports.Acao = Acao;
