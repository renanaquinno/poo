"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultadoBatalha = exports.CenarioDeBatalha = exports.BaseMilitar = exports.Guerreiro = void 0;
class JaEliminadoException extends Error {
    constructor(mensagem) {
        super(mensagem);
    }
}
class Guerreiro {
    constructor(_id, _descricao, _forcaDeAtaque, _life = 10) {
        this._id = _id;
        this._descricao = _descricao;
        this._forcaDeAtaque = _forcaDeAtaque;
        this._life = _life;
    }
    estaEliminado() {
        return this._life <= 0;
    }
    defenderAtaque(valorAtaque) {
        this._life = this._life - valorAtaque;
    }
    atacar(defensivel) {
        if (defensivel.estaEliminado()) {
            throw new JaEliminadoException('Já eliminado');
        }
        defensivel.defenderAtaque(this._forcaDeAtaque);
    }
}
exports.Guerreiro = Guerreiro;
class BaseMilitar {
    constructor(_id, _x, _y, _percentualDeDanos = 0) {
        this._id = _id;
        this._x = _x;
        this._y = _y;
        this._percentualDeDanos = _percentualDeDanos;
    }
    estaEliminado() {
        return this._percentualDeDanos >= 90;
    }
    defenderAtaque(valorAtaque) {
        this._percentualDeDanos = this._percentualDeDanos + valorAtaque;
    }
}
exports.BaseMilitar = BaseMilitar;
var ResultadoBatalha;
(function (ResultadoBatalha) {
    ResultadoBatalha["EXERCITO1"] = "Ex\u00E9rcito 01";
    ResultadoBatalha["EXERCITO2"] = "Ex\u00E9rcito 02";
    ResultadoBatalha["EMPATE"] = "Empate";
})(ResultadoBatalha || (ResultadoBatalha = {}));
exports.ResultadoBatalha = ResultadoBatalha;
class CenarioDeBatalha {
    avaliar(exercito1, exercito2) {
        let totalEliminados1 = 0;
        for (let i = 0; i < exercito1.length; i++) {
            if (exercito1[i].estaEliminado()) {
                totalEliminados1++;
            }
        }
        let totalEliminados2 = 0;
        for (let i = 0; i < exercito2.length; i++) {
            if (exercito2[i].estaEliminado()) {
                totalEliminados2++;
            }
        }
        let resultado;
        if (totalEliminados1 < totalEliminados2) {
            resultado = ResultadoBatalha.EXERCITO1;
        }
        else if (totalEliminados1 > totalEliminados2) {
            resultado = ResultadoBatalha.EXERCITO2;
        }
        else {
            resultado = ResultadoBatalha.EMPATE;
        }
        return resultado;
    }
}
exports.CenarioDeBatalha = CenarioDeBatalha;
