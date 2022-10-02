"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = exports.Pessoa = void 0;
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}
exports.Pessoa = Pessoa;
class Conta {
    constructor(numero, saldo, cliente) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }
    sacar(valor) {
        if ((this.saldo - valor) < 0) {
            return false;
        }
        else {
            this.saldo = this.saldo - valor;
            return true;
        }
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
    consultarSaldo() {
        return this.saldo;
    }
    get nomeCliente() {
        return this.cliente.nome;
    }
    transferir(contaDestino, valor) {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        else {
            return false;
        }
    }
    equals(conta) {
        return (this.numero == conta.numero &&
            this.cliente.nome == conta.cliente.nome);
    }
}
exports.Conta = Conta;
//# sourceMappingURL=conta.js.map