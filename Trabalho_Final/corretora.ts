import { Acao } from "./Acao";
import {AcaoInexistenteError} from "./Erros"; 
import { TesouroDireto } from "./TesouroDireto";
class Corretora {
    private _homeBroker: Acao[] = [];
    private _homeBrokerTesouro: TesouroDireto[] = [];
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

    cadastrarTesouro(tesouro: TesouroDireto) {
        try {
            this.consultarAcaoTicket(tesouro.nome);
        } catch (e: any) {
            if (e instanceof AcaoInexistenteError) {
                this._homeBrokerTesouro.push(tesouro)
            } else {
                console.log("Tesouro já existe.")
            }
        }
    }

    editarNomeAcao(ticket: string, novoNome: string): void {
        this.consultarAcaoTicket(ticket).nome_ativo = novoNome;
    }

    editarPrecoAcao(ticket: string, novoPreco: number): void {
        this.consultarAcaoTicket(ticket).valor_ativo = novoPreco;
    }

    editarTicketAcao(ticket: string, novoTicket: string): void {
        this.consultarAcaoTicket(ticket).ticket = novoTicket;
    }


    editarNomeTesouro(nome: string, novo_nome: string): void {
        this.consultarTesouroNome(nome).nome_ativo = novo_nome;
    }

    editarValorTesouro(nome: string, novo_valor: number): void {
        this.consultarTesouroNome(nome).valor_ativo = novo_valor;
    }

    editarVencimentoTesouro(nome: string, novo_vencimento: string): void {
        this.consultarTesouroNome(nome).data_vencimento = novo_vencimento;
    }

    editarRentabilidadeTesouro(nome: string, nova_renatabilidade_anual: string): void {
        this.consultarTesouroNome(nome).rentabilidade_anual = nova_renatabilidade_anual;
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

    consultarTesouroNome(nome: string): TesouroDireto {
        let tesouroProcurado!: TesouroDireto;
        for (let i = 0; i < this._homeBrokerTesouro.length; i++) {
            if (this._homeBrokerTesouro[i].nome_ativo == nome) {
                tesouroProcurado = this._homeBrokerTesouro[i];
            }
        }
        if (!tesouroProcurado) {
            throw new AcaoInexistenteError("Tesouro inexistente, verifique o nome informado.")
        }
        return tesouroProcurado;
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

    consultarIndiceTesouro(nome_ativo: string): number {
        let indiceProcurado: number = -1;
        for (let i = 0; i < this._homeBrokerTesouro.length; i++) {
            if (this._homeBrokerTesouro[i].nome_ativo == nome_ativo) {
                indiceProcurado = i;
            }
        }
        if (indiceProcurado == -1) {
            throw new AcaoInexistenteError("Tesouro Inexistente, Verifique o Nome Informado.")
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
    excluirTesouro(nome: string): void {
        let indice: number = this.consultarIndiceTesouro(nome);
        if (indice != -1) {
            for (var i = indice; i < this._homeBrokerTesouro.length; i++) {
                this._homeBrokerTesouro[i] = this._homeBrokerTesouro[i + 1];
            }
            this._homeBrokerTesouro.pop();
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
        
        let qtd_acoes = (parseFloat(acao[1]) / valor_acao.valor_ativo);        
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

    listarAtivos(): string {
        let listaStringAcoes = 'AÇÕES \n';
        let listaStringTesouro = 'TESOURO \n';
        for(let i: number = 0; i < this._homeBroker.length; i++) {
            listaStringAcoes = listaStringAcoes + 
                           ' ID: ' + this._homeBroker[i].id +  
                           ' - Empresa: ' + this._homeBroker[i].nome_ativo +  
                           ' - Ticket: ' + this._homeBroker[i].ticket +  
                           ' - Valor: '  + this._homeBroker[i].valor_ativo + '\n';                 
        }   
        for(let i: number = 0; i < this._homeBrokerTesouro.length; i++) {
            listaStringTesouro = listaStringTesouro + 
                           ' ID: ' + this._homeBrokerTesouro[i].id +  
                           ' - Tesouro: ' + this._homeBrokerTesouro[i].nome_ativo +  
                           ' - Valor: ' + this._homeBrokerTesouro[i].valor_ativo +  
                           ' - Vencimento: ' + this._homeBrokerTesouro[i].data_vencimento +  
                           ' - Rentabilidade Anual: '  + this._homeBrokerTesouro[i].rentabilidade_anual + '\n';                 
        }   
        return listaStringAcoes + listaStringTesouro;
    }

    atualizarBancoDeDados(): void {
        let listaStrings = '';
        
        for(let i: number = 0; i < this._homeBroker.length; i++) {
            listaStrings = listaStrings + 'a;' + this._homeBroker[i].nome_ativo + ';' + this._homeBroker[i].ticket +  ';'  + this._homeBroker[i].valor_ativo + '\n';                 
        }   
        
        for(let i: number = 0; i < this._homeBrokerTesouro.length; i++) {
            listaStrings = listaStrings + 't;' + this._homeBrokerTesouro[i].nome_ativo + ';' + this._homeBrokerTesouro[i].valor_ativo +  ';'  + this._homeBrokerTesouro[i].data_vencimento + ';' + this._homeBrokerTesouro[i].rentabilidade_anual + '\n';                 
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
