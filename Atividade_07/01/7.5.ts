
class Produto {
    private _identificador: number;
    private _descricao: string;
    private _quantidade: number;
    private _valorUnitario: number;

    constructor(private identificador: number, descricao: string, quantidade: number, valorUnitario: number) {
        this._identificador = identificador;
        this._descricao = descricao;
        this._quantidade = quantidade;
        this._valorUnitario = valorUnitario;
    }

    repor(qtd: number) {
        this._quantidade += qtd;
    }

    baixar(qtd: number) {
        this._quantidade -= qtd;
    }

    get produtoIdentificador(): number {
        return this._identificador
    }



}

class ProdutoPerecivel extends Produto {

    dataValidade: Date;

    constructor(identificador: number, descricao: string, quantidade: number, valorUnitario: number, dataValidade: Date) {
        super(identificador, descricao, quantidade, valorUnitario);
        this.dataValidade = dataValidade;
    }

    validade(identificador: number) {
        const time = Date.now();
        const hoje = new Date(time);   

        if (this.dataValidade > hoje){
            return true;
        } else {
            return false;
        }
    }
}

class Estoque {

    private produtos: ProdutoPerecivel[] = [];
    

    inserir(produto: ProdutoPerecivel) {
        if (this.produtos.includes(produto)) {
            return false;
        } else {
            this.produtos.push(produto);
            return true;
        }
    }

    consultar(identificador: number): ProdutoPerecivel {
        let produtoProcurado!: ProdutoPerecivel;
        for (let produto of this.produtos) {
            if (produto.produtoIdentificador == identificador) {
                produtoProcurado = produto;
                break;
            }
        }
        return produtoProcurado;
    }

    excluir(identificador: number): void {
        let indice: number = this.consultarIndice(identificador);
        if (indice != -1) {
            for (let i: number = indice; i < this.produtos.length; i++) {
                this.produtos[i] = this.produtos[i + 1];
            }
            this.produtos.pop();
        }
    }

    repor(identificador: number, quantidade: number) {
        let produto: ProdutoPerecivel = this.consultar(identificador);
        if (produto != null) {
            produto.repor(quantidade);
        }
    }

    baixa(identificador: number, quantidade: number) {
        let produto: ProdutoPerecivel = this.consultar(identificador);
        if (produto != null) {
            produto.repor(quantidade);
        }
    }

    consultarIndice(identificador: number): number {
        let indice: number = -1;
        for (let i: number = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].produtoIdentificador == identificador) {
                indice = i;
                break;
            }
        }
        return indice;
    }

    todosVencidos() {
        let total: Array<number> = [];

        for (let produto of this.produtos) {
            if (produto.validade(produto.produtoIdentificador)) {
                total.push(produto.produtoIdentificador);
            }
        }

        return total;
    }
}