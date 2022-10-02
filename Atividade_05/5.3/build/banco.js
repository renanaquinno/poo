"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
class Banco {
    constructor() {
        this.contas = [];
    }
    inserir(conta) {
        if (this.contas.includes(conta)) {
            return false;
        }
        else {
            this.contas.push(conta);
            return true;
        }
    }
    alterar(conta) {
        let indice = this.consultarIndice(conta.numero);
        if (indice != -1) {
            this.contas[indice] = conta;
        }
    }
    excluir(numero) {
        let indice = this.consultarIndice(numero);
        if (indice != -1) {
            for (let i = indice; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    }
    consultar(numero) {
        let contaProcurada;
        for (let conta of this.contas) {
            if (conta.numero == numero) {
                contaProcurada = conta;
                break;
            }
        }
        return contaProcurada;
    }
    consultarIndice(numero) {
        let indice = -1;
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    }
    sacar(numero, valor) {
        let conta = this.consultar(numero);
        if (conta != null) {
            conta.sacar(valor);
            return true;
        }
        else {
            return false;
        }
    }
    depositar(numero, valor) {
        let conta = this.consultar(numero);
        if (conta != null) {
            conta.depositar(valor);
        }
    }
    transfeir(numeroOrigem, numeroDestino, valor) {
        let c1 = this.consultar(numeroOrigem);
        let c2 = this.consultar(numeroDestino);
        c1.transferir(c2, valor);
    }
    totalContas() {
        return this.contas.length;
    }
    totalDepositado() {
        let total = 0;
        this.contas.forEach(element => {
            total += element.consultarSaldo();
        });
        return total;
    }
    mediaSaldo() {
        return this.totalDepositado() / this.totalContas();
    }
}
exports.Banco = Banco;
// let b: Banco = new Banco();
// let p1: Pessoa = new Pessoa("Renan");
// b.inserir(new Conta("1", 100, p1));
// b.inserir(new Conta("2", 200, p1));
// console.log(b.consultar("2").saldo);
// console.log(b.consultarIndice("1"));
// let c2 = new Conta("2", 300, p1);
// b.alterar(c2);
// console.log(b.consultar("2").saldo);
// b.inserir(new Conta("3", 300, p1));
// b.excluir("1");
// console.log(b.consultarIndice("3"));
// b.depositar("3", 100);
// console.log(b.consultar("3").saldo); 
//# sourceMappingURL=banco.js.map