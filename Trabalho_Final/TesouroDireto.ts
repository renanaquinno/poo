import { Investimento } from "./Investimento";
class TesouroDireto extends Investimento {
    data_vencimento: string;
    rentabilidade_anual: string;

    constructor(id: string, nome_ativo: string, valor_ativo: number, data_vencimento: string, taxaRetorno: string) {
        super(id, nome_ativo, valor_ativo);
        this.data_vencimento = data_vencimento;
        this.rentabilidade_anual = taxaRetorno;
    }
}

export {TesouroDireto};