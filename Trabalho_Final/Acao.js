"use strict";
class Acao extends Investimento {
    constructor(id, nome, valor, ticket) {
        super(id, nome, valor);
        this.ticket = ticket;
    }
}
