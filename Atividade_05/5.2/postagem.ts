class Postagem {
    id: number;
    qtdLikes: number;
    texto: string;

    constructor (id: number,  qtdLikes: number, texto :string){
        this.id = id;
        this.qtdLikes = qtdLikes;
        this.texto = texto;
    }

    curtir() {
        this.qtdLikes++;
    }

    toString(): string {
        return `Texto: ${this.texto} \n Quantidade de Curtidas: ${this.qtdLikes}`
    }
}

class Microblog {
    postagens: Postagem[] = [];
    
    inserir(postagem: Postagem) {
        this.postagens.push(postagem);
        return true; 
    }

    excluir(id: number): void {
        let indice: number = this.consultarIndice(id);
        if (indice != -1) {
            for (let i: number = indice; i < this.postagens.length; i++) {
                this.postagens[i] = this.postagens[i + 1];
            }
            this.postagens.pop();
        }
    }

    maisCurtida(){
        let maisCurtida: number = 0;
        let maisCurtidaId: number = 0;
        this.postagens.forEach(element => {
            if (element.qtdLikes > maisCurtida){
                maisCurtida = element.qtdLikes;
                maisCurtidaId = element.id;
            }
        });
        return maisCurtidaId;
    }

    toString(){
        let texto: string = '';
        this.postagens.forEach(element => {
           texto.concat(element.toString());
           texto += '\n';
        });
        return texto;
    }
    
    consultarIndice(id: number): number {
        let indice: number = -1;
        for (let i: number = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id == id) {
                indice = i;
                break;
            }
        }
        return indice;
    }

}