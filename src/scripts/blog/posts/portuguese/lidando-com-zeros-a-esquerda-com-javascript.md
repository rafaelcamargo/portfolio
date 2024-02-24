title: Lidando com zeros à esquerda com JavaScript
date: 2024-02-28
description: Zeros à esquerda nunca representaram lá muita coisa e, constantemente, são dispensáveis. Mas acredite, existem alguns casos em que eles são fundamentais. Para esses últimos casos, qual seria então a maneira mais fácil de formatar valores que precisem de um ou mais zeros à esquerda? Descubra como alguns métodos nativos do JavaScript podem te ajudar nessa tarefa.
keywords: zeros, esquerda, direita, string, padStart, padEnd, javascript
lang: pt-BR

---

Existem inúmeros casos nos quais um zero à esquerda não vale de nada. É inútil. Sua existência é perfeitamente prescindível. Mas existem alguns em que ele é fundamental.

Um caso não raro no dia a dia de um programador é a construção de datas a partir de uma *string* padrão ISO. A ausência de zeros à esquerda desrespeita o padrão e, consequentemente, impede a contrução de uma data usando JavaScript. Observe no exemplo abaixo o que acontece se dispensarmos o zero à esquerda dos números que representam mês e dia da data a ser construída:
``` javascript
new Date('2024-2-4T05:00:00.000Z');
// Invalid Date
```

Um outro caso, também baseado em um formato pré-definido, que demanda o uso de zeros à esquerda é o Código de Endereçamento Postal (CEP). Caso eu defina um CEP como 89203-85, ele será inválido, e eventuais buscas por esse código não retornarão resultados. O formato pré-definido para CEP obriga que o código contenha 5 dígitos seguidos de outros 3, separados por um traço. Para tornar o CEP válido, é necessário então adicionar um zero à esquerda do número 85: 89203-085.

Mas qual seria a maneira mais fácil de tratar uma *string* que precisa necessariamente ter um determinado número de caracteres? Até pouco tempo atrás, eu tinha o hábito de criar uma função auxiliar que tinha mais ou menos essa cara:
``` javascript
function formatLeadingZero(text) {
  return parseInt(text) < 10 ? `0${text}` : text;
}
```
A partir de então, bastava executar a função passando qualquer texto que precisasse ter obrigatoriamente dois caracteres:
``` javascript
formatLeadingZero('2');
// "02"
```
Mas como é possível notar logo de cara, essa função se limita a textos que precisam ter ao menos 2 caracteres. Caso eu precisasse garantir o caso *085* do CEP, ela já não seria mais suficiente. Foi então que recentemente, num *pull request* aberto por um colega de trabalho, descobri o método `String.prototype.padStart()`, suportado pelos mais populares *browsers* desde pelo menos 2017. Esse método não só resolve o formato de mês e dia respeitando o zero à esquerda, como também resolveria o caso do CEP. Uma verdadeira mão na roda:
``` javascript
'2'.padStart(2, '0');
// "02"

'85'.padStart(3, '0');
// "085"
```

O método tem uma assinatura bastante intuitiva. Primeiramente informamos o comprimento que a *string* deve ter, logo depois informamos o caracter que preencherá o número de caracteres faltantes à esquerda. Caso seja necessário preencher caracteres faltantes à direita, é possível usar o método `String.prototype.padEnd()`.

Ao observar um pouco mais a fundo a assinatura desses dois métodos, percebemos que ambos os métodos podem satisfazer muitos outros casos de uso além de adicionar zeros à esquerda ou à direita de uma *string*. É possível por exemplo ofuscar dados sensíveis, como tokens ou números de cartão de crédito:
``` javascript
token.slice(-4).padStart(24, '*')
// "********************6fgh"
```

Nessa documentação disponível na [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String) você pode conhecer melhor esses e outros métodos utilitários de *String* que podem facilitar o seu dia a dia, tornando seu código radicalmente mais simples.
