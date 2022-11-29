class Corretora {
    private _homeBroker: Acao[] = [];

    adicionarAtivo(ativo: Acao) {
        try {
            this.consultar(ativo.id);
        } catch (e: any) {
            if (e instanceof AcaoInexistenteError) {
                this._homeBroker.push(ativo)
            } else {
                console.log("Conta já existe.")
            }
        }
    }

    consultar(id: string): Acao {
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

// interface Transacao {
//     operacao(id_acionista: number,cod_acao: string, qtd: number, operacao: number): void;
// }