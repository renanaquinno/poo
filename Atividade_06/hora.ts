class Hora {
    private horas: number;
    private minutos: number;
    private segundos: number;

    constructor(horas: number, minutos: number,segundos: number) {
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
    }

    getHora() : number {
       return this.horas;
    }

    getMinutos() : number {
       return this.minutos;
    }

    getSegundos() : number {
       return this.segundos;
    }
    
    getFull() {
        let hora = this.getHora();
        let minutos = this.getMinutos();
        let segundos = this.getSegundos();
        return `${hora}:${minutos}:${segundos}`;
    }
}

const h = new Hora(10,20,30);
console.log(h.getFull());