class Acionista {
    private _id: number;
    private _saldo: number;
    private _nome: string;
    //private _ativos: Acoes[] = [];

    constructor(_id: number, _nome: string, _saldo: number) {
        this._id = _id;
        this._nome = _nome;
        this._saldo = _saldo;
    }

    public get saldo(): number {
        return this._saldo;
    }

    public get id(): number {
        return this._id;
    }
}