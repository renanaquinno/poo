interface Defensivel {
    estaEliminado(): boolean;
    defenderAtaque(valorAtaque: number): void;
}

class JaEliminadoException extends Error {
    constructor(mensagem: string) {
        super(mensagem);
    }
}

class Guerreiro implements Defensivel {
    constructor(
        private _id: number, 
        private _descricao: string, 
        private _forcaDeAtaque: number, 
        private _life: number = 10 ) {}    
    
    estaEliminado(): boolean {
        return this._life <= 0;
    }
    
    defenderAtaque(valorAtaque: number): void {
        this._life = this._life - valorAtaque;
    }

    atacar(defensivel: Defensivel): void {
        if (defensivel.estaEliminado()) {
            throw new JaEliminadoException('Já eliminado');
        }

        defensivel.defenderAtaque(this._forcaDeAtaque);
    }
}

class BaseMilitar implements Defensivel {
    constructor(
        private _id: number,
        private _x: number,
        private _y: number,
        private _percentualDeDanos: number = 0
    ){}

    estaEliminado(): boolean {
        return this._percentualDeDanos >= 90;
    }

    defenderAtaque(valorAtaque: number): void {
        this._percentualDeDanos = this._percentualDeDanos + valorAtaque;
    }
}

enum ResultadoBatalha {
    EXERCITO1 = "Exército 01",
    EXERCITO2 = "Exército 02", 
    EMPATE = "Empate"
}

type ResultadoBatalha2 = "Exercito 01" | "Exército 02" | "Empate";

class CenarioDeBatalha {
    avaliar(exercito1: Defensivel[], exercito2: Defensivel[]): ResultadoBatalha {
        let totalEliminados1: number = 0;
        for (let i = 0; i < exercito1.length; i++) {
            if (exercito1[i].estaEliminado()) {
                totalEliminados1++
            }
        }

        let totalEliminados2: number = 0;
        for (let i = 0; i < exercito2.length; i++) {
            if (exercito2[i].estaEliminado()) {
                totalEliminados2++
            }
        }

        let resultado: ResultadoBatalha;
        if (totalEliminados1 < totalEliminados2) {
            resultado = ResultadoBatalha.EXERCITO1;
        } else if (totalEliminados1 > totalEliminados2) {
            resultado = ResultadoBatalha.EXERCITO2;
        } else {
            resultado = ResultadoBatalha.EMPATE;
        }

        return resultado;
    }
}

export {Guerreiro, BaseMilitar, CenarioDeBatalha, ResultadoBatalha, Defensivel}