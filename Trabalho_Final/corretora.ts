import { Acao } from "./Acao";
import {AcaoInexistenteError} from "./Erros"; 
class Corretora {
    private _homeBroker: Acao[] = [];
    private _contas: Conta[] = [];

    cadastrarAcao(acao: Acao) {
        try {
            this.consultarAcaoTicket(acao.ticket);
        } catch (e: any) {
            if (e instanceof AcaoInexistenteError) {
                this._homeBroker.push(acao)
            } else {
                console.log("Ação já existe.")
            }
        }
    }

    editarNomeAcao(ticket: string, novoNome: string): void {
        this.consultarAcaoTicket(ticket).nome = novoNome;
    }

    editarPrecoAcao(ticket: string, novoPreco: number): void {
        this.consultarAcaoTicket(ticket).valor = novoPreco;
    }

    editarTicketAcao(ticket: string, novoTicket: string): void {
        this.consultarAcaoTicket(ticket).ticket = novoTicket;
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

    consultarAcaoTicket(ticket: string): Acao {
        let acaoProcurada!: Acao;
        for (let i = 0; i < this._homeBroker.length; i++) {
            if (this._homeBroker[i].ticket == ticket) {
                acaoProcurada = this._homeBroker[i];
            }
        }
        if (!acaoProcurada) {
            throw new AcaoInexistenteError("Ação inexistente, verifique o numero informado.")
        }
        return acaoProcurada;
    }

    consultarIndiceAcao(ticket: string): number {
        let indiceProcurado: number = -1;
        for (let i = 0; i < this._homeBroker.length; i++) {
            if (this._homeBroker[i].ticket == ticket) {
                indiceProcurado = i;
            }
        }
        if (indiceProcurado == -1) {
            throw new AcaoInexistenteError("Ação Inexistente, Verifique o Ticket Informado.")
        }
        return indiceProcurado;
    }

    excluirAcao(ticket: string): void {
        let indice: number = this.consultarIndiceAcao(ticket);
        if (indice != -1) {
            for (var i = indice; i < this._homeBroker.length; i++) {
                this._homeBroker[i] = this._homeBroker[i + 1];
            }
            this._homeBroker.pop();
        }
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

    listarAcoes(): string {
        let listaStrings = '';
        for(let i: number = 0; i < this._homeBroker.length; i++) {
            listaStrings = listaStrings + 
                           ' ID: ' + this._homeBroker[i].id +  
                           ' - Empresa: ' + this._homeBroker[i].nome +  
                           ' - Ticket: ' + this._homeBroker[i].ticket +  
                           ' - Valor: '  + this._homeBroker[i].valor + '\n';                 
        }   
        return listaStrings;
    }

    atualizarBancoDeDados(): void {
        let listaStrings = '';
        for(let i: number = 0; i < this._homeBroker.length; i++) {
            listaStrings = listaStrings + this._homeBroker[i].nome + ';' + this._homeBroker[i].ticket +  ';'  + this._homeBroker[i].valor + '\n';                 
        }   
        var banco = require('fs');
        banco.writeFile('bd.txt', listaStrings, function (err) {
            if (err) throw err;
            console.log('Banco de Dados Atualizado!');
        });    
    }

}

export {Corretora};

// let a01: Acao = new Acao('1', 'Itaú', 19.90, 'ITUB4');
// let corretora: Corretora = new Corretora();
// corretora.adicionarAcao(a01);
// console.log(corretora.consultarAcao('1'));
