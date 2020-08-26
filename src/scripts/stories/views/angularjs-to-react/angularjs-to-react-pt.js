import React, { Component } from 'react';
import { ExternalLink } from '@scripts/base/components/external-link/external-link';
import { StorySpacer } from '@scripts/stories/components/story-spacer/story-spacer';
import { StoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';

export class AngularJSToReactPT extends Component {
  render() {
    return (
      <StoryViewport>
        <p>
          Para quem muito programou usando AngularJS, a primeira impressão ao
          se deparar com um componente React pode não ser das melhores. O
          impacto provavelmente mais significativo é ver JavaScript e HTML
          dividindo o mesmo espaço. Mas não se deixe levar pelas aparências. O
          React é bem menos estranho do que a primeira impressão pode sugerir.
        </p>
        <p>
          Antes de investigar mais a fundo as maiores diferenças entre
          AngularJS e React, precisamos ter ao menos uma visão geral sobre a
          estrutura que dá suporte ao React. O código JavaScript que vamos ver
          num componente React não é suportado nativamente pela linguagem.
          Outra funcionalidade ainda muito incipiente é o uso de módulos. Para
          fazer uso desses benefícios, duas ferramentas de desenvolvimento
          entram em cena: <em>Webpack</em> e <em>Babel</em>.
        </p>
        <h2>
          Webpack
        </h2>
        <p>
          O Webpack entra em cena para que possamos organizar nosso código em
          <em>módulos</em>. Por padrão, todas as variáveis e funções são
          privadas dentro de um módulo. Para que se tornem públicas, precisam
          ser explicitamente exportadas. O conteúdo exportado torna-se então
          público e passível de ser importado por outros módulos. Dessa forma,
          não é mais necessário fazer uso de antigas estratégias como
          IIFE <em>(Immediately Invoked Function Expression)</em> para
          desfrutar de Closures e prevenir que o escopo global seja
          acidentalmente poluído com variáveis ou funções indesejadas.
        </p>
        <p>
          Em suas configurações, definimos um módulo que será o ponto de
          partida <em>(entry point)</em>. O Webpack empacotará os módulos
          importados pelo ponto de partida, bem como todos os demais módulos
          importados pelos módulos subsequentes. Através de uma longa varredura,
          módulo a módulo, o Webpack cria uma árvore de dependências e as
          conecta num único arquivo chamado de pacote <em>(bundle)</em>.
        </p>
        <img src="assets/images/story-angularjs-to-react-webpack.svg" title="webpack" />
        <p>
          Como se pode ver na imagem, foram incluídos no pacote todos os
          módulos necessários para a resolução do <em>entry point</em>. O pacote
          produzido pelo Webpack contém os módulos <em>index.js (entry point)</em>,
          <em>a.js</em>, <em>b.js</em> e <em>c.js</em>. Como nenhum módulo no
          caminho da resolução do <em>entry point</em> importou o
          módulo <em>d.js</em>, ele ficou de fora. Isso é ótimo porque significa
          que módulos que não são efetivamente usados pela aplicação não são
          empacotados evitando assim peso desnecessário.
        </p>
        <h2>
          Babel
        </h2>
        <p>
          Comparado ao Webpack, o Babel é bem mais simples de entender. Ele é
          um transpilador de código e nos permite usar funcionalidades da
          linguagem JavaScript que ainda não são completamente suportadas pelos
          browsers. No caso do React, ele vai um pouco além e, através de um
          preset exclusivo, torna possível a utilização de HTML dentro do
          código JavaScript. Essa sintaxe é popularmente chamada de <em>JSX</em>.
        </p>
        <img src="assets/images/story-angularjs-to-react-babel.svg" title="Babel" />
        <p>
          Nesse <ExternalLink href="https://github.com/rafaelcamargo/minimal-react">
          repositório</ExternalLink>, você pode conferir os arquivos de
          configuração <em>.babelrc</em> e <em>webpack.config.js</em> contendo
          apenas o que é minimamente necessário para empacotar e executar uma
          aplicação React.
        </p>
        <h2>
          Template Engine
        </h2>
        <p>
          É no HTML que as maiores diferenças entre AngularJS e React são
          percebidas. <em>Bindings</em>, laços de repetição e renderização
          condicional funcionam de maneira radicalmente diferentes no React.
        </p>
        <h3>
          Bindings
        </h3>
        <p>
          No AngularJS, o binding é praticado em via de mão dupla. Através da
          diretiva <em>ng-model</em>, o AngularJS vincula uma variável do
          controller ao template e vice-versa. Quando essa variável tem seu
          valor alterado no controller, a mudança se reflete automaticamente no
          template, e quando o usuário altera o valor dessa variável no
          template, esta tem seu valor automaticamente atualizado no controller.
          Além disso, um componente filho pode também alterar o valor da
          propriedade recebida de seu pai. Dessa forma, tanto o componente pai
          pode alterar o valor de uma propriedade passada ao componente filho,
          como também o componente filho pode alterar o valor de uma propriedade
          passada pelo componente pai. Esse conceito,
          chamado <em>Two-Way Data Binding</em>, não existe no React.
        </p>
        <p>
          No React, a via é de mão única, <em>One-Way Data Binding</em>. O valor
          de uma variável presente no controller se reflete automaticamente no
          template, mas quando esse valor é alterado no template, esta não tem
          seu valor automaticamente atualizado no controller. Você precisa
          atualizá-la manualmente. O valor das propriedades de um componente
          também só podem ser atualizadas de cima para baixo, ou seja, na
          direção do componente pai para o componente filho. Um componente não
          pode alterar o valor de uma propriedade recebida do componente pai.
        </p>
        <p>
          Playground online: <ExternalLink href="https://demo.pitsby.com/#!/components/angular/playground?tab=2&code=eyJ0ZW1wbGF0ZSI6IjxkaXYgY2xhc3M9XCJwbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyXCI%2BXG4gIDxsYWJlbD5cbiAgICBOYW1lXG4gIDwvbGFiZWw%2BXG4gIDxkaXY%2BXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmctbW9kZWw9XCIkY3RybC5uYW1lXCIgLz5cbiAgPC9kaXY%2BXG4gIDxkaXY%2BXG4gICAgTmFtZToge3sgJGN0cmwubmFtZSB9fVxuICA8L2Rpdj5cbjwvZGl2PiIsImNvbnRyb2xsZXIiOiJmdW5jdGlvbiBjb250cm9sbGVyKCkge1xuICBjb25zdCAkY3RybCA9IHRoaXM7XG5cbiAgJGN0cmwubmFtZSA9ICcnO1xufVxuXG5yZXR1cm4gY29udHJvbGxlcjsiLCJzdHlsZXMiOiIucGxheWdyb3VuZC1wcmV2aWV3LWNvbnRhaW5lciB7IHBhZGRpbmc6IDMwcHg7IH0ifQ%3D%3D">Two-Way Data Binding
          </ExternalLink>, <ExternalLink href="https://demo.pitsby.com/#!/components/react/playground?tab=1&code=eyJjb250cm9sbGVyIjoiLy8gVGhpcyBmdW5jdGlvbiByZXByZXNlbnRzIGEgV2VicGFjayBNb2R1bGVcbmZ1bmN0aW9uKCkge1xuICBjb25zdCB7IHVzZVN0YXRlIH0gPSBSZWFjdDtcblxuICAvLyBUaGlzIGZ1bmN0aW9uIHJlcHJlc2VudHMgYSBGdW5jdGlvbmFsIFJlYWN0IENvbXBvbmVudFxuICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgpO1xuICAgIFxuICAgIGNvbnN0IG9uTmFtZUNoYW5nZSA9IGV2dCA9PiB7XG4gICAgICBzZXROYW1lKGV2dC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWdyb3VuZC1wcmV2aWV3LWNvbnRhaW5lclwiPlxuICAgICAgICA8bGFiZWw%2BXG4gICAgICAgICAgTmFtZVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsgb25OYW1lQ2hhbmdlIH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBOYW1lOiB7IG5hbWUgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0iLCJzdHlsZXMiOiIucGxheWdyb3VuZC1wcmV2aWV3LWNvbnRhaW5lciB7IHBhZGRpbmc6IDMwcHg7IH0ifQ%3D%3D">One-Way Data Binding</ExternalLink>.
        </p>
        <h3>
          Renderização Condicional
        </h3>
        <p>
          Era também através de uma outra diretiva do AngularJS que partes de
          um componente poderiam ser condicionalmente renderizadas. Ou seja,
          bastava passar à diretiva <em>ng-if</em> um valor <em>true</em>
          ou <em>false</em> para determinar se aquele elemento e seus eventuais
          filhos seriam ou não renderizados.
        </p>
        <p>
          No React, essas condições são escritas com recursos da própria
          linguagem JavaScript: <em>if statements</em>, operadores ternários ou
          operadores lógicos &&.
        </p>
        <p>
          Playground online: <ExternalLink href="https://demo.pitsby.com/#!/components/angular/playground?tab=2&code=eyJ0ZW1wbGF0ZSI6IjxkaXYgY2xhc3M9XCJwbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyXCI%2BXG4gIDxsYWJlbD5cbiAgICBOYW1lXG4gIDwvbGFiZWw%2BXG4gIDxkaXY%2BXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmctbW9kZWw9XCIkY3RybC52aXNpdG9yTmFtZVwiIG5nLWJsdXI9XCIkY3RybC5vbk5hbWVJbnB1dEJsdXIoJGV2ZW50KVwiIC8%2BXG4gIDwvZGl2PlxuICA8ZGl2IG5nLWlmPVwiJGN0cmwuc2hvdWxkU2hvd0dyZWV0aW5nXCI%2BXG4gICAgSGVsbG8ge3sgJGN0cmwudmlzaXRvck5hbWUgfX0hXG4gIDwvZGl2PlxuPC9kaXY%2BIiwiY29udHJvbGxlciI6ImZ1bmN0aW9uIGNvbnRyb2xsZXIoKSB7XG4gIGNvbnN0ICRjdHJsID0gdGhpcztcblxuICAkY3RybC52aXNpdG9yTmFtZSA9ICcnO1xuICBcbiAgJGN0cmwub25OYW1lSW5wdXRCbHVyID0gZXZ0ID0%2BIHtcbiAgICBzZXRHcmVldGluZ1Zpc2liaWxpdHkoISFldnQuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gIH07XG4gIFxuICBmdW5jdGlvbiBzZXRHcmVldGluZ1Zpc2liaWxpdHkoc2hvdWxkU2hvd0dyZWV0aW5nKXtcbiAgICBjb25zb2xlLmxvZyhzaG91bGRTaG93R3JlZXRpbmcpXG4gICAgJGN0cmwuc2hvdWxkU2hvd0dyZWV0aW5nID0gc2hvdWxkU2hvd0dyZWV0aW5nO1xuICB9XG59XG5cbnJldHVybiBjb250cm9sbGVyOyIsInN0eWxlcyI6Ii5wbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyIHsgcGFkZGluZzogMzBweDsgfSJ9">Ng-if
          </ExternalLink>, <ExternalLink href="https://demo.pitsby.com/#!/components/react/playground?tab=1&code=eyJjb250cm9sbGVyIjoiZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHsgdXNlU3RhdGUgfSA9IFJlYWN0O1xuXG4gIHJldHVybiBmdW5jdGlvbigpe1xuICAgIGNvbnN0IFt2aXNpdG9yTmFtZSwgc2V0VmlzaXRvck5hbWVdID0gdXNlU3RhdGUoKTtcbiAgICBcbiAgICBjb25zdCBoYW5kbGVOYW1lID0gZXZ0ID0%2BIHtcbiAgICAgIHNldFZpc2l0b3JOYW1lKGV2dC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGJ1aWxkR3JlZXRpbmcgPSBuYW1lID0%2BIHtcbiAgICAgIGlmKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIDxwPkhlbGxvIHsgbmFtZSB9ITwvcD47XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlncm91bmQtcHJldmlldy1jb250YWluZXJcIj5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIE5hbWVcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkJsdXI9eyBoYW5kbGVOYW1lIH0gLz5cbiAgICAgICAgPC9kaXY%2BXG4gICAgICAgIHsgYnVpbGRHcmVldGluZyh2aXNpdG9yTmFtZSkgfVxuICAgICAgPC9kaXY%2BXG4gICAgKTtcbiAgfVxufSIsInN0eWxlcyI6Ii5wbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyIHsgcGFkZGluZzogMzBweDsgfSJ9">If Statement</ExternalLink>, <ExternalLink href="https://demo.pitsby.com/#!/components/react/playground?tab=1&code=eyJjb250cm9sbGVyIjoiZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHsgdXNlU3RhdGUgfSA9IFJlYWN0O1xuXG4gIHJldHVybiBmdW5jdGlvbigpe1xuICAgIGNvbnN0IFt2aXNpdG9yTmFtZSwgc2V0VmlzaXRvck5hbWVdID0gdXNlU3RhdGUoKTtcbiAgICBcbiAgICBjb25zdCBoYW5kbGVOYW1lID0gZXZ0ID0%2BIHtcbiAgICAgIHNldFZpc2l0b3JOYW1lKGV2dC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWdyb3VuZC1wcmV2aWV3LWNvbnRhaW5lclwiPlxuICAgICAgICA8bGFiZWw%2BXG4gICAgICAgICAgTmFtZVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQmx1cj17IGhhbmRsZU5hbWUgfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyB2aXNpdG9yTmFtZSAmJiA8cD5IZWxsbyB7IHZpc2l0b3JOYW1lIH0hPC9wPiB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59Iiwic3R5bGVzIjoiLnBsYXlncm91bmQtcHJldmlldy1jb250YWluZXIgeyBwYWRkaW5nOiAzMHB4OyB9In0%3D">Operador &&</ExternalLink>, <ExternalLink href="https://demo.pitsby.com/#!/components/react/playground?tab=1&code=eyJjb250cm9sbGVyIjoiZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHsgdXNlU3RhdGUgfSA9IFJlYWN0O1xuXG4gIHJldHVybiBmdW5jdGlvbigpe1xuICAgIGNvbnN0IFt2aXNpdG9yTmFtZSwgc2V0VmlzaXRvck5hbWVdID0gdXNlU3RhdGUoKTtcbiAgICBcbiAgICBjb25zdCBoYW5kbGVOYW1lID0gZXZ0ID0%2BIHtcbiAgICAgIHNldFZpc2l0b3JOYW1lKGV2dC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGJ1aWxkR3JlZXRpbmcgPSBuYW1lID0%2BIHtcbiAgICAgIHJldHVybiBuYW1lID8gPHA%2BSGVsbG8geyBuYW1lIH0hPC9wPiA6IDxwPkVudGVyIHlvdXIgbmFtZSBpbiB0aGUgZmllbGQgYWJvdmUuPC9wPjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWdyb3VuZC1wcmV2aWV3LWNvbnRhaW5lclwiPlxuICAgICAgICA8bGFiZWw%2BXG4gICAgICAgICAgTmFtZVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQmx1cj17IGhhbmRsZU5hbWUgfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyBidWlsZEdyZWV0aW5nKHZpc2l0b3JOYW1lKSB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59Iiwic3R5bGVzIjoiLnBsYXlncm91bmQtcHJldmlldy1jb250YWluZXIgeyBwYWRkaW5nOiAzMHB4OyB9In0%3D">Operador Ternário</ExternalLink>.
        </p>
        <h3>
          Laços de Repetição
        </h3>
        <p>
          Da mesma maneira que a renderização condicional, laços de repetição
          que eram feitos utilizando a diretiva <em>ng-repeat</em> no AngularJS
          são feitos no React através dos recursos da própria linguagem
          JavaScript, como por exemplo map.
        </p>
        <p>
          Playground online: <ExternalLink href="https://demo.pitsby.com/#!/components/angular/playground?tab=2&code=eyJ0ZW1wbGF0ZSI6IjxkaXYgY2xhc3M9XCJwbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyXCI%2BXG4gIDxkaXY%2BXG4gICAgRnJ1aXRzXG4gIDwvZGl2PlxuICA8Zm9ybSBuZy1zdWJtaXQ9XCIkY3RybC5oYW5kbGVGcnVpdFN1Ym1pc3Npb24oKVwiPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5nLW1vZGVsPVwiJGN0cmwubmV3RnJ1aXRcIiBwbGFjZWhvbGRlcj1cIkFkZCBhIGZydWl0Li4uXCIgLz5cbiAgPC9mb3JtPlxuICA8dWw%2BXG4gICAgPGxpIG5nLXJlcGVhdD1cImZydWl0IGluICRjdHJsLmZydWl0c1wiPlxuICAgICAge3sgZnJ1aXQgfX1cbiAgICA8L2xpPlxuICA8L3VsPlxuPC9kaXY%2BIiwiY29udHJvbGxlciI6ImZ1bmN0aW9uIGNvbnRyb2xsZXIoKSB7XG4gIGNvbnN0ICRjdHJsID0gdGhpcztcblxuICAkY3RybC5mcnVpdHMgPSBbJ0JhbmFuYScsICdPcmFuZ2UnXTtcbiAgXG4gICRjdHJsLmhhbmRsZUZydWl0U3VibWlzc2lvbiA9ICgpID0%2BIHtcbiAgICBpZigkY3RybC5uZXdGcnVpdCkgYWRkRnJ1aXQoJGN0cmwubmV3RnJ1aXQpO1xuICAgICRjdHJsLm5ld0ZydWl0ID0gJyc7XG4gIH07XG4gIFxuICBmdW5jdGlvbiBhZGRGcnVpdChmcnVpdCl7XG4gICAgJGN0cmwuZnJ1aXRzLnB1c2goZnJ1aXQpO1xuICB9XG59XG5cbnJldHVybiBjb250cm9sbGVyOyIsInN0eWxlcyI6Ii5wbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyIHsgcGFkZGluZzogMzBweDsgfSJ9">Ng-repeat</ExternalLink>, <ExternalLink href="https://demo.pitsby.com/#!/components/react/playground?tab=1&code=eyJjb250cm9sbGVyIjoiZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHsgdXNlU3RhdGUgfSA9IFJlYWN0O1xuXG4gIHJldHVybiBmdW5jdGlvbigpe1xuICAgIGNvbnN0IFtmcnVpdHMsIHNldEZydWl0c10gPSB1c2VTdGF0ZShbJ0JhbmFuYScsICdPcmFuZ2UnXSk7XG4gICAgXG4gICAgY29uc3QgaGFuZGxlRnJ1aXRTdWJtaXNzaW9uID0gZXZ0ID0%2BIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gZXZ0LmN1cnJlbnRUYXJnZXQucXVlcnlTZWxlY3RvcignW25hbWU9XCJmcnVpdFwiXScpO1xuICAgICAgaWYoaW5wdXQudmFsdWUpIHNldEZydWl0cyhbIC4uLmZydWl0cywgaW5wdXQudmFsdWUgXSk7XG4gICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlncm91bmQtcHJldmlldy1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBGcnVpdHNcbiAgICAgICAgPC9kaXY%2BXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXsgaGFuZGxlRnJ1aXRTdWJtaXNzaW9uIH0%2BXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZydWl0XCIgcGxhY2Vob2xkZXI9XCJBZGQgYSBmcnVpdC4uLlwiIC8%2BXG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHsgZnJ1aXRzLm1hcCgoZnJ1aXQsIGluZGV4KSA9PiA8bGkga2V5PXtpbmRleH0%2BeyBmcnVpdCB9PC9saT4pIH1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0iLCJzdHlsZXMiOiIucGxheWdyb3VuZC1wcmV2aWV3LWNvbnRhaW5lciB7IHBhZGRpbmc6IDMwcHg7IH0ifQ%3D%3D">Map</ExternalLink>.
        </p>
        <StorySpacer />
        <p>
          Como é possível notar, uma das características que tanto afasta o
          React do AngularJS é a maneira como o template é percebido. Alguns
          desenvolvedores costumam ilustrar muito bem essa diferença com a
          frase: <em>No AngularJS, colocamos JavaScript no HTML. No React,
          colocamos HTML no JavaScript</em>.
        </p>
        <p>
          Mas as principais diferenças entre AngularJS e React não se
          restringem ao template. A API usada para lidar com o ciclo de vida
          do componente também muda drasticamente.
        </p>
        <h2>
          Lifecycle Hooks
        </h2>
        <p>
          É através dos ganchos <em>(hooks)</em> relacionados ao ciclo de vida
          de um componente que obtemos as condições necessárias para executar
          tarefas específicas. Quando uma tarefa só pode ser executada depois
          que o template do componente já foi renderizado, ela é vinculada ao
          gancho de inicialização do componente, por exemplo. Se precisamos
          executar uma tarefa no momento em que o componente é removido do DOM,
          ou seja, ao ser desmontado ou destruído, a tarefa deve ser vinculada
          ao gancho que representa o fim da vida do componente.
        </p>
        <h3>
          Inicialização/Montagem
        </h3>
        <p>
          No AngularJS, a inicialização do componente é representada pela
          função <em>$onInit</em>. Essa é a função que o AngularJS executa no
          momento em que o componente está totalmente pronto para uso. Ou seja,
          o template já está renderizado e todos os bindings estão vinculados
          ao controller.
        </p>
        <p>
          No React, tarefas que devem ser executadas em momentos específicos
          do ciclo de vida do componente são passadas para uma função
          chamada <em>useEffect</em>. Embora não muito intuitivo, o nome da
          função faz alusão ao termo <em>side effect</em>. Através
          do <em>useEffect</em> tem-se a garantia que a tarefa só será
          executada depois da completa montagem do componente.
        </p>
        <p>
          Playground online: <ExternalLink href="https://demo.pitsby.com/#!/components/angular/playground?tab=2&code=eyJ0ZW1wbGF0ZSI6IjxkaXYgY2xhc3M9XCJwbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyXCI%2BXG4gIDxoMT5QbGF5Z3JvdW5kPC9oMT5cbjwvZGl2PiIsImNvbnRyb2xsZXIiOiJmdW5jdGlvbiBjb250cm9sbGVyKCkge1xuICBjb25zdCAkY3RybCA9IHRoaXM7XG5cbiAgLy8gQXQgdGhpcyBtb21lbnQsIGNvbXBvbmVudCBpcyBub3QgZnVsbHkgYnVpbHQuXG4gIGFsZXJ0UGFnZUhlYWRpbmcoKTtcbiAgXG4gICRjdHJsLiRvbkluaXQgPSAoKSA9PiB7XG4gICAgLy8gSGVyZSB5b3UgY2FuIHJ1biB0YXNrcyB0aGF0IGRlcGVuZCBvblxuICAgIC8vIGNvbXBvbmVudCdzIG1hcmt1cCwgZm9yIGV4YW1wbGUuXG4gICAgYWxlcnRQYWdlSGVhZGluZygpO1xuICB9O1xuICBcbiAgZnVuY3Rpb24gYWxlcnRQYWdlSGVhZGluZygpe1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpO1xuICAgIHJldHVybiBoZWFkaW5nID8gd2luZG93LmFsZXJ0KGhlYWRpbmcudGV4dENvbnRlbnQpIDogd2luZG93LmFsZXJ0KCdObyBoZWFkaW5nIGZvdW5kIScpO1xuICB9XG59XG5cbnJldHVybiBjb250cm9sbGVyOyIsInN0eWxlcyI6Ii5wbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyIHsgcGFkZGluZzogMzBweDsgfSJ9">$onInit</ExternalLink>, <ExternalLink href="https://demo.pitsby.com/#!/components/react/playground?tab=1&code=eyJjb250cm9sbGVyIjoiZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHsgdXNlRWZmZWN0IH0gPSBSZWFjdDtcblxuICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBhbGVydFBhZ2VIZWFkaW5nID0gKCkgPT4ge1xuICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG4gICAgICByZXR1cm4gaGVhZGluZyA%2FIHdpbmRvdy5hbGVydChoZWFkaW5nLnRleHRDb250ZW50KSA6IHdpbmRvdy5hbGVydCgnTm8gaGVhZGluZyBmb3VuZCEnKTtcbiAgICB9XG5cbiAgICAvLyBBdCB0aGlzIG1vbWVudCwgY29tcG9uZW50IGlzIG5vdCBmdWxseSBidWlsdC5cbiAgICBhbGVydFBhZ2VIZWFkaW5nKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgLy8gSGVyZSB5b3UgY2FuIHJ1biB0YXNrcyB0aGF0IGRlcGVuZCBvblxuICAgICAgLy8gY29tcG9uZW50J3MgbWFya3VwLCBmb3IgZXhhbXBsZS5cbiAgICAgIGFsZXJ0UGFnZUhlYWRpbmcoKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyXCI%2BXG4gICAgICAgIDxoMT5QbGF5Z3JvdW5kPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0iLCJzdHlsZXMiOiIucGxheWdyb3VuZC1wcmV2aWV3LWNvbnRhaW5lciB7IHBhZGRpbmc6IDMwcHg7IH0ifQ%3D%3D">useEffect</ExternalLink>.
        </p>
        <h3>
          Remoção/Desmonte
        </h3>
        <p>
          Da mesma maneira que em certas ocasiões precisamos executar tarefas
          somente após a completa montagem de um componente, em outras
          precisamos executar uma tarefa no momento imediatamente anterior ao
          seu desmonte. Imagine que na inicialização de um componente é
          adicionado um listener ao <em>document</em>. Esse listener deverá ser
          obrigatoriamente removido no momento do desmonte do componente.
          Caso contrário, toda vez que esse componente for inicializado o
          mesmo listener será novamente adicionado ao document causando a
          replicação indesejada do comportamento.
        </p>
        <p>
          No AngularJS, o método do controller que nos oferece a possibilidade
          de executar uma tarefa imediatamente antes do desmonte do componente
          se chama <em>$onDestroy</em>.
        </p>
        <p>
          No React, novamente recorremos à função <em>useEffect</em>. No caso
          anterior, é passada como parâmetro para <em>useEffect</em> uma função
          que será executada no momento em que o componente estiver montado por
          completo. Se for necessário executar uma tarefa no momento
          imediatamente anterior ao desmonte do componente, essa função deverá
          retornar uma outra função. É nessa outra função retornada que deverão
          estar as tarefas a serem executadas imediatamente antes do desmonte
          do componente.
        </p>
        <p>
          Playground online: <ExternalLink href="https://demo.pitsby.com/#!/components/angular/playground?tab=2&code=eyJ0ZW1wbGF0ZSI6IjxkaXYgY2xhc3M9XCJwbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyXCI%2BXG4gIDxoMT5QbGF5Z3JvdW5kPC9oMT5cbjwvZGl2PiIsImNvbnRyb2xsZXIiOiJmdW5jdGlvbiBjb250cm9sbGVyKCkge1xuICBjb25zdCAkY3RybCA9IHRoaXM7XG4gIFxuICAkY3RybC4kb25Jbml0ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWxlcnRQYWdlSGVhZGluZyk7XG4gIH07XG4gIFxuICAkY3RybC4kb25EZXN0cm95ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWxlcnRQYWdlSGVhZGluZyk7XG4gIH07XG4gIFxuICBmdW5jdGlvbiBhbGVydFBhZ2VIZWFkaW5nKCl7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG4gICAgcmV0dXJuIGhlYWRpbmcgPyB3aW5kb3cuYWxlcnQoaGVhZGluZy50ZXh0Q29udGVudCkgOiB3aW5kb3cuYWxlcnQoJ05vIGhlYWRpbmcgZm91bmQhJyk7XG4gIH1cbn1cblxucmV0dXJuIGNvbnRyb2xsZXI7Iiwic3R5bGVzIjoiLnBsYXlncm91bmQtcHJldmlldy1jb250YWluZXIgeyBwYWRkaW5nOiAzMHB4OyB9In0%3D">$onDestroy</ExternalLink>, <ExternalLink href="https://demo.pitsby.com/#!/components/react/playground?tab=1&code=eyJjb250cm9sbGVyIjoiLy8gVGhpcyBmdW5jdGlvbiByZXByZXNlbnRzIGEgV2VicGFjayBNb2R1bGVcbmZ1bmN0aW9uKCkge1xuICBjb25zdCB7IHVzZUVmZmVjdCB9ID0gUmVhY3Q7XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiByZXByZXNlbnRzIGEgRnVuY3Rpb25hbCBSZWFjdCBDb21wb25lbnRcbiAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgYWxlcnRQYWdlSGVhZGluZyA9ICgpID0%2BIHtcbiAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpO1xuICAgICAgaWYoaGVhZGluZylcbiAgICAgICAgd2luZG93LmFsZXJ0KGhlYWRpbmcudGV4dENvbnRlbnQpO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhbGVydFBhZ2VIZWFkaW5nKTtcbiAgICAgIFxuICAgICAgcmV0dXJuICgpID0%2BIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhbGVydFBhZ2VIZWFkaW5nKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlncm91bmQtcHJldmlldy1jb250YWluZXJcIj5cbiAgICAgICAgPGgxPlBsYXlncm91bmQ8L2gxPlxuICAgICAgPC9kaXY%2BXG4gICAgKTtcbiAgfVxufSIsInN0eWxlcyI6Ii5wbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyIHsgcGFkZGluZzogMzBweDsgfSJ9">useEffect</ExternalLink>.
        </p>
        <StorySpacer />
        <p>
          Como se pode perceber, o componente React não muda tanto quando a
          aparência de seu código pode sugerir. Uma vez entendidas as
          diferenças no formato, um programador acostumado a desenvolver
          componentes com AngularJS não terá dificuldades em criar, a partir de
          então, componentes utilizando React.
        </p>
      </StoryViewport>
    );
  }
}
