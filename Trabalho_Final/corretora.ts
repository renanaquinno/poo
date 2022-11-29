class Corretora implements Transacao {
    
    private _homeBroker: Acoes[] = [];

    public adicionarAtivo(ativo:Acoes) : void{
        this._homeBroker.push(ativo);
    }

    operacao(id_acionista: number, cod_acao: string, qtd: number, operacao: number): void{
        switch(operacao){
            case 1:
                
                break;
            case 2:
                compra(id_acionista: number,cod_acao: string, qtd: number);
                break
            default:
                break;
        }
    }

}

interface Transacao {
    operacao(id_acionista: number,cod_acao: string, qtd: number, operacao: number): void;
}