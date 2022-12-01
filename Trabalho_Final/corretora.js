"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Corretora = void 0;
class Corretora {
    constructor() {
        this._homeBroker = [];
        this._contas = [];
    }
    adicionarAcao(acao) {
        try {
            this.consultarAcao(acao.id);
        }
        catch (e) {
            if (e instanceof AcaoInexistenteError) {
                this._homeBroker.push(acao);
            }
            else {
                console.log("Ação já existe.");
            }
        }
    }
    comprarAcao(id_conta, acao) {
        let indice = this.consultarConta(id_conta);
        let valor_acao = this.consultarValorAcao(acao[0]);
        let qtd_acoes = (parseFloat(acao[1]) / valor_acao.valor);
        acao[2] = (qtd_acoes);
        if (indice != -1) {
            this._contas[indice].comprarAcao(acao);
        }
    }
    venderAcao(id_conta, acao) {
        let indice = this.consultarConta(id_conta);
        if (indice != -1) {
            for (var i = indice; i < this._contas.length; i++) {
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
            this._contas[indice].venderAcao(acao);
        }
    }
    consultarConta(id_conta) {
        let indiceProcurado = -1;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].id == id_conta) {
                indiceProcurado = i;
            }
        }
        return indiceProcurado;
    }
    consultarAcao(id) {
        let acaoProcurada;
        for (let i = 0; i < this._homeBroker.length; i++) {
            if (this._homeBroker[i].id == id) {
                acaoProcurada = this._homeBroker[i];
            }
        }
        if (!acaoProcurada) {
            throw new AcaoInexistenteError("Ação inexistente, verifique o numero informado.");
        }
        return acaoProcurada;
    }
    consultarValorAcao(id) {
        let acaoProcurada;
        for (let i = 0; i < this._homeBroker.length; i++) {
            if (this._homeBroker[i].id == id) {
                acaoProcurada = this._homeBroker[i];
            }
        }
        if (!acaoProcurada) {
            throw new AcaoInexistenteError("Ação inexistente, verifique o numero informado.");
        }
        return acaoProcurada;
    }
}
exports.Corretora = Corretora;
// interface Transacao {
//     operacao(id_acionista: number,cod_acao: string, qtd: number, operacao: number): void;
// }
