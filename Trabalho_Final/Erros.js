"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtivoInexistenteError = exports.QuantidadeInsuficienteError = exports.SaldoInsuficienteError = exports.AcaoJaExistenteError = exports.AcaoInexistenteError = exports.ValorInvalidoError = exports.AplicacaoError = void 0;
class AplicacaoError extends Error {
    constructor(msg) {
        super(msg);
    }
}
exports.AplicacaoError = AplicacaoError;
class ValorInvalidoError extends AplicacaoError {
    constructor(msg) {
        super(msg);
    }
}
exports.ValorInvalidoError = ValorInvalidoError;
class AcaoInexistenteError extends AplicacaoError {
    constructor(msg) {
        super(msg);
    }
}
exports.AcaoInexistenteError = AcaoInexistenteError;
class AtivoInexistenteError extends AplicacaoError {
    constructor(msg) {
        super(msg);
    }
}
exports.AtivoInexistenteError = AtivoInexistenteError;
class AcaoJaExistenteError extends AplicacaoError {
    constructor(msg) {
        super(msg);
    }
}
exports.AcaoJaExistenteError = AcaoJaExistenteError;
class SaldoInsuficienteError extends AplicacaoError {
    constructor(msg) {
        super(msg);
    }
}
exports.SaldoInsuficienteError = SaldoInsuficienteError;
class QuantidadeInsuficienteError extends AplicacaoError {
    constructor(msg) {
        super(msg);
    }
}
exports.QuantidadeInsuficienteError = QuantidadeInsuficienteError;
