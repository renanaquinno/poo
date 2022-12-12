"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Investidor = exports.Conta = void 0;
const Erros_1 = require("./Erros");
class Conta {
    constructor(id, nome, senha, saldo) {
        this.id = id;
        this.nome = nome;
        this._saldo = saldo;
        this._senha = senha;
    }
    get saldo() {
        return this._saldo;
    }
    get senha() {
        return this._senha;
    }
    atualizaSaldo(valor, tipo) {
        if (tipo == 1) {
            this._saldo += valor;
        }
        else if (tipo == 0) {
            this._saldo -= valor;
        }
        return this._saldo;
    }
}
exports.Conta = Conta;
class Investidor extends Conta {
    constructor(id, nome, senha, saldo) {
        super(id, nome, senha, saldo);
        this._ativoComprado = [];
    }
    operarAtivo(ativo, valor_total, tipo_operacao) {
        if (tipo_operacao == 'COMPRAR') {
            if (this.saldo <= valor_total) {
                throw new Erros_1.SaldoInsuficienteError("Saldo Insuficiente");
            }
            else if (ativo.quantidade < 0) {
                throw new Erros_1.QuantidadeInsuficienteError("Quantidade precisa ser maior que 0");
            }
            for (let i = 0; i < this._ativoComprado.length; i++) {
                if (ativo.nome_conta == this._ativoComprado[i].nome_conta && ativo.id == this._ativoComprado[i].id) {
                    this._ativoComprado[i].quantidade += ativo.quantidade;
                    this.atualizaSaldo(valor_total, 0);
                    return;
                }
            }
            this._ativoComprado.push(ativo);
            this.atualizaSaldo(valor_total, 0);
        }
        else {
            let indice = this.consultarPorIndiceAtivo(ativo.id);
            if (valor_total < 0) {
                throw new Erros_1.QuantidadeInsuficienteError("Quantidade precisa ser maior que 0");
            }
            if (indice != -1) {
                if (ativo.quantidade == this._ativoComprado[indice].quantidade) {
                    for (var i = indice; i < this._ativoComprado.length; i++) {
                        this._ativoComprado[i] = this._ativoComprado[i + 1];
                    }
                    this._ativoComprado.pop();
                }
                else {
                    this._ativoComprado[indice].quantidade -= ativo.quantidade;
                }
                this.atualizaSaldo(valor_total, 1);
            }
            else {
                throw new Erros_1.AtivoInexistenteError("Você Não Possui Esse Ativo em Sua Carteira!");
            }
        }
    }
    consultarPorIndiceAtivo(id_ativo) {
        let indiceProcurado = -1;
        for (let i = 0; i < this._ativoComprado.length; i++) {
            if (this._ativoComprado[i].id == id_ativo) {
                indiceProcurado = i;
            }
        }
        return indiceProcurado;
    }
    //////////////////// FUNÇÕES EXTRA ////////////////////
    carregarAtivo(ativo) {
        this._ativoComprado.push(ativo);
    }
    verCarteira(nome) {
        let ativo_procurado = [];
        for (let i = 0; i < this._ativoComprado.length; i++) {
            if (this._ativoComprado[i].nome_conta == nome) {
                ativo_procurado.push(this._ativoComprado[i]);
            }
        }
        return ativo_procurado;
    }
    atualizarBanco() {
        let listaStringsCarteiras = '';
        for (let i = 0; i < this._ativoComprado.length; i++) {
            listaStringsCarteiras = listaStringsCarteiras + this._ativoComprado[i].id + ';' + this._ativoComprado[i].nome_conta + ';' + this._ativoComprado[i].nome_empresa + ';' + this._ativoComprado[i].quantidade + ';' + this._ativoComprado[i].tipo_ativo + '\n';
        }
        var carteiras = require('fs');
        carteiras.writeFile('carteira_' + this.nome + '.txt', listaStringsCarteiras, function (err) {
            if (err)
                throw err;
        });
    }
}
exports.Investidor = Investidor;
