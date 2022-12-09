import { Investimento } from "./Investimento";
class TesouroDireto extends Investimento {
    private _vencimento: string;
    private _taxaRetorno: string;

    constructor(id: string, nome: string, valor: number, vencimento: string, taxaRetorno: string) {
        super(id, nome, valor);
        this._vencimento = vencimento;
        this._taxaRetorno = taxaRetorno;
    }

}
