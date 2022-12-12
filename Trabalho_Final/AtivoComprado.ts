class AtivoComprado {
    id: string;
    nome_conta: string;
    nome_empresa: string;
    quantidade: number;
    tipo_ativo: string;

    constructor(id: string, nome_conta: string, nome_empresa:string, quantidade: number,tipo_ativo: string){
        this.id = id;
        this.nome_conta = nome_conta;
        this.nome_empresa = nome_empresa;
        this.quantidade = quantidade;
        this.tipo_ativo = tipo_ativo;
    }
}

export {AtivoComprado};