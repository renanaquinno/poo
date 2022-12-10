abstract class Investimento {
    id: string;
    nome_ativo: string;
    valor_ativo: number;

    constructor(id:string, nome_ativo: string, valor_ativo: number) {
        this.id = id;
        this.nome_ativo = nome_ativo;
        this.valor_ativo = valor_ativo;
    }
}

export {Investimento};