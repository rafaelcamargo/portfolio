title: Modelo de maturidade de componentes
date: 2019-11-30
lang: pt-BR
description: Pense que você é um programador, um programador front-end. Você colabora com o desenvolvimento de um produto web. Você trabalha junto com designers, programadores back-end e product owners. Então um belo dia numa reunião, numa apresentação ou num simples bate papo entre membros do time, você faz uso de uma palavra muito simples. Componente.
keywords: componente, maturidade, front-end

---

Pense que você é um programador, um programador front-end. Você colabora com o desenvolvimento de um produto web. Você trabalha junto com designers, programadores back-end e product owners. Então um belo dia numa reunião, numa apresentação ou num simples bate papo entre membros do time, você faz uso de uma palavra muito simples. *Componente*.

Você poderia estar compartilhando algo que você aprendeu em sua mais recente leitura, sugerindo outra maneira de desenvolver a interface gráfica ou estar fazendo apenas uma piada mesmo. Independentemente do que você estava fazendo, no exato momento em que você terminar de pronunciar a última sílaba desta palavra tão simples chamada *componente*, algo muito complexo vai começar a acontecer.

O designer vai invocar os poderes do deus Design System, ungido pela glória do Design Atômico e batizado com cada uma das variáveis de seu conjunto de Design Tokens. O Product Owner, enfeitiçado pela magia da reusabilidade - e asfixiado pelo gráfico de Gantt que lhe cobra a entrega de dezenas de novas funcionalidades - o indagará repetidas vezes: *Então seria possível entregar mais telas em menos tempo?*. E, por fim, o programador back-end se limitará a dizer: *Já usei Bootstrap uma vez. Odeio CSS*.

Embora tenha apenas quatro sílabas, a palavra *componente* provoca zilhões de diferentes interpretações e expectativas. Uma palavra tão fácil de pronunciar e tão difícil de definir.

Nesse momento, você deve estar convencido de que no próximo parágrafo vou apresentar uma definição para *componente* que vai causar um terremoto na sua mente. A definição que, uma vez pronunciada, é capaz de incinerar toda e qualquer ambiguidade.

Não cara, me desculpa. Eu infelizmente não encontrei essa única e toda poderosa definição. Mas vou tentar te ajudar oferecendo três! Elas compõem o que eu chamei de Modelo de Maturidade de Componentes.

## Nível Zero: Caos

Bem vindos ao caos. Nesse nível, qualquer uma daquelas zilhões de interpretações ainda inexistem. Tudo se reduz a raça e coragem. Nada pode ser reutilizado e as mudanças são muito caras.

### Anatomia

- Não há estruturas HTML padronizadas que podem ser replicadas.
- Não há classes CSS pré definidas que funcionam em conjunto com aquelas estruturas HTML padronizadas.
- Não há encapsulamento de marcação, lógica e estilo.

### Efeitos Colaterais

- **CSS desnecessário**. Sem classes CSS pré definidas, estilos já existentes são redundantemente escritos em forma de novas classes. Dentro de pouco tempo, tem-se diferentes classes em diferentes folhas de estilo fazendo exatamente a mesma coisa.
- **Scripts desnecessários**. A falta de encapsulamento de comportamentos já existentes faz os desenvolvedores replicá-los em diversas partes do sistema.
- **Zero reuso**. Sem estruturas HTML padronizadas, as diferentes classes CSS, que fazem a mesma coisa, em diferentes folhas de estilo continuam a se multiplicar ao surgir novas estruturas HTML não padronizadas.
- **Mudanças muito caras**. Com a mesma responsabilidade replicada em diversos lugares do sistema, até a menor das mudanças pode se transformar no pior dos pesadelos, já que você não tem a menor ideia de como nem quantos lugares precisam ser alterados.

### Exemplo

``` html
<div class="finance-btn-attach-file glyphicons paperclip">
  <i></i>Attach documents
</div>
```

Um botão genérico de upload de arquivo foi acoplado a uma folha de estilo já relacionada a um domínio de negócio - *finance*. Comportamento e marcação não estão encapsulados e serão replicados usando outras classes e outra marcação onde quer que o botão seja utilizado novamente.

## Nível Um: Componentes CSS

Estágio onde as estruturas HTML são padronizadas e as classes CSS podem ser reutilizadas.

### Anatomia

- Estruturas HTML padronizadas.
- Classes CSS pré definidas.
- Não há encapsulamento de marcação, lógica e estilo.

### Efeitos Colaterais

- **Menos CSS escrito**. Com estruturas HTML padronizadas e, portanto, replicáveis, as classes CSS podem agora ser reutilizadas. Novas classes CSS são drasticamente evitadas e muito menos CSS precisa ser escrito.
- **Marcação desnecessária**. Embora padronizadas, as estruturas HTML ainda não são encapsuladas. Dito isso, marcação desnecessária continua ainda a ser replicada em diversas partes do sistema.
- **Scripts desnecessários**. Assim como a marcação, a falta de encapsulamento também faz com que o comportamento seja replicado em diferentes partes do sistema.
- **Mudanças caras**. Ao menos no CSS, as mudanças são agora mais fáceis de lidar. Porém, qualquer mudança relacionada à marcação ou comportamento ainda custa caro.

### Exemplo

``` html
<button class="btn btn-primary">
  <i class="glyphicons glyphicons-download-alt"></i>Download
</button>
```

Estrutura HTML padronizada para um botão estilizado como *primary* e contendo um ícone à esquerda de seu texto. Todas as partes do sistema que precisam de um botão como esse, ao replicar essa estrutura com essas mesmas classes, são agora capazes de alcançar o mesmo resultado.

## Nível Dois: Custom Elements

Seja muito bem vinda, produtividade! Esse é o estágio onde tudo, absolutamente tudo, está encapsulado em seu próprio componente.

### Anatomia

- Estruturas HTML padronizadas.
- Classes CSS pré definidas.
- Marcação, lógica e estilo encapsulados.

### Efeitos Colaterais

- Cada componente torna-se a única autoridade sobre uma única responsabilidade do sistema.
- Tudo se torna reutilizável.
- Mudanças são baratas.

### Exemplo

``` html
<my-button data-theme="primary" data-icon-name="paperclip">
  Attach Documents
</my-button>
```

O custom element acima - *my-button* - é a única parte do sistema onde qualquer coisa relacionada a todos os botões da aplicação é tratada.

Pois bem, a definição de componentes única e retumbante eu vou ficar te devendo, mas espero que essas três possam servir de base para explicar aos seus colegas de qual nível de componentes vocês estão falando, qual nível de maturidade vocês esperavam ter e qual nível gostariam de alcançar.
