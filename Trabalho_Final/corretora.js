"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Corretora = void 0;
const Erros_1 = require("./Erros");
class Corretora {
    constructor() {
        this._homeBroker = [];
        this._contas = [];
    }
    cadastrarAcao(acao) {
        try {
            this.consultarAcaoTicket(acao.ticket);
        }
        catch (e) {
            if (e instanceof Erros_1.AcaoInexistenteError) {
                this._homeBroker.push(acao);
            }
            else {
                console.log("Ação já existe.");
            }
        }
    }
    editarNomeAcao(ticket, novoNome) {
        this.consultarAcaoTicket(ticket).nome = novoNome;
    }
    editarPrecoAcao(ticket, novoPreco) {
        this.consultarAcaoTicket(ticket).valor = novoPreco;
    }
    editarTicketAcao(ticket, novoTicket) {
        this.consultarAcaoTicket(ticket).ticket = novoTicket;
    }
    consultarAcao(id) {
        let acaoProcurada;
        for (let i = 0; i < this._homeBroker.length; i++) {
            if (this._homeBroker[i].id == id) {
                acaoProcurada = this._homeBroker[i];
            }
        }
        if (!acaoProcurada) {
            throw new Erros_1.AcaoInexistenteError("Ação inexistente, verifique o numero informado.");
        }
        return acaoProcurada;
    }
    consultarAcaoTicket(ticket) {
        let acaoProcurada;
        for (let i = 0; i < this._homeBroker.length; i++) {
            if (this._homeBroker[i].ticket == ticket) {
                acaoProcurada = this._homeBroker[i];
            }
        }
        if (!acaoProcurada) {
            throw new Erros_1.AcaoInexistenteError("Ação inexistente, verifique o numero informado.");
        }
        return acaoProcurada;
    }
    consultarIndiceAcao(ticket) {
        let indiceProcurado = -1;
        for (let i = 0; i < this._homeBroker.length; i++) {
            if (this._homeBroker[i].ticket == ticket) {
                indiceProcurado = i;
            }
        }
        if (indiceProcurado == -1) {
            throw new Erros_1.AcaoInexistenteError("Ação Inexistente, Verifique o Ticket Informado.");
        }
        return indiceProcurado;
    }
    excluirAcao(ticket) {
        let indice = this.consultarIndiceAcao(ticket);
        if (indice != -1) {
            for (var i = indice; i < this._homeBroker.length; i++) {
                this._homeBroker[i] = this._homeBroker[i + 1];
            }
            this._homeBroker.pop();
        }
    }
    consultarValorAcao(id) {
        let acaoProcurada;
        for (let i = 0; i < this._homeBroker.length; i++) {
            if (this._homeBroker[i].id == id) {
                acaoProcurada = this._homeBroker[i];
            }
        }
        if (!acaoProcurada) {
            throw new Erros_1.AcaoInexistenteError("Ação inexistente, verifique o numero informado.");
        }
        return acaoProcurada;
    }
    comprarAcao(id_conta, acao) {
        let indice = this.consultarIndiceConta(id_conta);
        let valor_acao = this.consultarValorAcao(acao[0]);
        let qtd_acoes = (parseFloat(acao[1]) / valor_acao.valor);
        acao[2] = (qtd_acoes);
        if (indice != -1) {
            this._contas[indice].comprarAcao(acao);
        }
    }
    venderAcao(id_conta, acao) {
        let indice = this.consultarIndiceConta(id_conta);
        if (indice != -1) {
            for (var i = indice; i < this._contas.length; i++) {
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
            this._contas[indice].venderAcao(acao);
        }
    }
    consultarIndiceConta(id_conta) {
        let indiceProcurado = -1;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].id == id_conta) {
                indiceProcurado = i;
            }
        }
        return indiceProcurado;
    }
    consultarConta(id_conta) {
        let contaProcurada;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].id == id_conta) {
                contaProcurada = this._contas[i];
            }
        }
        return contaProcurada;
    }
    listarAcoes() {
        let listaStrings = '';
        for (let i = 0; i < this._homeBroker.length; i++) {
            listaStrings = listaStrings +
                ' ID: ' + this._homeBroker[i].id +
                ' - Empresa: ' + this._homeBroker[i].nome +
                ' - Ticket: ' + this._homeBroker[i].ticket +
                ' - Valor: ' + this._homeBroker[i].valor + '\n';
        }
        return listaStrings;
    }
    atualizarBancoDeDados() {
        let listaStrings = '';
        for (let i = 0; i < this._homeBroker.length; i++) {
            listaStrings = listaStrings + this._homeBroker[i].nome + ';' + this._homeBroker[i].ticket + ';' + this._homeBroker[i].valor + '\n';
        }
        var banco = require('fs');
        banco.writeFile('bd.txt', listaStrings, function (err) {
            if (err)
                throw err;
            console.log('Banco de Dados Atualizado!');
        });
    }
}
exports.Corretora = Corretora;
// let a01: Acao = new Acao('1', 'Itaú', 19.90, 'ITUB4');
// let corretora: Corretora = new Corretora();
// corretora.adicionarAcao(a01);
// console.log(corretora.consultarAcao('1'));
