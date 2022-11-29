class Corretora implements Transacao {
    
    private _contas: Conta[] = [];

    
    operacao(id_acionista: number, cod_acao: string, qtd: number, operacao: number): void{
        switch(operacao){
            case 1:
                this.venda(id_acionista: number,cod_acao: string, qtd: number);
                break;
            case 2:
                this.compra(id_acionista: number,cod_acao: string, qtd: number);
                break
            default:
                break;
        }
    }

}

interface Transacao {
    operacao(id_acionista: number,cod_acao: string, qtd: number, operacao: number): void;
}