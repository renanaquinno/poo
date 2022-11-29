class Conta {
    private _id: number;
    private _saldo: number;
    private _ativos: [] = [];

    constructor(id: number, saldo: number, ativos : []) {
        this._id = id;
        this._ativos = ativos;
        if (saldo < 0){
            this.validarValor(saldo);
        } 
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

    public get id(): number {
        return this._id;
    }

    public comprar(cod_acao: string, valor_ordem: number): void {
        if (this._saldo <= valor_ordem) {
            throw new Error("Saldo Insuficiente");
        } else if (valor_ordem < 0){
            throw new Error("Valor precisa ser maior que 0");
        }
        
        //let qtd = (valor_ordem/cotacao);
        //let acao: [string, number] = [cod_acao,qtd];
        //this._ativos.push(acao);
        this._saldo -= valor_ordem;
    }

    public vender(cod_acao: string, valor_ordem: number): void {
        if (valor_ordem < 0){
            throw new Error("Valor precisa ser maior que 0");
        }
        
        //let qtd = (valor_ordem/cotacao);
        //let acao: [string, number] = [cod_acao,qtd];
        //this._ativos.push(acao);
        this._saldo += valor_ordem;
    }

}