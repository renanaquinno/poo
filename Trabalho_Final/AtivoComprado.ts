class AtivoComprado {
    nome_conta: string;
    nome_ativo: string;
    quantidade: number;

    constructor(nome_conta: string, nome_ativo:string, quantidade: number){
        this.nome_conta = nome_conta;
        this.nome_ativo = nome_ativo;
        this.quantidade = quantidade;
    }
}

export {AtivoComprado};