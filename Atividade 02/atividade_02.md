# --------__... Atividade 2 ...__--------

**1) Qual a diferença entre tipagem dinâmica e tipagem estática?:**
### Tipagem estática significa que os tipos das variáveis de um programa são explicitamente definidos no código e, portanto, conhecidos/checados em tempo de compilação. Na tipagem dinâmica é justamente o contrário: os tipos não são declarados no código e, portanto, conhecidos/checados em tempo de execução.


**2) Qual o principal problema do uso de tipagem dinâmica? :**
### Podem ocorrer erros de operação, exemplo somar 1 + “1”, que daria 11.


**3) Pesquise um exemplo na internet em que a tipagem dinâmica pode ser problemática.**
### Reutilização de código é mais arriscada

**4) Pesquise e exemplifique com um exemplo porque dizemos que a linguagem C,  mesmo tendo tipagem estática, possui tipagem fraca.**
### A tipagem fraca está ligada a característica da linguagem de realizar conversões automaticamente entre tipos diferentes de dados, não tendo relação com o tipo de tipagem.

**5) Pesquise e, se encontrar, um exemplo onde o tipo any seria benéfico.**
### O tipo de dados Any, que permite a passagem dos dados sem que haja a verificação do tipo. Esse tipo é bastante útil e poderoso quando precisamos trabalhar com códigos JavaScript já existentes, permitindo que possamos otimizar o código da melhor forma, gradualmente, sem a necessidade de verificar o tipo de dados no momento da compilação.

**6) Poderíamos dizer que a tipagem do TypeScript é fraca por uma variável do tipo  number aceitar tanto inteiros como ponto flutuante?** 
### Não, pois ambas são do tipo número, seria fraca se um tipo inteiro aceitasse flutuante.  

**7) Reescreva o exemplo abaixo, mantendo a quebra de linhas usando template  strings e os valores Ely, 120.56 e TypeScript venham de variáveis declaradas  separadamente e “interpoladas” na string:**
### Ely 
### My payment time is 120.56 
### and 
### my preffered language is TypeScript


```
const named:string = 'Ely';
const price:number = 120.56
const language:string = 'TypeScript'
console.log(`${named} \n My payment time is ${price} \n and \n my preffered language is ${language}`)
```