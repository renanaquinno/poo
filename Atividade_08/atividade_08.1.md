# <center>Exercício 08 - Exceções Parte 1</center> 

**1. Enumere os 3 tipos mais comuns de tratamento de erros e exemplifique com códigos seus ou pesquisados na internet.** 

1. try...catch. A try instrução permite que você defina um bloco de código para ser testado quanto a erros enquanto está sendo executado. A catch instrução permite definir um bloco de código a ser executado, caso ocorra um erro no bloco try.
``` js
try {
  alerts("Welcome guest!");
}
catch(err) {
  document.getElementById("demo").innerHTML = err.message;
}
```
2. throw. Permite que você crie um erro personalizado.
``` js
if (x > 10) {
    throw "Too big"; 
}
```
3. Validação HTML. Usando regras de validação predefinidas definidas em atributos HTML:

``` html
<input id="validation" type="number" min="5" max="10" step="1">
```

**2. Explique por que cada um dos 3 métodos acima possui limitações de uso:**
* Resposta: Qualquer exceção lançada será tratada da maneira genérica, o uso inadequadobde exceções pode resultar em mensagens de erro indesejadas

**3. Com o código repassado, implemente o como nos slides o lançamento da exceção no método sacar e realize um teste para saques que deixariam o saldo negativo.:**
* Resposta: codigo no arquivo banco.ts

**4. Crie duas contas e teste o método transferir de modo que a conta a ser debitada não possua saldo suficiente. Explique o que ocorreu.:**
* Resposta: codigo no arquivo banco.ts

**5. Instancie uma classe banco e crie duas contas. Adicione-as à instancia do banco. Chame o método transferir novamente passando um valor que lance a exceção na classe conta. Você considera que o lançamento da exceção foi “propagado” para o método conta.transferir(), banco.transferir() e o método transferir do script app? Como você avalia a confiabilidade dessa implementação.:**
* Resposta: Sim, pois mesmo na classe banco é feito uma instancia de Conta, com isso pegando a validação de erros. 


**6.Lance um erro no construtor e nos métodos sacar e depositar para que, caso o valor passado seja menor que zero uma exceção seja lançada. Reexecute os testes da questão anterior com valores que “passem” pelo saldo insuficiente, e teste também a chamada dos métodos passando como parâmetro valores < 0**
* Resposta: codigo no arquivo banco.ts
