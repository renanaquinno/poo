"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Corretora = void 0;
const Erros_1 = require("./Erros");
class Corretora {
    constructor() {
        this._homeBroker = [];
        this._homeBrokerTesouro = [];
        this._contas = [];
    }
    //////////////////// FUNÇÕES DE ATIVOS CORRETORA ////////////////////
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
    cadastrarTesouro(tesouro) {
        try {
            this.consultarAcaoTicket(tesouro.nome_ativo);
        }
        catch (e) {
            if (e instanceof Erros_1.AcaoInexistenteError) {
                this._homeBrokerTesouro.push(tesouro);
            }
            else {
                console.log("Tesouro já existe.");
            }
        }
    }
    cadastrarConta(conta) {
        try {
            this.consultarAcaoTicket(conta.nome);
        }
        catch (e) {
            if (e instanceof Erros_1.AcaoInexistenteError) {
                this._contas.push(conta);
            }
            else {
                console.log("Conta já existe.");
            }
        }
    }
    //////////////////// FUNÇÕES DE AÇÃO CORRETORA ////////////////////
    editarNomeAcao(ticket, novoNome) {
        this.consultarAcaoTicket(ticket).nome_ativo = novoNome;
    }
    editarPrecoAcao(ticket, novoPreco) {
        this.consultarAcaoTicket(ticket).valor_ativo = novoPreco;
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
    //////////////////// FUNÇÕES DE TESOURO CORRETORA ////////////////////
    editarNomeTesouro(nome, novo_nome) {
        this.consultarTesouroNome(nome).nome_ativo = novo_nome;
    }
    editarValorTesouro(nome, novo_valor) {
        this.consultarTesouroNome(nome).valor_ativo = novo_valor;
    }
    editarVencimentoTesouro(nome, novo_vencimento) {
        this.consultarTesouroNome(nome).data_vencimento = novo_vencimento;
    }
    editarRentabilidadeTesouro(nome, nova_renatabilidade_anual) {
        this.consultarTesouroNome(nome).rentabilidade_anual = nova_renatabilidade_anual;
    }
    consultarTesouroNome(nome) {
        let tesouroProcurado;
        for (let i = 0; i < this._homeBrokerTesouro.length; i++) {
            if (this._homeBrokerTesouro[i].nome_ativo == nome) {
                tesouroProcurado = this._homeBrokerTesouro[i];
            }
        }
        if (!tesouroProcurado) {
            throw new Erros_1.AcaoInexistenteError("Tesouro inexistente, verifique o nome informado.");
        }
        return tesouroProcurado;
    }
    consultarIndiceTesouro(nome_ativo) {
        let indiceProcurado = -1;
        for (let i = 0; i < this._homeBrokerTesouro.length; i++) {
            if (this._homeBrokerTesouro[i].nome_ativo == nome_ativo) {
                indiceProcurado = i;
            }
        }
        if (indiceProcurado == -1) {
            throw new Erros_1.AcaoInexistenteError("Tesouro Inexistente, Verifique o Nome Informado.");
        }
        return indiceProcurado;
    }
    excluirTesouro(nome) {
        let indice = this.consultarIndiceTesouro(nome);
        if (indice != -1) {
            for (var i = indice; i < this._homeBrokerTesouro.length; i++) {
                this._homeBrokerTesouro[i] = this._homeBrokerTesouro[i + 1];
            }
            this._homeBrokerTesouro.pop();
        }
    }
    //////////////////// FUNÇÕES DE ATIVO ////////////////////
    verCarteira(conta) {
        let indice = this.consultarIndiceConta(conta);
        this._contas[indice].verCarteira(conta);
    }
    carregarAtivos(conta, ativo) {
        let indice = this.consultarIndiceConta(conta);
        this._contas[indice].carregarAcao(ativo);
    }
    //////////////////// FUNÇÕES DE AÇÃO INVESTIDOR ////////////////////
    comprarAcao(conta, acao) {
        let indice = this.consultarIndiceConta(conta);
        let valor_total = this.consultarAcaoTicket(acao.nome_ativo).valor_ativo;
        if (indice != -1) {
            this._contas[indice].comprarAcao(acao, valor_total);
        }
    }
    venderAcao(conta, ativo) {
        let indice = this.consultarIndiceConta(conta);
        let valor_total = this.consultarAcaoTicket(ativo.nome_ativo).valor_ativo;
        if (indice != -1) {
            this._contas[indice].venderAcao(ativo, valor_total);
        }
    }
    //////////////////// FUNÇÕES DE TESOURO INVESTIDOR ////////////////////
    comprarTesouro(conta, tesouro) {
        let indice = this.consultarIndiceConta(conta);
        let valor_total = this.consultarTesouroNome(tesouro.nome_ativo).valor_ativo;
        if (indice != -1) {
            this._contas[indice].comprarTesouro(tesouro, valor_total);
        }
    }
    venderTesouro(conta, tesouro) {
        let indice = this.consultarIndiceConta(conta);
        let valor_total = this.consultarTesouroNome(tesouro.nome_ativo).valor_ativo;
        if (indice != -1) {
            this._contas[indice].venderTesouro(tesouro, valor_total);
        }
    }
    carregarTesouro(conta, tesouro) {
        let indice = this.consultarIndiceConta(conta);
        this._contas[indice].carregarTesouro(tesouro);
    }
    ////////////////////////// FUNÇÕES EXTRAS //////////////////////////
    consultarIndiceConta(nome) {
        let indiceProcurado = -1;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].nome == nome) {
                indiceProcurado = i;
            }
        }
        if (indiceProcurado == -1) {
            throw new Erros_1.AcaoInexistenteError("Conta Inexistente, Verifique o Nome Informado.");
        }
        return indiceProcurado;
    }
    consultarConta(nome) {
        let contaProcurada;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].nome == nome) {
                contaProcurada = this._contas[i];
            }
        }
        return contaProcurada;
    }
    listarAtivos() {
        let listaStringAcoes = '\nAÇÕES:\n';
        let listaStringTesouro = '\nTESOURO:\n';
        let listaStringContas = '\nCONTAS:\n';
        for (let i = 0; i < this._homeBroker.length; i++) {
            listaStringAcoes = listaStringAcoes +
                ' - Empresa: ' + this._homeBroker[i].nome_ativo +
                ' - Ticket: ' + this._homeBroker[i].ticket +
                ' - Valor: ' + this._homeBroker[i].valor_ativo + '\n';
        }
        for (let i = 0; i < this._homeBrokerTesouro.length; i++) {
            listaStringTesouro = listaStringTesouro +
                ' - Tesouro: ' + this._homeBrokerTesouro[i].nome_ativo +
                ' - Valor: ' + this._homeBrokerTesouro[i].valor_ativo +
                ' - Vencimento: ' + this._homeBrokerTesouro[i].data_vencimento +
                ' - Rentabilidade Anual: ' + this._homeBrokerTesouro[i].rentabilidade_anual + '\n';
        }
        for (let i = 0; i < this._contas.length; i++) {
            listaStringContas = listaStringContas +
                ' Nome: ' + this._contas[i].nome +
                ' - Saldo: ' + this._contas[i].saldo + '\n';
        }
        return listaStringAcoes + listaStringTesouro + listaStringContas;
    }
    atualizarBancoDeDados() {
        let listaStrings = '';
        let listaStringsContas = '';
        for (let i = 0; i < this._homeBroker.length; i++) {
            listaStrings = listaStrings + 'A;' + this._homeBroker[i].nome_ativo + ';' + this._homeBroker[i].ticket + ';' + this._homeBroker[i].valor_ativo + '\n';
        }
        for (let i = 0; i < this._homeBrokerTesouro.length; i++) {
            listaStrings = listaStrings + 'T;' + this._homeBrokerTesouro[i].nome_ativo + ';' + this._homeBrokerTesouro[i].valor_ativo + ';' + this._homeBrokerTesouro[i].data_vencimento + ';' + this._homeBrokerTesouro[i].rentabilidade_anual + '\n';
        }
        var ativos = require('fs');
        ativos.writeFile('ativos.txt', listaStrings, function (err) {
            if (err)
                throw err;
        });
        for (let i = 0; i < this._contas.length; i++) {
            listaStringsContas = listaStringsContas + this._contas[i].nome + ';' + this._contas[i].saldo + '\n';
            this._contas[i].atualizarBanco();
        }
        var contas = require('fs');
        contas.writeFile('contas.txt', listaStringsContas, function (err) {
            if (err)
                throw err;
        });
    }
}
exports.Corretora = Corretora;
