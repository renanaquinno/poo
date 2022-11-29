class Conta {
    private _id: number;
    private _saldo: number;
    private _ativos: [] =  [];

    constructor(_id: number, _saldo: number) {
        this._id = _id;
        this._saldo = _saldo;
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
        } else {
            //let qtd = (valor_ordem/cotacao);
            //let acao: [string, number] = [cod_acao,qtd];

            //this._ativos.push(acao);
            this._saldo -= valor_ordem;
        }

    }
}