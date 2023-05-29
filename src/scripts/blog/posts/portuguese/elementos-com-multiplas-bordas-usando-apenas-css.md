title: Elementos com múltiplas bordas usando apenas CSS
date: 2023-05-28
description: Embora muito poderoso, até o CSS tem suas limitações. Um dos momentos em que você percebe isso perfeitamente é na hora de definir múltiplas bordas para um mesmo elemento. Com um pouco de criatividade porém, é completamente possível alcançar o estilo que você deseja.
keywords: múltiplas bordas, css, elementos, outline, box-shadow
lang: pt-BR

---

<style>
.example-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
}
.example {
  flex-grow: 1;
  height: 100px;
  max-width: 300px;
  box-sizing: border-box;
}
</style>

Ainda que o CSS seja extremamente poderoso, alguns estilos podem acabar encontrando limitações na maneira usual de usar a linguagem, exigindo do desenvolvedor um certo grau de criatividade na hora de manipular suas folhas de estilo. Definir múltiplas bordas para um elemento é um exemplo perfeito desses casos.

Como seria bom se pudéssemos declarar múltiplas bordas usando apenas o atributo *border*. Quem sabe daqui uns anos, poderemos escrever algo como:
``` css
div {
  border:
    3px solid green,
    3px solid yellow,
    3px solid blue;
}
```

Enquanto essa possibilidade ainda não existe, podemos utilizar uma das estratégias a seguir.

## Outline

Se você não precisa mais do que duas bordas, o atributo *outline* será certamente a solução mais prática e rápida de implementar.

``` css
.example-1 {
  border: 5px solid #f48554;
  outline: 5px solid #fdbf59;
}
```
<style>
.example-1 {
  border: 5px solid #f48554;
  outline: 5px solid #fdbf59;
}
</style>
<div class="example-wrapper">
  <div class="example example-1"></div>
</div>

## Pseudo Seletores

Se você não precisa mais do que três bordas, você tem à disposição os pseudo elementos *:before* e *:after*. Eles poderão ser responsáveis pela segunda e terceira bordas, ou pela terceira e quarta, caso você combine a solução dos pseudo elementos ao atributo *outline*.

``` css
.example-2 {
  position: relative;
  border: 5px solid #fdbf59;
}
.example-2:before {
  content: ' ';
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  border: 5px solid #f48554;
}
.example-2:after {
  content: ' ';
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border: 5px solid #dc424e;
}
```
<style>
.example-2 {
  position: relative;
  border: 5px solid #fdbf59;
}
.example-2:before {
  content: ' ';
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  border: 5px solid #f48554;
}
.example-2:after {
  content: ' ';
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border: 5px solid #dc424e;
}
</style>
<div class="example-wrapper">
  <div class="example example-2"></div>
</div>

## Box Shadow

Mas se você precisa de mais de três bordas, o jeito mais rápido e fácil é recorrer ao atributo *box-shadow*. Ele permite que você defina diversas sombras e, embora o resultado final nada tenha a ver com sombras, você pode ajustar os valores de cada sombra para que imitem bordas.

``` css
.example-3 {
  margin: 25px;
  box-shadow: 
    0 0 0 5px #2f030c,
    0 0 0 10px #5a071a,
    0 0 0 15px #dc424e,
    0 0 0 20px #f48554,
    0 0 0 25px #fdbf59;
}
```
<style>
.example-3 {
  margin: 25px;
  box-shadow: 
    0 0 0 5px #2f030c,
    0 0 0 10px #5a071a,
    0 0 0 15px #dc424e,
    0 0 0 20px #f48554,
    0 0 0 25px #fdbf59;
}
</style>
<div class="example-wrapper">
  <div class="example example-3"></div>
</div>
