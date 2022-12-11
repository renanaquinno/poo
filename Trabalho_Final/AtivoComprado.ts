class AtivoComprado {
    nome_conta: string;
    nome_ativo: string;
    quantidade: number;
    tipo_ativo: string;

    constructor(nome_conta: string, nome_ativo:string, quantidade: number,tipo_ativo: string){
        this.nome_conta = nome_conta;
        this.nome_ativo = nome_ativo;
        this.quantidade = quantidade;
        this.tipo_ativo = tipo_ativo;
    }
}

export {AtivoComprado};