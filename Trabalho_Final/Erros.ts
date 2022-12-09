class AplicacaoError extends Error {
    constructor(msg: string) {
        super(msg)
    }
}

class ValorInvalidoError extends AplicacaoError {
    constructor(msg: string) {
        super(msg)
    }
}

class AcaoInexistenteError extends AplicacaoError {
    constructor(msg: string) {
        super(msg)
    }
}

class AcaoJaExistenteError extends AplicacaoError {
    constructor(msg: string) {
        super(msg)
    }
}

class SaldoInsuficienteError extends AplicacaoError {
    constructor(msg: string) {
        super(msg)
    }
}

export {AplicacaoError, ValorInvalidoError, AcaoInexistenteError, AcaoJaExistenteError, SaldoInsuficienteError};