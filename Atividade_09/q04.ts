/*4. Imagine que você deve modelar várias figuras geométricas em TypeScript e que cada uma tem sua forma específica de
calcular área e perímetro. Proponha e implemente uma hierarquia de classes usando uma classe abstrata chamada FiguraGeometrica 
e outras concretas: Quadrado, Triangulo, etc.*/
abstract class FiguraGeometrica {
    a: number;
    b: number;
    c?: number;
    constructor(a:number, b: number, c?: number){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    calcularArea(a: number,b: number,c: number){
        console.log((a*b)/c);
    };
    calcularPerimetro(a: number,b: number,c: number){
        console.log((c*a) + (c*b));
    };
}

class Quadrado extends FiguraGeometrica {
    c: number;

    constructor(a: number, b:number, c:number){
        super(a,b);
        this.c = c;
    }
}

class Retangulo extends FiguraGeometrica {
    c: number;

    constructor(a: number, b:number, c:number){
        super(a,b);
        this.c = c;
    }
}

class Triangulo extends FiguraGeometrica {
    c: number;

    constructor(a: number, b:number, c:number){
        super(a,b);
        this.c = c;
    }
}


let q1 = new Quadrado(4,4,1);
q1.calcularArea(4,4,1);
q1.calcularPerimetro(4,4,2);

let r1 = new Retangulo(4,3,1);
r1.calcularArea(4,3,1);
r1.calcularPerimetro(4,3,2);

let t1 = new Triangulo(4,3,2);
t1.calcularArea(4,3,2);
t1.calcularPerimetro(3,3,3);