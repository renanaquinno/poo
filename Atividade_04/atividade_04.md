# <center>Exercício 05 - Construtores, inicialização de atributos e objetos x referências </center> 

**1. Suponha uma classe Hotel que sirva apenas para guardar a quantidade de solicitações de reservas feitas conforme abaixo:** 
``` ts
class Hotel {
    quantReservas : number;
    adicionarReserva() : void {
        quantReservas++;
    }
}
```
**Podemos afirmar que haverá um problema de compilação, pois a variável inteira não foi inicializada previamente? Justifique.**

* Resposta: Não, pois foi inicializada como number, dessa forma não há erro.

**2. Ainda sobre a classe do exemplo anterior, considere o código abaixo:**
``` ts
let hotel : Hotel = new Hotel(2);
console.log(hotel.quantReservas);
```
**Adicione o construtor que aceite um parâmetro inteiro e faça a inicialização do atributo quantReservas.**

* Resposta:
``` ts
class Hotel {
    quantReservas : number;
    constructor(quantReservas: number) {
        this.quantReservas = quantReservas;
    }
    adicionarReserva() : void {
        quantReservas++;
    }
}
```

**3. Considere a classe Radio e as instruções que fazem seu uso abaixo:**
``` ts
class Radio {
    volume : number;
    constructor(volume : number) {
        this.volume = volume;
    }
}
let r : Radio = new Radio();
r.volume = 10;
```

**Justifique o erro de compilação e proponha uma solução.**

* Resposta: O erro acontece pois é preciso passar um parametro do valor do volume, para ficar corretamente deveria ser:<br>let r : Radio = new Radio(0);

**4. Considerando o uso da classe Conta apresentada em aula e seu uso abaixo:**
``` ts
let c1: Conta = new Conta("1",100);
let c2: Conta = new Conta("2",100);
let c3: Conta;
c1 = c2;
c3 = c1;
c1.sacar(10);

c1.transferir(c2,50);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
console.log(c3.consultarSaldo());
```

**a. Qual o resultado dos dois "prints"? Justifique sua resposta.**

* Resposta: 90, pois todas as variaveis apontam para o endereço de memoria do mesmo objeto, no fim das contas somente a c2 que foi inciada é realmente usado, fazendo um saque de 10, entao 100-10 = 90 para todas as contas

**b. O que acontece com o objeto para o qual a referência c1 apontava?**
* Resposta: Objeto é apagado da memoria.

**5. Crie uma classe chamada Saudacao que:**
1. Contenha um atributo chamado texto e outro chamado destinatario, ambos String;
2. Crie um construtor que inicializa os dois atributos;
3. Crie um método obterSaudacao() que retorne a concatenação dos doisatributos. Ex: "Bom dia, João";
4. Instancie uma classe Saudacao e teste seu método obterSaudacao().

* Resposta:
``` ts
class Saudacao {
    texto : String;
    destinatario: String;
     constructor(texto : String, destinatario : String) {
        this.texto = texto;
        this.destinatario = destinatario;
    }
    obterSaudacao(texto: String, destinatario:String): String {
        return this.texto  + " " + this.destinatario ;
    }
}

let s: Saudacao = new Saudacao("Bom dia,","Renan");
let s1 = s.obterSaudacao();
console.log(s1); // [LOG]: "Bom dia, Renan" 
```

**6. Crie uma classe chamada Triangulo que:**
1. Possua 3 atributos inteiros representando os lados;
2. Crie um método que retorna true se os lados formarem um triângulo de
acordo com a regra: |b-c| < a < b+c;
3. Crie 3 métodos: ehIsoceles(), ehEquilatero() e ehEscaleto() que retorne
verdadeiro caso o triângulo seja um dos tipos relacionados ao nome do
método. Eles devem chamar antes de tudo, o método da questão b. e
retornar false se esse método já retornar false também;
4. Instancie classes Triangulo de diferentes lados e seus métodos.

* Resposta:
``` ts
class Triangulo {
    la : number;
    lb : number;
    lc : number;
    
    constructor(la : number, lb : number, lc : number) {
        this.la = la;
        this.lb = lb;
        this.lc = lc;
    }

    ehTriangulo(la : number,lb : number,lc : number){
        if ( ((this.lb - this.lc) < this.la) && ((this.lb + this.lc) > this.la)){
            return true;
        } else {
            return false
        }
    }

    ehIsoceles(la : number,lb : number,lc : number) {
        if (this.ehTriangulo(la,lb,lc)){
            if ((this.la == this.lb) || (this.la == this.lc) || (this.lb == this.lc)){
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    ehEquilatero(la : number,lb : number,lc : number) {
         if (this.ehTriangulo(la,lb,lc)){
            if ((this.la == this.lb) && (this.la == this.lc)){
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    ehEscaleto(la : number,lb : number,lc : number) {
         if (this.ehTriangulo(la,lb,lc)){
            if ((this.la != this.lb) && (this.la != this.lc) && (this.lb != this.lc)){
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

let t: Triangulo = new Triangulo(4,2,3);
let t1 = t.ehTriangulo();
let t2 = t.ehIsoceles();
let t3 = t.ehEquilatero();
let t4 = t.ehEscaleto();

console.log(t1);  //[LOG]: true 
console.log(t2);  //[LOG]: false 
console.log(t3);  //[LOG]: false 
console.log(t4);  //[LOG]: true 
```

**7. Uma classe Equipamento com:**
1. um atributo ligado (tipo boolean)
2. dois métodos liga() e desliga(). O método liga torna o atributo ligado true e o método desliga torna o atributo ligado false.
3. Crie um método chamado inverte(), que muda o status atual (se ligado, desliga...se desligado, liga)
4. Crie um método que estaLigado() que retorna o valor do atributo ligado
5. Altere o comportamento dos métodos liga para caso o equipamento já esteja ligado, não ligue novamente. Faça o mesmo com o método desligar.
6. Instancie uma classe Equipamento e teste todos os seus métodos.

``` js
class Equipamento {
    ligado : boolean;
    
    constructor(ligado : boolean) {
        this.ligado = ligado;
    }

    liga(ligado : boolean) {
        if (!this.ligado) {
            return this.ligado = true;
        }
    }

    desliga(ligado : boolean) {
        if (this.ligado) {
            return this.ligado = false;
        }
    }

    inverte(ligado : boolean){
        if (this.ligado) {
            return this.ligado = false;
        } else {
            return this.ligado = true;
        }
    }

    estaLigado(ligado : boolean){
        return this.ligado;
    }
}

let e: Equipamento = new Equipamento(true);
let e1 = e.liga();
let e2 = e.desliga();
let e3 = e.inverte();
let e4 = e.estaLigado();

console.log(e1);
console.log(e2);
console.log(e3);
console.log(e4);
```

**8. Altere a classe conta dos slides conforme as instruções abaixo::**
1. Altere o método sacar de forma que ele retorne verdadeiro ou falso. Caso o saque deixe saldo negativo, o mesmo não será realizado, retornando falso
2. Altere o método transferir() para que retorne também um valor lógico e que não seja feita a transferência caso o sacar() na conta origem não seja satisfeito
3. Verifique as diferentes operações implementadas

``` js
sacar(valor: number): boolean {
    if ((this.saldo - valor) < 0 ){
        return false;
    } else {
        this.saldo = this.saldo - valor;
        return true;
    }
}

transferir(contaDestino: Conta, valor: number) : boolean {
    if (this.sacar(valor)) {
        contaDestino.depositar(valor);
        return true;
    } else {
        return false;
    }
}
```

**9. Crie uma classe chamada Jogador e nela:**
1. Crie 3 atributos inteiros representando força, nível e pontos atuais;
2. Crie um construtor no qual os 3 parâmetros são passados e inicialize os respectivos atributos;
3. Crie um método chamado calcularAtaque. Nele, calcule e retorne o valor da multiplicação de força pelo nível. Esse resultado é o dano de ataque do jogador;
4. Crie um método chamado atacar em que é passado um outro jogador (atacado) como parâmetro. Nele e é feita a subtração do dano (método calcularAtaque) dos pontos do atacado;
5. Crie um método chamado estaVivo que retorna true caso o atributo pontos do jogador seja maior que zero e falso caso contrário.
6. Altere o método atacar para usar o método está vivo e desconsiderar a operação, ou seja, não atacar, caso o jogador passado por parâmetro não esteja vivo.
7. Crie um método chamado toString() que retorna a representação textual do produto concatenando todos os seus atributos. 
8. Avalie em com testes dois jogadores instanciados e inicializados através do construtor. Utilize o método de ataque de cada jogador e ao final, verifique qual jogador tem mais pontos.

``` js
class Jogador {
    forca : number;
    nivel: number;
    pontos: number;
    
    constructor(forca : number, nivel : number, pontos : number) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontos = pontos;
    }

    calcularAtaque(forca : number, nivel : number) {
        return (this.forca * this.nivel);
    }

    atacar(jogador: Jogador){
        if (this.estaVivo(jogador.pontos)){
            jogador.pontos = (jogador.pontos - this.calcularAtaque(this.forca, this.nivel));
        }
    }

    estaVivo(pontos : number) : boolean{
        if (pontos > 0){
            return true;
        } else {
            return false;
        }
    }

    toString(forca : number, nivel : number, pontos : number) : String{
        return `Jogador nível ${this.nivel}, de força ${this.forca} e com ${this.pontos} pontos`;
    }
}
let j1: Jogador = new Jogador(7,1, 100);
let j2: Jogador = new Jogador(5,2, 100);

j1.atacar(j2);
j2.atacar(j1);
j1.atacar(j2);
j2.atacar(j1);
j1.atacar(j2);
j2.atacar(j1);

console.log(j1.toString());
console.log(j2.toString());
```

**10. A abordagem da questão 5 é retornar códigos de erro ou acerto. Já a da questão 6.f. é desconsiderar a alteração. Quais das duas você acha mais correta? Compare com seus códigos escritos em outras disciplinas.**
* Resposta: Desconsiderar a alteração