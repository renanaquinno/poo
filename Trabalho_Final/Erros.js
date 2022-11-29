"use strict";
class AplicacaoError extends Error {
    constructor(msg) {
        super(msg);
    }
}
class ValorInvalidoError extends AplicacaoError {
    constructor(msg) {
        super(msg);
    }
}
class AcaoInexistenteError extends AplicacaoError {
    constructor(msg) {
        super(msg);
    }
}
class SaldoInsuficienteError extends AplicacaoError {
    constructor(msg) {
        super(msg);
    }
}
