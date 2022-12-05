class Corretora {
    private _homeBroker: Acao[] = [];
    private _contas: Conta[] = [];

    adicionarAcao(acao: Acao) {
        try {
            this.consultarAcao(acao.id);
        } catch (e: any) {
            if (e instanceof AcaoInexistenteError) {
                this._homeBroker.push(acao)
            } else {
                console.log("Ação já existe.")
            }
        }
    }

    comprarAcao(id_conta : string, acao: [string, string, number]){
        let indice = this.consultarIndiceConta(id_conta);
        let valor_acao = this.consultarValorAcao(acao[0]);
        
        let qtd_acoes = (parseFloat(acao[1]) / valor_acao.valor);        
        acao[2] = (qtd_acoes);
        if (indice != -1) {
            this._contas[indice].comprarAcao(acao);
        }
    }

    venderAcao(id_conta : string, acao: [string, string,number]){
        let indice: number = this.consultarIndiceConta(id_conta);
        if (indice != -1) {
            for (var i = indice; i < this._contas.length; i++) {
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
            this._contas[indice].venderAcao(acao);
        }
    }
    
    consultarIndiceConta(id_conta: string): number {
        let indiceProcurado: number = -1;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].id == id_conta) {
                indiceProcurado = i;
            }
        }
        return indiceProcurado;
    }

       
    consultarConta(id_conta: string): Conta {
        let contaProcurada!: Conta;

        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].id == id_conta) {
                contaProcurada = this._contas[i];
            }
        }
        return contaProcurada;
    }

    consultarAcao(id: string): Acao {
        let acaoProcurada!: Acao;
        for (let i = 0; i < this._homeBroker.length; i++) {
            if (this._homeBroker[i].id == id) {
                acaoProcurada = this._homeBroker[i];
            }
        }
        if (!acaoProcurada) {
            throw new AcaoInexistenteError("Ação inexistente, verifique o numero informado.")
        }
        return acaoProcurada;
    }


    consultarValorAcao(id: string): Acao {
        let acaoProcurada!: Acao;
        for (let i = 0; i < this._homeBroker.length; i++) {
            if (this._homeBroker[i].id == id) {
                acaoProcurada = this._homeBroker[i];
            }
        }
        if (!acaoProcurada) {
            throw new AcaoInexistenteError("Ação inexistente, verifique o numero informado.")
        }
        return acaoProcurada;
    }
}

export {Corretora};

// interface Transacao {
//     operacao(id_acionista: number,cod_acao: string, qtd: number, operacao: number): void;
// }