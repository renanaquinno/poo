/*7. Refaça a questão 04 do exercício usando interfaces com os métodos propostos em vez de herança. 
Crie também uma classe de teste que instancie e teste diferentes formas geométricas.*/
/*7. Refaça a questão 04 do exercício usando interfaces com os métodos propostos em vez de herança. 
Crie também uma classe de teste que instancie e teste diferentes formas geométricas.*/

interface FiguraGeometrica {
    a?: number;
    b?: number;
    c?: number;
    calcularArea(a?: number,b?: number,c?: number): number;
    calcularPerimetro(a?: number,b?: number,c?: number): number;
    comparar(figura: FiguraGeometrica): number;

}    

class Quadrado implements FiguraGeometrica {
    a: number;

    constructor(a:number){
        this.a = a;
    }

    calcularArea(a: number): number{
        return (a*a);
    };

    calcularPerimetro(a: number): number{
        return (4*a);
    };

    comparar(figura: FiguraGeometrica) : number{
        let areaFigura = figura.calcularArea();
        let thisarea = this.calcularArea(this.a);
        
        if (areaFigura < thisarea){
            return -1;
        } else if (areaFigura == thisarea){
            return 0;
        } else {
            return 1;
        }
    }
}

class Retangulo implements FiguraGeometrica {
    a: number;
    b: number;
    
    constructor(a:number, b: number){
        this.a = a;
        this.b = b;
    }

    calcularArea(a: number,b: number): number{
        return (a*b);
    };

    calcularPerimetro(a: number,b: number): number{
        return ((2*a) + (2*b));
    };

    comparar(figura: FiguraGeometrica) : number{
        let areaFigura = figura.calcularArea();
        let thisarea = this.calcularArea(this.a, this.b);


        if (areaFigura < thisarea){
            return -1;
        } else if (areaFigura == thisarea){
            return 0;
        } else {
            return 1;
        }
    }
}

class Triangulo implements FiguraGeometrica {
    a: number;
    b: number;

    constructor(a:number, b: number){
        this.a = a;
        this.b = b;
    }

    calcularArea(a: number,b: number): number{
        return (a*b)/2;
    };

    calcularPerimetro(a: number): number{
        return (3*a);
    };

    comparar(figura: FiguraGeometrica) : number{
        let areaFigura = figura.calcularArea();
        let thisarea = this.calcularArea(this.a, this.b);
        
        if (areaFigura < thisarea){
            return -1;
        } else if (areaFigura == thisarea){
            return 0;
        } else {
            return 1;
        }
    }
}

let q1 = new Quadrado(4);
console.log(q1.calcularArea(4));
console.log(q1.calcularPerimetro(4));

let r1 = new Retangulo(4,3);
console.log(r1.calcularArea(4,3));
console.log(r1.calcularPerimetro(4,3));

console.log(q1.comparar(r1));
console.log(r1.comparar(q1));