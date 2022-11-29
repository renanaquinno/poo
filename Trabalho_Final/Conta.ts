class Conta {
    private _id: number;
    private _saldo: number;
    private _ativos: [] = [];

    constructor(_id: number, _saldo: number, _ativos : []) {
        this._id = _id;
        this._saldo = _saldo;
        this._ativos = _ativos;
    }

    public get saldo(): number {
        return this._saldo;
    }

    public get id(): number {
        return this._id;
    }

    public comprar(cod_acao: string, valor_ordem: number): void {
            //this.validarValor(cod_acao);
            if (this._saldo <= valor_ordem) {
                throw new SaldoInsuficienteError("Saldo Insuficiente");
            }
            
            //let qtd = (valor_ordem/cotacao);
            //let acao: [string, number] = [cod_acao,qtd];

            //this._ativos.push(acao);
            this._saldo -= valor_ordem;
    }

}