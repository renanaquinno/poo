class Acao {
    id: string;
    nome: string;
    ticket: string;
    cotacao: number;
    
    constructor (id: string, nome: string, ticket: string, cotacao: number){
        this.id = id;
        this.nome = nome;
        this.ticket = ticket;
        this.cotacao = cotacao;
    }
}