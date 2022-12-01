class Conta {
    id: string;
    private _saldo: number;
    private _ativos: [string, string,number] = ['','',0];

    constructor(id: string, saldo: number, ativos : [string, string, number]) {
        this.id = id;
        this._ativos = ativos;
        this._saldo = saldo;
    }

    private validarValor(valor: number): void{
        if (valor <= 0){
            throw new ValorInvalidoError("Valor precisa ser maior que R$ 0,00.")
        }
    }

    public get saldo(): number {
        return this._saldo;
    }


    public comprarAcao(acao: [string, string, number]): void {
        if (this._saldo <= parseFloat(acao[1])) {
            throw new Error("Saldo Insuficiente");
        } else if (parseFloat(acao[1]) < 0){
            throw new Error("Valor precisa ser maior que 0");
        }
        
        this._ativos.push(acao[0],acao[1],acao[2]); //CORRIGIR, PASSAR QUANTIDADE
        this._saldo -= parseFloat(acao[1]);
    }

    public venderAcao(acao: [string, string]): void {
        if (parseFloat(acao[1]) < 0){           
            throw new Error("Valor precisa ser maior que 0");
        }
        this._saldo += parseFloat(acao[1]);
    }

}