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
    fazerLogin(nome, senha) {
        let conta_procurada;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].nome == nome && this._contas[i].senha == senha) {
                conta_procurada = this._contas[i];
            }
        }
        if (!conta_procurada) {
            throw new Erros_1.AcaoInexistenteError("Erro de Login.");
        }
        return conta_procurada;
    }
    cadastrarAcao(acao) {
        try {
            this.consultarAcaoId(acao.id);
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
            this.consultarTesouroId(tesouro.id);
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
            this.consultarConta(conta.id);
        }
        catch (e) {
            if (e instanceof Erros_1.ContaInexistenteError) {
                this._contas.push(conta);
            }
            else {
                console.log("Conta já existe.");
            }
        }
    }
    consultarConta(conta_id) {
        let conta_procurada;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].id == conta_id) {
                conta_procurada = this._contas[i];
            }
        }
        if (!conta_procurada) {
            throw new Erros_1.ContaInexistenteError("Conta inexistente, verifique o numero informado.");
        }
        return conta_procurada;
    }
    //////////////////// FUNÇÕES DE AÇÃO CORRETORA ////////////////////
    editarNomeAcao(id_ativo, novoNome) {
        this.consultarAcaoId(id_ativo).nome_ativo = novoNome;
    }
    editarPrecoAcao(id_ativo, novoPreco) {
        this.consultarAcaoId(id_ativo).valor_ativo = novoPreco;
    }
    editarTicketAcao(id_ativo, novoTicket) {
        this.consultarAcaoId(id_ativo).ticket = novoTicket;
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
    consultarAcaoId(id_ativo) {
        let acaoProcurada;
        for (let i = 0; i < this._homeBroker.length; i++) {
            if (this._homeBroker[i].id == id_ativo) {
                acaoProcurada = this._homeBroker[i];
            }
        }
        if (!acaoProcurada) {
            throw new Erros_1.AcaoInexistenteError("Ação inexistente, verifique o Identificador informado.");
        }
        return acaoProcurada;
    }
    consultarIndiceAcao(id_ativo) {
        let indiceProcurado = -1;
        for (let i = 0; i < this._homeBroker.length; i++) {
            if (this._homeBroker[i].id == id_ativo) {
                indiceProcurado = i;
            }
        }
        if (indiceProcurado == -1) {
            throw new Erros_1.AcaoInexistenteError("Ação Inexistente, Verifique o Identificador Informado.");
        }
        return indiceProcurado;
    }
    excluirAcao(id_ativo) {
        let indice = this.consultarIndiceAcao(id_ativo);
        if (indice != -1) {
            for (var i = indice; i < this._homeBroker.length; i++) {
                this._homeBroker[i] = this._homeBroker[i + 1];
            }
            this._homeBroker.pop();
        }
    }
    //////////////////// FUNÇÕES DE TESOURO CORRETORA ////////////////////
    editarNomeTesouro(id_ativo, novo_nome) {
        this.consultarTesouroId(id_ativo).nome_ativo = novo_nome;
    }
    editarValorTesouro(id_ativo, novo_valor) {
        this.consultarTesouroId(id_ativo).valor_ativo = novo_valor;
    }
    editarVencimentoTesouro(id_ativo, novo_vencimento) {
        this.consultarTesouroId(id_ativo).data_vencimento = novo_vencimento;
    }
    editarRentabilidadeTesouro(id_ativo, nova_renatabilidade_anual) {
        this.consultarTesouroId(id_ativo).rentabilidade_anual = nova_renatabilidade_anual;
    }
    consultarTesouroId(id_ativo) {
        let tesouroProcurado;
        for (let i = 0; i < this._homeBrokerTesouro.length; i++) {
            if (this._homeBrokerTesouro[i].id == id_ativo) {
                tesouroProcurado = this._homeBrokerTesouro[i];
            }
        }
        if (!tesouroProcurado) {
            throw new Erros_1.AcaoInexistenteError("Tesouro inexistente, verifique o nome informado.");
        }
        return tesouroProcurado;
    }
    consultarIndiceTesouro(id_ativo) {
        let indiceProcurado = -1;
        for (let i = 0; i < this._homeBrokerTesouro.length; i++) {
            if (this._homeBrokerTesouro[i].id == id_ativo) {
                indiceProcurado = i;
            }
        }
        if (indiceProcurado == -1) {
            throw new Erros_1.AcaoInexistenteError("Tesouro Inexistente, Verifique o Nome Informado.");
        }
        return indiceProcurado;
    }
    excluirTesouro(id_ativo) {
        let indice = this.consultarIndiceTesouro(id_ativo);
        if (indice != -1) {
            for (var i = indice; i < this._homeBrokerTesouro.length; i++) {
                this._homeBrokerTesouro[i] = this._homeBrokerTesouro[i + 1];
            }
            this._homeBrokerTesouro.pop();
        }
    }
    listarContas() {
        let listaStringContas = '';
        for (let i = 0; i < this._contas.length; i++) {
            listaStringContas = listaStringContas +
                ' ID: ' + this._contas[i].id +
                ' - Nome: ' + this._contas[i].nome +
                ' - Saldo: ' + this._contas[i].saldo + '\n';
        }
        return listaStringContas;
    }
    listarAtivos() {
        let listaStringAcoes = '\nAÇÕES:\n';
        let listaStringTesouro = '\nTESOURO:\n';
        for (let i = 0; i < this._homeBroker.length; i++) {
            listaStringAcoes = listaStringAcoes +
                ' - ID: ' + this._homeBroker[i].id +
                ' - Empresa: ' + this._homeBroker[i].nome_ativo +
                ' - Ticket: ' + this._homeBroker[i].ticket +
                ' - Valor: ' + this._homeBroker[i].valor_ativo + '\n';
        }
        for (let i = 0; i < this._homeBrokerTesouro.length; i++) {
            listaStringTesouro = listaStringTesouro +
                ' - ID: ' + this._homeBrokerTesouro[i].id +
                ' - Tesouro: ' + this._homeBrokerTesouro[i].nome_ativo +
                ' - Valor: ' + this._homeBrokerTesouro[i].valor_ativo +
                ' - Vencimento: ' + this._homeBrokerTesouro[i].data_vencimento +
                ' - Rentabilidade Anual: ' + this._homeBrokerTesouro[i].rentabilidade_anual + '\n';
        }
        return listaStringAcoes + listaStringTesouro;
    }
    atualizarBancoDeDados() {
        let listaStrings = '';
        let listaStringsContas = '';
        for (let i = 0; i < this._homeBroker.length; i++) {
            listaStrings = listaStrings + this._homeBroker[i].id + ';A;' + this._homeBroker[i].nome_ativo + ';' + this._homeBroker[i].ticket + ';' + this._homeBroker[i].valor_ativo + '\n';
        }
        for (let i = 0; i < this._homeBrokerTesouro.length; i++) {
            listaStrings = listaStrings + this._homeBrokerTesouro[i].id + ';T;' + this._homeBrokerTesouro[i].nome_ativo + ';' + this._homeBrokerTesouro[i].valor_ativo + ';' + this._homeBrokerTesouro[i].data_vencimento + ';' + this._homeBrokerTesouro[i].rentabilidade_anual + '\n';
        }
        var ativos = require('fs');
        ativos.writeFile('ativos.txt', listaStrings, function (err) {
            if (err)
                throw err;
        });
        for (let i = 0; i < this._contas.length; i++) {
            listaStringsContas = listaStringsContas + this._contas[i].id + ';' + this._contas[i].nome + ';' + this._contas[i].saldo + ';' + this._contas[i].senha + '\n';
        }
        var contas = require('fs');
        contas.writeFile('contas.txt', listaStringsContas, function (err) {
            if (err)
                throw err;
        });
    }
}
exports.Corretora = Corretora;
