title: Melhorando a experiência de desenvolvimento com formulários inteligentes
date: 2021-10-01
description: A partir de um determinado momento na minha carreira, eu comecei a sonhar com duas melhorias no HTML que me deixariam muito, muito, muito feliz.
keywords: formulários, inteligentes, experiência, desenvolvimento, react, vue
lang: pt-BR

---

Toda vez que eu consulto a documentação de uma biblioteca que promete facilitar o desenvolvimento de formulários, tenho uns três tipos diferentes de decepção. Não consigo acreditar que alguém olhe para a solução proposta e ache que ela realmente vai melhorar a experiência de desenvolvimento.

Eu poderia citar alguns motivos como a contra intuitividade de algumas APIs, a quantidade de código que ainda precisa ser escrito, a dificuldade no reuso do código, entre outros. Mas a causa raiz por trás de todos esses motivos é a mesma. A falta de ousadia na hora de projetar a solução. Sim, na minha opinião, as bibliotecas disponíveis atualmente parecem partir de uma lugar muito a frente de onde deveriam. Ignoram o "momento loucura", o momento "e se a gente experimentasse algo completamente diferente". As bibliotecas parecem ter admitido que desenvolver um formulário é chato, então não conseguem encontrar uma maneira de superar isso.

A partir de um determinado momento na minha carreira, eu comecei a sonhar com duas melhorias no HTML que me deixariam muito, muito, muito feliz.

A primeira delas diz respeito aos elementos que controlam dados de um formulário. Ou seja, `<input>`, `<select>` e `<textarea>`. O meu desejo era que eles tivessem uma propriedade chamada `validations`. Ela aceitaria um Array de objetos, cada um contendo os atributos `isValid` (função que retornaria um valor Booleano) e `errorMessage` (String a ser exibida no caso de `isValid` retornar falso). Ou seja, eu poderia efetuar diversas validações contra um campo de formulário e definir uma mensagem para cada um dos possíveis erros.

A segunda melhoria seria no elemento `<form>`. Em tempos de *Single Page Applications*, seria incrível se esse elemento oferecesse as propriedades `successMessage` e `errorMessage`. Em caso de sucesso, um *toast* poderia ser exibido na tela com a mensagem de sucesso. Caso a requisição falhasse, um *banner* ao topo do formulário exibiria a mensagem de erro junto com um botão que permitisse o reenvio dos dados.

Traduzindo o meu sonho para HTML, teríamos algo mais ou menos assim:

``` html
<form
  onsubmit="() => axios.post(...)"
  success-message="Tudo certo, obrigado!"
  error-message="Não foi possível enviar os dados. Por favor, tente novamente."
>
  <input
    aria-label="Digite uma linguagem de programação"
    validations="[{ isValid: value => value === 'JavaScript', errorMessage: 'Por favor, escolha uma mais legal.' }]"
    placeholder="Digite uma linguagem de programação"
  />
  <button type="submit">
    Enviar
  </button>
</form>
```

Durante três anos, minhas cartas para o Papai Noel imploraram para que esse sonho se tornasse realidade. Até que no final de 2020, com a certeza que o velhinho iria me ignorar mais uma vez, decidi arregaçar as mangas e realizá-lo na marra.

Esse foi o principal motivo por trás da criação do [Taslonic](https://taslonic.com). Eu o criei com a intenção de me livrar de tarefas ordinárias e assim poder focar em coisas extraordinárias. Ninguém merece perder horas preciosas da vida tendo que tratar os mesmos casos de uso em todo novo formulário que a aplicação precisar. Além do desperdício de tempo, a implementação repetitiva desses casos de uso (feedbacks de sucesso/erro/processamento) leva a inevitáveis inconsistências na experiência de uso da aplicação, pois oras serão implementados de uma maneira, oras de outra. Isso para não falar das vezes em que alguns casos de uso são esquecidos. Quem nunca ficou diante de um *loader* que nunca sumiu da tela mesmo após a requisição já ter falhado?

Experimente o comportamento desse formulário feito com Taslonic simulando a inscrição numa newsletter.

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@glorious/taslonic-vue/dist/taslonic.css">
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@glorious/taslonic-vue/dist/index.js"></script>
<div data-root style="margin-bottom: 100px">
  <t-row align="center" offset-xs="10">
    <t-col sm="8">
      <t-form
        :on-submit="onSubmit"
        :on-submit-success="onSubmitSuccess"
        submit-success-title="Tudo certo!"
        submit-success-message="Obrigado por se inscrever.">
        <t-row>
          <t-col>
            <t-field label="Endereço de email" block>
              <t-input v-model="data.email" :validations="emailValidations" block required />
            </t-field>
          </t-col>
        </t-row>
        <t-row>
          <t-col>
            <t-button type="submit" theme="primary" block>
              Inscrever-se
            </t-button>
          </t-col>
        </t-row>
      </t-form>
    </t-col>
  </t-row>
</div>
<script src="../../scripts/smart-form.js"></script>

Aqui está tudo que precisei implementar para criar o formulário:

- Validação de formato de email.
- Requisição feita na submissão do formulário.
- Reset dos dados no sucesso do envio.

Abaixo, tudo que o formulário me entregou sem que eu precisasse escrever uma única linha de código:

1. Exibe um asterisco nos labels de campos que são obrigatórios.
2. Exibe a mensagem de erro sob um campo inválido só depois que o usuário desfoca o campo ao menos uma vez, evitando que a mensagem de erro seja exibida enquanto o campo ainda está sendo preenchido.
3. Exibe as mensagens de erro de todos os campos inválidos caso o usuário submeta o formulário sem preenchê-los corretamente, e foca o primeiro campo inválido.
4. Substitui o texto do botão de envio por um *loader* durante a requisição e o retorna ao estado inicial quando a requisição é concluída.
5. Desabilita o botão de envio durante o processamento da requisição para evitar múltiplos envios.
6. Lança um toast contendo uma mensagem personalizada no sucesso do envio.
7. Exibe um banner ao topo do formulário acompanhado de um botão que permite ao usuário enviar os dados novamente caso a requisição falhe.

**Foram sete casos de uso que não precisei implementar e, consequentemente, testar**. Curioso para ver o código? Aqui vão alguns links:

<ul>
  <li>
  <a href="https://components.taslonic.com/#!/components/vue/playground?tab=1&code=eyJ0ZW1wbGF0ZSI6Ijx0LXJvdyBhbGlnbj1cImNlbnRlclwiPlxuICA8dC1jb2wgbWQ9XCI0XCI%252BXG4gICAgPHQtZm9ybVxuICAgICAgOm9uLXN1Ym1pdD1cIm9uU3VibWl0XCJcbiAgICAgIDpvbi1zdWJtaXQtc3VjY2Vzcz1cIm9uU3VibWl0U3VjY2Vzc1wiXG4gICAgICBzdWJtaXQtc3VjY2Vzcy10aXRsZT1cIlR1ZG8gY2VydG8hXCJcbiAgICAgIHN1Ym1pdC1zdWNjZXNzLW1lc3NhZ2U9XCJPYnJpZ2FkbyBwb3Igc2UgaW5zY3JldmVyLlwiPlxuICAgICAgPHQtcm93PlxuICAgICAgICA8dC1jb2w%252BXG4gICAgICAgICAgPHQtZmllbGQgbGFiZWw9XCJFbmRlcmXnbyBkZSBlbWFpbFwiIGJsb2NrPlxuICAgICAgICAgICAgPHQtaW5wdXQgdi1tb2RlbD1cImRhdGEuZW1haWxcIiA6dmFsaWRhdGlvbnM9XCJlbWFpbFZhbGlkYXRpb25zXCIgYmxvY2sgcmVxdWlyZWQgLz5cbiAgICAgICAgICA8L3QtZmllbGQ%252BXG4gICAgICAgIDwvdC1jb2w%252BXG4gICAgICA8L3Qtcm93PlxuICAgICAgPHQtcm93PlxuICAgICAgICA8dC1jb2w%252BXG4gICAgICAgICAgPHQtYnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB0aGVtZT1cInByaW1hcnlcIiBibG9jaz5cbiAgICAgICAgICAgIEluc2NyZXZlci1zZVxuICAgICAgICAgIDwvdC1idXR0b24%252BXG4gICAgICAgIDwvdC1jb2w%252BXG4gICAgICA8L3Qtcm93PlxuICAgIDwvdC1mb3JtPlxuICA8L3QtY29sPlxuPC90LXJvdz5cbiIsImNvbnRyb2xsZXIiOiJyZXR1cm4ge1xuICBkYXRhKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IHt9LFxuICAgICAgdmFsaWRFbWFpbFJlZ2V4OiBuZXcgUmVnRXhwKC9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXSskLywgJ2knKSxcbiAgICAgIGVtYWlsVmFsaWRhdGlvbnM6IFt7XG4gICAgICAgIGlzVmFsaWQ6IHZhbHVlID0%252BIHRoaXMudmFsaWRFbWFpbFJlZ2V4LnRlc3QodmFsdWUpLFxuICAgICAgICBlcnJvck1lc3NhZ2U6ICdJbnNpcmEgdW0gZW5kZXJl528gZGUgZW1haWwgduFsaWRvLidcbiAgICAgIH1dXG4gICAgfTtcbiAgfSxcbiAgXCJtZXRob2RzXCI6IHtcbiAgICBvblN1Ym1pdCgpe1xuICAgICAgLy8gTWFrZSBhIG1pc3Rha2Ugb24gdGhlIHVybCBiZWxvdyB0byBzaW11bGF0ZSBhbiBlcnJvclxuICAgICAgcmV0dXJuIGF4aW9zLnBvc3QoJ2h0dHBzOi8vYXBwLmZha2Vqc29uLmNvbS9xJywge1xuICAgICAgICB0b2tlbjogJ19XYk9GdUwxVHROUTVMRW0wb3QtblEnLFxuICAgICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uU3VibWl0U3VjY2Vzcygpe1xuICAgICAgdGhpcy5kYXRhID0geyBlbWFpbDogJycgfTtcbiAgICB9XG4gIH1cbn07Iiwic3R5bGVzIjoiXG4ifQ%253D%253D&source=edit-link" target="_blank">
      Formulário inteligente com Vue
    </a>
  </li>
  <li>
    <a href="https://components.taslonic.com/#!/components/react/playground?tab=1&code=eyJ0ZW1wbGF0ZSI6IlxuIiwiY29udHJvbGxlciI6ImZ1bmN0aW9uKCkge1xuICBjb25zdCB7IHVzZVN0YXRlIH0gPSBSZWFjdDtcbiAgY29uc3QgeyBSb3csIENvbCwgRm9ybSwgRmllbGQsIElucHV0LCBCdXR0b24gfSA9IHRhc2xvbmljUmVhY3Q7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGluaXRpYWxEYXRhID0geyBlbWFpbDogJycgfVxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxEYXRhKTtcbiAgICBjb25zdCB2YWxpZEVtYWlsUmVnZXggPSBuZXcgUmVnRXhwKC9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXSskLywgJ2knKTtcbiAgICBjb25zdCBoYW5kbGVEYXRhQ2hhbmdlID0gKHsgdGFyZ2V0OiB7IG5hbWUsIHZhbHVlIH0gfSkgPT4gc2V0RGF0YShwcmV2RGF0YSA9PiAoeyAuLi5wcmV2RGF0YSwgW25hbWVdOiB2YWx1ZX0pKTtcbiAgICBjb25zdCBvblN1Ym1pdCA9ICgpID0%252BIHtcbiAgICAgIC8vIE1ha2UgYSBtaXN0YWtlIG9uIHRoZSB1cmwgYmVsb3cgdG8gc2ltdWxhdGUgYW4gZXJyb3JcbiAgICAgIHJldHVybiBheGlvcy5wb3N0KCdodHRwczovL2FwcC5mYWtlanNvbi5jb20vcScsIHtcbiAgICAgICAgdG9rZW46ICdfV2JPRnVMMVR0TlE1TEVtMG90LW5RJyxcbiAgICAgICAgZGF0YSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Um93IGFsaWduPVwiY2VudGVyXCI%252BXG4gICAgICAgIDxDb2wgbWQ9XCI0XCI%252BXG4gICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgIG9uU3VibWl0PXtvblN1Ym1pdH1cbiAgICAgICAgICAgIG9uU3VibWl0U3VjY2Vzcz17KCkgPT4gc2V0RGF0YShpbml0aWFsRGF0YSl9XG4gICAgICAgICAgICBzdWJtaXRTdWNjZXNzVGl0bGU9XCJUdWRvIGNlcnRvIVwiXG4gICAgICAgICAgICBzdWJtaXRTdWNjZXNzTWVzc2FnZT1cIk9icmlnYWRvIHBvciBzZSBpbnNjcmV2ZXIuXCJcbiAgICAgICAgICA%252BXG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIkVuZGVyZedvIGRlIGVtYWlsXCIgYmxvY2s%252BXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEYXRhQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz17W3tcbiAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkOiB2YWx1ZSA9PiB2YWxpZEVtYWlsUmVnZXgudGVzdCh2YWx1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnSW5zaXJhIHVtIGVuZGVyZedvIGRlIGVtYWlsIHbhbGlkby4nXG4gICAgICAgICAgICAgICAgICAgIH1dfVxuICAgICAgICAgICAgICAgICAgICBibG9ja1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB0aGVtZT1cInByaW1hcnlcIiBibG9jaz5cbiAgICAgICAgICAgICAgICAgIEluc2NyZXZlci1zZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9Db2w%252BXG4gICAgICA8L1Jvdz5cbiAgICApO1xuICB9O1xufSIsInN0eWxlcyI6IlxuIn0%253D&source=edit-link" target="_blank">
      Formulário inteligente com React
    </a>
  </li>
  <li>
    <a href="https://taslonic.com/vue" target="_blank">
      Documentação Taslonic: Vue
    </a>
  </li>
  <li>
    <a href="https://taslonic.com/react" target="_blank">
      Documentação Taslonic: React
    </a>
  </li>
</ul>

Se gostou do que viu aqui, considere estrelar o repositório do projeto no [Github](https://github.com/glorious-codes/glorious-taslonic) para que mais pessoas conheçam o Taslonic e passem a construir formulários perdendo menos tempo.
