import { Acao } from "./Acao";
import { AcaoInexistenteError } from "./Erros";
import { TesouroDireto } from "./TesouroDireto";
import { Conta, Investidor } from "./Conta";
import { AtivoComprado } from "./AtivoComprado";

class Corretora {
    private _homeBroker: Acao[] = [];
    private _homeBrokerTesouro: TesouroDireto[] = [];
    private _contas: Investidor[] = [];

    //////////////////// FUNÇÕES DE ATIVOS CORRETORA ////////////////////
    fazerLogin(nome: string, senha: string){
        let conta_procurada!: Investidor;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].nome == nome && this._contas[i].senha == senha) {
                conta_procurada = this._contas[i];
            }
        }
        if (!conta_procurada) {
            throw new AcaoInexistenteError("Erro de Login.")
        }
        return conta_procurada;
    }

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
            this.consultarAcaoTicket(tesouro.nome_ativo);
        } catch (e: any) {
            if (e instanceof AcaoInexistenteError) {
                this._homeBrokerTesouro.push(tesouro)
            } else {
                console.log("Tesouro já existe.")
            }
        }
    }

    cadastrarConta(conta: Investidor) {
        try {
            this.consultarAcaoTicket(conta.nome);
        } catch (e: any) {
            if (e instanceof AcaoInexistenteError) {
                this._contas.push(conta)
            } else {
                console.log("Conta já existe.")
            }
        }
    }

    //////////////////// FUNÇÕES DE AÇÃO CORRETORA ////////////////////
    editarNomeAcao(ticket: string, novoNome: string): void {
        this.consultarAcaoTicket(ticket).nome_ativo = novoNome;
    }

    editarPrecoAcao(ticket: string, novoPreco: number): void {
        this.consultarAcaoTicket(ticket).valor_ativo = novoPreco;
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

    //////////////////// FUNÇÕES DE TESOURO CORRETORA ////////////////////
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

    excluirTesouro(nome: string): void {
        let indice: number = this.consultarIndiceTesouro(nome);
        if (indice != -1) {
            for (var i = indice; i < this._homeBrokerTesouro.length; i++) {
                this._homeBrokerTesouro[i] = this._homeBrokerTesouro[i + 1];
            }
            this._homeBrokerTesouro.pop();
        }
    }


    //////////////////// FUNÇÕES DE ATIVO ////////////////////
    verCarteira(conta: string) {
        let indice = this.consultarIndiceConta(conta);
        this._contas[indice].verCarteira(conta);
    }

    carregarCarteira(conta: string, ativo: AtivoComprado) {
        let indice: number = this.consultarIndiceConta(conta);
        if (ativo.tipo_ativo == 'A'){
            this._contas[indice].carregarAcao(ativo)        
        } else if(ativo.tipo_ativo == 'T'){
            this._contas[indice].carregarTesouro(ativo)        

        }
    }

    //////////////////// FUNÇÕES DE AÇÃO INVESTIDOR ////////////////////
    // comprarAcao(conta: string, acao: AtivoComprado) {
    //     let indice = this.consultarIndiceConta(conta);
    //     let valor_total = this.consultarAcaoTicket(acao.nome_ativo).valor_ativo;
    //     if (indice != -1) {
    //         this._contas[indice].comprarAcao(acao, valor_total);
    //     }
    // }

    venderAcao(conta: string, ativo: AtivoComprado) {
        let indice: number = this.consultarIndiceConta(conta);
        let valor_total = this.consultarAcaoTicket(ativo.nome_ativo).valor_ativo;

        if (indice != -1) {
            this._contas[indice].venderAcao(ativo, valor_total);
        }
    }

    //////////////////// FUNÇÕES DE TESOURO INVESTIDOR ////////////////////
    // comprarTesouro(conta: string, tesouro: AtivoComprado) {
    //     let indice = this.consultarIndiceConta(conta);
    //     let valor_total = this.consultarTesouroNome(tesouro.nome_ativo).valor_ativo;
    //     if (indice != -1) {
    //         this._contas[indice].comprarTesouro(tesouro, valor_total);
    //     }
    // }

    // venderTesouro(conta: string, tesouro: AtivoComprado) {
    //     let indice: number = this.consultarIndiceConta(conta);
    //     let valor_total = this.consultarTesouroNome(tesouro.nome_ativo).valor_ativo;

    //     if (indice != -1) {
    //         this._contas[indice].venderTesouro(tesouro, valor_total);
    //     }
    // }

    // carregarTesouro(conta: string, tesouro: AtivoComprado) {
    //     let indice: number = this.consultarIndiceConta(conta);
    //     this._contas[indice].carregarTesouro(tesouro)
    // }


    ////////////////////////// FUNÇÕES EXTRAS //////////////////////////

    consultarIndiceConta(nome: string): number {
        let indiceProcurado: number = -1;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].nome == nome) {
                indiceProcurado = i;
            }
        }
        if (indiceProcurado == -1) {
            throw new AcaoInexistenteError("Conta Inexistente, Verifique o Nome Informado.")
        }
        return indiceProcurado;
    }


    consultarConta(nome: string): Conta {
        let contaProcurada!: Conta;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].nome == nome) {
                contaProcurada = this._contas[i];
            }
        }
        return contaProcurada;
    }

    listarAtivos(): string {
        let listaStringAcoes = '\nAÇÕES:\n';
        let listaStringTesouro = '\nTESOURO:\n';
        let listaStringContas = '\nCONTAS:\n';

        for (let i: number = 0; i < this._homeBroker.length; i++) {
            listaStringAcoes = listaStringAcoes +
                ' - Empresa: ' + this._homeBroker[i].nome_ativo +
                ' - Ticket: ' + this._homeBroker[i].ticket +
                ' - Valor: ' + this._homeBroker[i].valor_ativo + '\n';
        }

        for (let i: number = 0; i < this._homeBrokerTesouro.length; i++) {
            listaStringTesouro = listaStringTesouro +
                ' - Tesouro: ' + this._homeBrokerTesouro[i].nome_ativo +
                ' - Valor: ' + this._homeBrokerTesouro[i].valor_ativo +
                ' - Vencimento: ' + this._homeBrokerTesouro[i].data_vencimento +
                ' - Rentabilidade Anual: ' + this._homeBrokerTesouro[i].rentabilidade_anual + '\n';
        }

        for (let i: number = 0; i < this._contas.length; i++) {
            listaStringContas = listaStringContas +
                ' Nome: ' + this._contas[i].nome +
                ' - Saldo: ' + this._contas[i].saldo + '\n';
        }

        return listaStringAcoes + listaStringTesouro + listaStringContas;
    }

    atualizarBancoDeDados(): void {
        let listaStrings = '';
        let listaStringsContas = '';

        for (let i: number = 0; i < this._homeBroker.length; i++) {
            listaStrings = listaStrings + 'A;' + this._homeBroker[i].nome_ativo + ';' + this._homeBroker[i].ticket + ';' + this._homeBroker[i].valor_ativo + '\n';
        }

        for (let i: number = 0; i < this._homeBrokerTesouro.length; i++) {
            listaStrings = listaStrings + 'T;' + this._homeBrokerTesouro[i].nome_ativo + ';' + this._homeBrokerTesouro[i].valor_ativo + ';' + this._homeBrokerTesouro[i].data_vencimento + ';' + this._homeBrokerTesouro[i].rentabilidade_anual + '\n';
        }

        var ativos = require('fs');
        ativos.writeFile('ativos.txt', listaStrings, function (err: any) {
            if (err) throw err;
        });



        for (let i: number = 0; i < this._contas.length; i++) {
            listaStringsContas = listaStringsContas + this._contas[i].nome + ';' + this._contas[i].saldo + ';' + this._contas[i].senha + '\n';
        }

        var contas = require('fs');
        contas.writeFile('contas.txt', listaStringsContas, function (err: any) {
            if (err) throw err;
        });
    }
}

export { Corretora };