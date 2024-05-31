title: Elementos HTML que você talvez não conheça
date: 2023-04-29
description: Explore o poder do HTML nativo e experimente vários elementos que podem impulsionar sua produtividade e reduzir a quantidade de código a ser escrito, graças à versatilidade do HTML e à sua integração harmoniosa com sistemas operacionais de qualquer dispositivo.
keywords: elementos, html, details, dialog, math, meter, progress
lang: pt-BR

---

<style>
  details {
    margin-top: 30px;
  }
  details + p {
    margin-top: 100px;
  }
  dialog p {
    margin-bottom: 20px;
  }
  label {
    display: block;
    font-size: 0.666666666666667em;
    font-weight: bold;
    text-transform: uppercase;
  }
  pre {
    margin-bottom: 0;
    border-radius: 6px 6px 0 0;
  }
  pre + p {
    padding: 5px 16px;
    background-color: #E5EBF1;
    font-size: 0.666666666666667em;
    border-radius: 0 0 6px 6px;
  }
  thead th {
    position: relative;
  }
  .browser-support-table {
    margin-top: 15px;
  }
  .browser-support-table caption {
    caption-side: bottom;
    font-size: .888888888888889em;
    margin-top: 5px;
  }
  .example {
    margin: 40px 0 55px;
  }
  .tn-article h2 ~ h2 {
    margin-top: 125px;
  }
</style>

Desde que criei uma biblioteca de compoentes chamada [Taslonic](https://components.taslonic.com/#!/components/react/input), venho descobrindo o quanto o HTML é nativamente mais poderoso do que eu imaginava. O quanto é versátil. O quanto é intrisicamente integrado ao sistema operacional de qualquer dispositivo. Em breves palavras, o quanto essa tecnologia, não raro menosprezada, pode alavancar a nossa produtividade nos poupando de escrever centenas de linhas de código.

Veja a seguir alguns elementos nativos do HTML aos quais você talvez não tenha sido apresentado ainda.

## Details

Revela informações ou controles adicionais.

<div class="example">
  <details>
    <summary>Detalhes da Transação</summary>
    <dl>
      <dt>Descrição:</dt>
      <dd>
        Licença vitalícia | 
        <a href="https://typenik.compilorama.com/" rel="noreferrer noopener" target="_blank">
          Typenik
        </a>
      </dd>
      <dt>Data:</dt> <dd>29 de Abril de 2023</dd>
      <dt>Preço:</dt> <dd>$9</dd>
    </dl>
  </details>
</div>

``` html
<details>
  <summary>
    Detalhes da Transação
  </summary>
  <dl>
    <dt>Descrição:</dt>
    <dd>
      Licença vitalícia | 
      <a
        href="https://typenik.compilorama.com/" 
        rel="noreferrer noopener"
        target="_blank"
      >
        Typenik
      </a>
    </dd>
    <dt>Data:</dt>
    <dd>29 de Abril de 2023</dd>
    <dt>Preço:</dt>
    <dd>$9</dd>
  </dl>
</details>
```

[Edite esse código](https://pitsby-demo.compilorama.com/#!/components/vanilla/playground?tab=0&code=eyJ0ZW1wbGF0ZSI6IjxkaXYgY2xhc3M9XCJwbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyXCI%252BXG4gIDxkZXRhaWxzPlxuICAgIDxzdW1tYXJ5PlxuICAgICAgRGV0YWxoZXMgZGEgVHJhbnNh5%252BNvXG4gICAgPC9zdW1tYXJ5PlxuICAgIDxkbD5cbiAgICAgIDxkdD5EZXNjcmnn4286PC9kdD5cbiAgICAgIDxkZD5cbiAgICAgICAgTGljZW7nYSB2aXRhbO1jaWEgfFxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3R5cGVuaWsuY29tcGlsb3JhbWEuY29tL1wiIFxuICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgID5cbiAgICAgICAgICBUeXBlbmlrXG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGQ%252BXG4gICAgICA8ZHQ%252BRGF0YTo8L2R0PlxuICAgICAgPGRkPjI5IGRlIEFicmlsIGRlIDIwMjM8L2RkPlxuICAgICAgPGR0PlByZedvOjwvZHQ%252BXG4gICAgICA8ZGQ%252BJDk8L2RkPlxuICAgIDwvZGw%252BXG4gIDwvZGV0YWlscz5cbjwvZGl2PiIsImNvbnRyb2xsZXIiOiJmdW5jdGlvbiBjb250cm9sbGVyKGVsZW1lbnQpIHt9XG5cbnJldHVybiBjb250cm9sbGVyOyIsInN0eWxlcyI6Ii5wbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyIHsgcGFkZGluZzogMzBweDsgfSJ9). Documentação do [Details](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element).

<details>
  <summary>Suporte em navegadores</summary>
  <table class="browser-support-table">
    <caption>
      Fonte: 
      <a
        href="https://caniuse.com/?search=details" 
        rel="noreferrer noopener"
        target="_blank"
      >
        caniuse.com
      </a>
    </caption>
    <thead>
      <th>Navegador</th>
      <th>Desde</th>
      <th>Versão</th>
    </thead>
    <tbody>
      <tr>
        <td>Chrome</td>
        <td>6 de Junho de 2011</td>
        <td>69</td>
      </tr>
      <tr>
        <td>Firefox</td>
        <td>19 de Setembro de 2016</td>
        <td>110</td>
      </tr>
      <tr>
        <td>Safari</td>
        <td>24 de Julho de 2012</td>
        <td>12.1</td>
      </tr>
      <tr>
        <td>Edge</td>
        <td>14 de Janeiro de 2020</td>
        <td>79</td>
      </tr>
    </tbody>
  </table>
</details>

## Dialog

Representa o estado transitório de um aplicação, na forma de uma pequena janela (caixa de diálogo), com a qual o usuário interaje a fim de executar uma tarefa simples ou obter alguma informação. Uma vez que a tarefa é concluída ou a informação é obtida, o elemento pode ser fechado automaticamente pela aplicação, ou fechado manualmente pelo usuário.

<div class="example">
  <button onclick="nativeDialog.showModal()">
    Abrir Dialog
  </button>
  <dialog id="nativeDialog">
    <p>Diálogo HTML Nativo</p>
    <form method="dialog">
      <button type="submit">Fechar</button>
    </form>
  </dialog>
</div>

``` html
<button onclick="nativeDialog.showModal()">
  Abrir Dialog
</button>
<dialog id="nativeDialog">
  <p>Diálogo HTML Nativo</p>
  <form method="dialog">
    <button type="submit">Fechar</button>
  </form>
</dialog>
```

[Edite esse código](https://pitsby-demo.compilorama.com/#!/components/vanilla/playground?tab=0&code=eyJ0ZW1wbGF0ZSI6IjxkaXYgY2xhc3M9XCJwbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyXCI%252BXG4gIDxidXR0b24gb25jbGljaz1cIm5hdGl2ZURpYWxvZy5zaG93TW9kYWwoKVwiPlxuICAgIEFicmlyIERpYWxvZ1xuICA8L2J1dHRvbj5cbiAgPGRpYWxvZyBpZD1cIm5hdGl2ZURpYWxvZ1wiPlxuICAgIDxwPkRp4WxvZ28gSFRNTCBOYXRpdm88L3A%252BXG4gICAgPGZvcm0gbWV0aG9kPVwiZGlhbG9nXCI%252BXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5GZWNoYXI8L2J1dHRvbj5cbiAgICA8L2Zvcm0%252BXG4gIDwvZGlhbG9nPlxuPC9kaXY%252BIiwiY29udHJvbGxlciI6ImZ1bmN0aW9uIGNvbnRyb2xsZXIoZWxlbWVudCkge31cblxucmV0dXJuIGNvbnRyb2xsZXI7Iiwic3R5bGVzIjoiLnBsYXlncm91bmQtcHJldmlldy1jb250YWluZXIgeyBwYWRkaW5nOiAzMHB4OyB9XG4ucGxheWdyb3VuZC1wcmV2aWV3LWNvbnRhaW5lciBkaWFsb2cgcCB7IG1hcmdpbi1ib3R0b206IDIwcHg7IH0ifQ%253D%253D). Documentação do [Dialog](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element).

<details>
  <summary>Suporte em navegadores</summary>
  <table class="browser-support-table">
    <caption>
      Fonte: 
      <a
        href="https://caniuse.com/?search=dialog" 
        rel="noreferrer noopener"
        target="_blank"
      >
        caniuse.com
      </a>
    </caption>
    <thead>
      <th>Navegador</th>
      <th>Desde</th>
      <th>Versão</th>
    </thead>
    <tbody>
      <tr>
        <td>Chrome</td>
        <td>25 de Agosto de 2014</td>
        <td>37</td>
      </tr>
      <tr>
        <td>Firefox</td>
        <td>7 de Março de 2022</td>
        <td>98</td>
      </tr>
      <tr>
        <td>Safari</td>
        <td>13 de Março de 2022</td>
        <td>15.4</td>
      </tr>
      <tr>
        <td>Edge</td>
        <td>14 de Janeiro de 2020</td>
        <td>79</td>
      </tr>
    </tbody>
  </table>
</details>

## Math

Usado para expressar notações matemáticas e peenchido com um conjunto específico de elementos de marcação especificados pela MathML *(Mathematical Markup Language)*.

<div class="example">
  <math>
    <mi>x</mi>
    <mo>=</mo>
    <mfrac>
      <mrow>
        <mo>-</mo>
        <mi>b</mi>
        <mo>±</mo>
        <msqrt>
          <msup>
            <mrow>
              <mi>b</mi>
            </mrow>
            <mn>2</mn>
          </msup>
          <mo>-</mo>
          <mi>4</mi>
          <mi>a</mi>
          <mi>c</mi>
        </msqrt>
      </mrow>
      <mrow>
        <mi>2</mi>
        <mi>a</mi>
      </mrow>
    </mfrac>
  </math>
</div>

``` html
<math>
  <mi>x</mi>
  <mo>=</mo>
  <mfrac>
    <mrow>
      <mo>-</mo>
      <mi>b</mi>
      <mo>±</mo>
      <msqrt>
        <msup>
          <mrow>
            <mi>b</mi>
          </mrow>
          <mn>2</mn>
        </msup>
        <mo>-</mo>
        <mi>4</mi>
        <mi>a</mi>
        <mi>c</mi>
      </msqrt>
    </mrow>
    <mrow>
      <mi>2</mi>
      <mi>a</mi>
    </mrow>
  </mfrac>
</math>
```

[Edite esse código](https://pitsby-demo.compilorama.com/#!/components/vanilla/playground?tab=0&code=eyJ0ZW1wbGF0ZSI6IjxkaXYgY2xhc3M9XCJwbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyXCI%252BXG4gIDxtYXRoPlxuICAgIDxtaT54PC9taT5cbiAgICA8bW8%252BPTwvbW8%252BXG4gICAgPG1mcmFjPlxuICAgICAgPG1yb3c%252BXG4gICAgICAgIDxtbz4tPC9tbz5cbiAgICAgICAgPG1pPmI8L21pPlxuICAgICAgICA8bW8%252BsTwvbW8%252BXG4gICAgICAgIDxtc3FydD5cbiAgICAgICAgICA8bXN1cD5cbiAgICAgICAgICAgIDxtcm93PlxuICAgICAgICAgICAgICA8bWk%252BYjwvbWk%252BXG4gICAgICAgICAgICA8L21yb3c%252BXG4gICAgICAgICAgICA8bW4%252BMjwvbW4%252BXG4gICAgICAgICAgPC9tc3VwPlxuICAgICAgICAgIDxtbz4tPC9tbz5cbiAgICAgICAgICA8bWk%252BNDwvbWk%252BXG4gICAgICAgICAgPG1pPmE8L21pPlxuICAgICAgICAgIDxtaT5jPC9taT5cbiAgICAgICAgPC9tc3FydD5cbiAgICAgIDwvbXJvdz5cbiAgICAgIDxtcm93PlxuICAgICAgICA8bWk%252BMjwvbWk%252BXG4gICAgICAgIDxtaT5hPC9taT5cbiAgICAgIDwvbXJvdz5cbiAgICA8L21mcmFjPlxuICA8L21hdGg%252BXG48L2Rpdj4iLCJjb250cm9sbGVyIjoiZnVuY3Rpb24gY29udHJvbGxlcihlbGVtZW50KSB7fVxuXG5yZXR1cm4gY29udHJvbGxlcjsiLCJzdHlsZXMiOiIucGxheWdyb3VuZC1wcmV2aWV3LWNvbnRhaW5lciB7IHBhZGRpbmc6IDMwcHg7IH0ifQ%253D%253D). Documentação do [Math](https://html.spec.whatwg.org/multipage/embedded-content-other.html#mathml).

<details>
  <summary>Suporte em navegadores</summary>
  <table class="browser-support-table">
    <caption>
      Fonte: 
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/MathML#browser_compatibility" 
        rel="noreferrer noopener"
        target="_blank"
      >
        developer.mozilla.org
      </a>
    </caption>
    <thead>
      <th>Navegador</th>
      <th>Desde</th>
      <th>Versão</th>
    </thead>
    <tbody>
      <tr>
        <td>Chrome</td>
        <td>10 de Janeiro de 2023</td>
        <td>109</td>
      </tr>
      <tr>
        <td>Firefox</td>
        <td>22 de Março de 2011</td>
        <td>4</td>
      </tr>
      <tr>
        <td>Safari</td>
        <td>20 de Julho de 2011</td>
        <td>5.1</td>
      </tr>
      <tr>
        <td>Edge</td>
        <td>12 de Janeiro de 2023</td>
        <td>109</td>
      </tr>
    </tbody>
  </table>
</details>

## Meter

Representa a medida corrente dentro de uma variação de valores pré determinados. Por exemplo, consumo de armazenamento, intervalo de confiança estatística, desempenho, entre outros casos.

<div class="example">
  <label for="fuel">Nível de Combustível</label>
  <meter
    id="fuel"
    min="0"
    max="100"
    low="10"
    high="80"
    optimum="85"
    value="50"
  >
    em 50/100
  </meter>
</div>

``` html
<label for="fuel">
  Nível de Combustível
</label>
<meter
  id="fuel"
  min="0"
  max="100"
  low="10"
  high="80"
  optimum="85"
  value="50"
>
  em 50/100
</meter>
```

[Edite esse código](https://pitsby-demo.compilorama.com/#!/components/vanilla/playground?tab=0&code=eyJ0ZW1wbGF0ZSI6IjxkaXYgY2xhc3M9XCJwbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyXCI%252BXG4gIDxsYWJlbCBmb3I9XCJmdWVsXCI%252BXG4gICAgTu12ZWwgZGUgQ29tYnVzdO12ZWxcbiAgPC9sYWJlbD5cbiAgPG1ldGVyXG4gICAgaWQ9XCJmdWVsXCJcbiAgICBtaW49XCIwXCJcbiAgICBtYXg9XCIxMDBcIlxuICAgIGxvdz1cIjEwXCJcbiAgICBoaWdoPVwiODBcIlxuICAgIG9wdGltdW09XCI4NVwiXG4gICAgdmFsdWU9XCI1MFwiXG4gID5cbiAgICBlbSA1MC8xMDBcbiAgPC9tZXRlcj5cbjwvZGl2PiIsImNvbnRyb2xsZXIiOiJmdW5jdGlvbiBjb250cm9sbGVyKGVsZW1lbnQpIHt9XG5cbnJldHVybiBjb250cm9sbGVyOyIsInN0eWxlcyI6Ii5wbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyIHtcbiAgcGFkZGluZzogMzBweDtcbn1cbi5wbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC42NjY2NjY2NjY2NjY2NjdlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59In0%253D). Documentação do [Meter](https://html.spec.whatwg.org/multipage/form-elements.html#the-meter-element).

<details>
  <summary>Suporte em navegadores</summary>
  <table class="browser-support-table">
    <caption>
      Fonte: 
      <a
        href="https://caniuse.com/?search=meter" 
        rel="noreferrer noopener"
        target="_blank"
      >
        caniuse.com
      </a>
    </caption>
    <thead>
      <th>Navegador</th>
      <th>Desde</th>
      <th>Versão</th>
    </thead>
    <tbody>
      <tr>
        <td>Chrome</td>
        <td>1 de Dezembro de 2010</td>
        <td>8</td>
      </tr>
      <tr>
        <td>Firefox</td>
        <td>27 de Agosto de 2012</td>
        <td>16</td>
      </tr>
      <tr>
        <td>Safari</td>
        <td>24 de Julho de 2012</td>
        <td>6</td>
      </tr>
      <tr>
        <td>Edge</td>
        <td>11 de Novembro de 2015</td>
        <td>13</td>
      </tr>
    </tbody>
  </table>
</details>

## Progress

Representa o estado atual relacionado ao progresso de uma atividade.

<div class="example">
  <label for="reviewedArticles">Artigos revisados</label>
  <progress id="reviewedArticles" min="0" max="100" value="70">70%</progress>
</div>

``` html
<label for="reviewedArticles">
  Artigos revisados
</label>
<progress
  id="reviewedArticles"
  min="0"
  max="100"
  value="70"
>
  70%
</progress>
```

[Edite esse código](https://pitsby-demo.compilorama.com/#!/components/vanilla/playground?tab=0&code=eyJ0ZW1wbGF0ZSI6IjxkaXYgY2xhc3M9XCJwbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyXCI%252BXG4gIDxsYWJlbCBmb3I9XCJyZXZpZXdlZEFydGljbGVzXCI%252BXG4gICAgQXJ0aWdvcyByZXZpc2Fkb3NcbiAgPC9sYWJlbD5cbiAgPHByb2dyZXNzXG4gICAgaWQ9XCJyZXZpZXdlZEFydGljbGVzXCJcbiAgICBtaW49XCIwXCJcbiAgICBtYXg9XCIxMDBcIlxuICAgIHZhbHVlPVwiNzBcIlxuICA%252BXG4gICAgNzAlXG4gIDwvcHJvZ3Jlc3M%252BXG48L2Rpdj4iLCJjb250cm9sbGVyIjoiZnVuY3Rpb24gY29udHJvbGxlcihlbGVtZW50KSB7fVxuXG5yZXR1cm4gY29udHJvbGxlcjsiLCJzdHlsZXMiOiIucGxheWdyb3VuZC1wcmV2aWV3LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG4ucGxheWdyb3VuZC1wcmV2aWV3LWNvbnRhaW5lciBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuNjY2NjY2NjY2NjY2NjY3ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSJ9). Documentação do [Progress](https://html.spec.whatwg.org/multipage/form-elements.html#the-progress-element).

<details>
  <summary>Suporte em navegadores</summary>
  <table class="browser-support-table">
    <caption>
      Fonte: 
      <a
        href="https://caniuse.com/?search=progress" 
        rel="noreferrer noopener"
        target="_blank"
      >
        caniuse.com
      </a>
    </caption>
    <thead>
      <th>Navegador</th>
      <th>Desde</th>
      <th>Versão</th>
    </thead>
    <tbody>
      <tr>
        <td>Chrome</td>
        <td>1 de Dezembro de 2010</td>
        <td>8</td>
      </tr>
      <tr>
        <td>Firefox</td>
        <td>15 de Agosto de 2011</td>
        <td>6</td>
      </tr>
      <tr>
        <td>Safari</td>
        <td>24 de Julho de 2012</td>
        <td>6</td>
      </tr>
      <tr>
        <td>Edge</td>
        <td>28 de Julho de 2015</td>
        <td>12</td>
      </tr>
    </tbody>
  </table>
</details>

HTML é uma tecnologia envolvente, tem evoluído rapidamente e, acima de tudo, tem me mostrado que já pode estar disponível há um bom tempo, aquele componente que eu pensaria em construir do zero.
