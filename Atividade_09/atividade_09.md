# <center>Exercício 09 - Classes abstratas e Interfaces</center> 
# <center>Classes abstratas</center> 

**1. Podemos instanciar classes abstratas? Justifique.** 
* Resposta: Não. É um tipo de classe especial que não pode ser instanciada, apenas herdada.


**2. Explique o que é necessário para que a compilação da ClasseConcreta ocorra sem erros:**
* Resposta: ClasseConcreta precisa implementar o membro herdado abstract imprimaAlgo()

**3. Se uma classe que herda de uma abstrata e não implementa os seus métodos, o que ocorre?**
* Resposta: Ocorre um erro.

**4. Imagine que você deve modelar várias figuras geométricas em TypeScript e que cada uma tem sua forma específica de calcular área e perímetro. Proponha e implemente uma hierarquia de classes usando uma classe abstrata chamada FiguraGeometrica e outras concretas: Quadrado, Triangulo, etc.**
* Resposta: código no arquivo q4.ts

**5. Não podemos aplicar o operador new em FiguraGeometrica, mas por que então podemos realizar o seguinte código de instanciação:**
* Resposta: Porque não está instaciando a classe, e sim criando um array. 

**6. Implemente as classes Funcionario, Gerente e Diretor conforme o diagrama exposto em sala:**
1. A classe funcionário deve ser abstrata e o método getBonificacao() abstrato;
2. Na classe gerente o método bonificação deve retornar 40% do salário;
3. Em Diretor a bonificação deve ser 60% do salário.
4. Por fim, na classe presidente o método deve retornar 100% do salário + R$ 1.000,00.

* Resposta: código no arquivo q6.ts

# <center>Interfaces</center> 
**7. Refaça a questão 04 do exercício usando interfaces com os métodos propostos em vez de herança. Crie também uma classe de teste que instancie e teste diferentes formas geométricas.**
* Resposta: código no arquivo q7.ts

**8. Crie uma interface chamada IComparavel com um método chamado comparar que receba uma forma geométrica como parâmetro e retorna um inteiro como resultado. Implemente em cada uma das classes do exemplo anterior a interface retornando -1, 0 e 1 caso a área da forma seja menor, igual ou maior que a passada via parâmetro.**
* Resposta: código no arquivo q7.ts

**9.Crie uma classe para testar os exemplos anteriores. Instancie várias formas diferentes. Pegue duas formas chame em uma delas o método comparar passando a outra como parâmetro e exiba o resultado. Repita para outras formas.**
* Resposta: código no arquivo q7.ts

**10. Implemente o diagrama de classes abaixo:**
* Resposta: código no arquivo q10.ts

**11. Crie uma classe chamada AuditoriaInterna que tenha dois métodos que tenha uma List de Tributaveis e os métodos:**
* Resposta: código no arquivo q10.ts

**12. Crie uma classe de testes que instancie várias classes ContaCorrente e SeguroDeVida, adicione-as na classe AuditoriaInterna e exiba o resultado do método calculaTributos. Perceba que a classe de auditoria não se preocupa que tipo de classe está sendo passada.:**
* Resposta: código no arquivo q10.ts