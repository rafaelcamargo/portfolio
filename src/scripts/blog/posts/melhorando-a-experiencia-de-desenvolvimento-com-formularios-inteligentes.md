title: Melhorando a experiência de desenvolvimento com formulários inteligentes
date: 2021-10-01
description: A partir de um determinado momento na minha carreira, eu comecei a sonhar com duas melhorias no HTML que me deixariam muito, muito, muito feliz.
keywords: formulários, inteligentes, experiência, desenvolvimento, react, vue
lang: pt-BR

---

Toda vez que eu consulto a documentação de uma biblioteca que promete facilitar o desenvolvimento de formulários, tenho uns três tipos diferentes de decepção. Não consigo acreditar que alguém olhe para a solução proposta e ache que ela realmente vai melhorar a experiência de desenvolvimento.

Eu poderia citar alguns motivos como a contra intuitividade de algumas APIs, a quantidade de código que ainda precisa ser escrito, a dificuldade no reuso do código, entre outros. Mas a causa raiz por trás de todos esses motivos é a mesma. A falta de ousadia na hora de projetar a solução. Sim, na minha opinião, as bibliotecas disponíveis atualmente parecem partir de uma lugar muito a frente de onde deveriam, ignoram o "momento loucura", o momento "e se a gente experimentasse algo completamente diferente". As bibliotecas parecem ter admitido que desenvolver um formulário é chato, então não conseguem encontrar uma maneira de superar isso.

A partir de um determinado momento na minha carreira, eu comecei a sonhar com duas melhorias no HTML que me deixariam muito, muito, muito feliz.

A primeira delas diz respeito aos elementos que controlam dados de um formulário. Ou seja, `<input>`, `<select>` e `<textarea>`. O meu desejo é que eles tivessem uma propriedade chamada `validations`. Ela aceitaria um Array de objetos, cada um contendo os atributos `isValid` - função que retornaria um valor Booleano - e `errorMessage`, uma String a ser exibida no caso de `isValid` retornar falso. Ou seja, eu poderia efetuar diversas validações contra um campo de formulário e definir uma mensagem para cada um dos possíveis erros.

A segunda melhoria seria no elemento `<form>`. Em tempos de *Single Page Applications*, seria incrível se esse elemento oferecesse as propriedades `successMessage` e `errorMessage`. Em caso de sucesso, um *toast* poderia ser exibido na tela com a mensagem de sucesso. Caso a requisição falhasse, um *banner* ao topo do formulário exibiria a mensagem de erro junto com um botão que permitisse o reenvio dos dados.

Traduzindo o meu sonho para HTML, teríamos algo mais ou menos assim:

``` html
<form
  onSubmit="() => axios.post(...)"
  successMessage="Tudo certo, obrigado!"
  errorMessage="Não foi possível enviar os dados. Por favor, tente novamente."
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

Durante três anos, minhas cartas para o Papai Noel imploraram para que esse sonho se torna-se realidade. Até que no final de 2020, com a certeza que o velhinho iria me ignorar mais uma vez, decidi arregaçar as mangas e realizá-lo na marra.

Esse foi o principal motivo por trás da criação do [Taslonic](https://taslonic.com). Eu o criei com a intenção de me livrar de tarefas ordinárias e assim poder focar em coisas extraordinárias. Ninguém merece perder horas preciosas da vida tendo que tratar os mesmos casos de uso em todo novo formulário que a aplicação precisar. Além do desperdício de tempo, a implementação repetitiva desses casos de uso - feedbacks de sucesso/erro/processamento - leva a inevitáveis inconsistências na experiência de uso da aplicação, pois oras serão implementados de uma maneira, oras de outra. Isso para não falar das vezes em que alguns casos de uso são esquecidos. Quem nunca ficou diante de um *loader* que nunca sumiu da tela mesmo após a requisição já ter falhado?

Experimente o comportamento desse formulário feito com Taslonic simulando a inscrição numa newsletter.

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@glorious/taslonic/taslonic.css">
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@glorious/taslonic/vue/index.js"></script>
<script src="https://cdn.jsdelivr.net/npm/axios@0.21.1/dist/axios.min.js"></script>
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
            <t-field label="Email Address" block>
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
<script src="../scripts/smart-form.js"></script>

Aqui está tudo que precisei implementar para criar o formulário:

- Validação de formato de email.
- Requisição feita na submissão do formulário.
- Reset dos dados no sucesso do envio.

Abaixo, tudo que o formulário me entrega sem que eu precisasse escrever uma única linha de código:

1. Exibe um asterisco nos labels de campos que são obrigatórios.
2. Exibe a mensagem de erro sob um campo inválido só depois que o usuário desfoca o campo ao menos uma vez, evitando que a mensagem de erro seja exibida enquanto o campo ainda está sendo preenchido.
3. Exibe a mensagem de erro de todos os campos inválidos caso o usuário submeta o formulário sem preenchê-los corretamente.
4. Substitui o texto do botão de envio por um *loader* durante a requisição e o retorna ao estado inicial quando a requisição é concluída.
5. Desabilita o botão de envio durante o processamento da requisição para evitar múltiplos envios.
6. Lança um toast contendo uma mensagem personalizada no sucesso do envio.
7. Exibe um banner ao topo do formulário acompanhado de um botão que permite ao usuário enviar os dados novamente caso a requisição falhe.

**Foram sete casos de uso que não precisei implementar e, consequentemente, testar**. Curioso para ver o código? Aqui vão alguns links:

<ul>
  <li>
  <a href="https://components.taslonic.com/#!/components/vue/playground?tab=2&code=eyJ0ZW1wbGF0ZSI6Ijx0LXJvdyBhbGlnbj1cImNlbnRlclwiPlxuICA8dC1jb2wgbWQ9XCI0XCI%252BXG4gICAgPHQtZm9ybVxuICAgICAgOm9uLXN1Ym1pdD1cIm9uU3VibWl0XCJcbiAgICAgIDpvbi1zdWJtaXQtc3VjY2Vzcz1cIm9uU3VibWl0U3VjY2Vzc1wiXG4gICAgICBzdWJtaXQtc3VjY2Vzcy10aXRsZT1cIkdvb2Qgam9iIVwiXG4gICAgICBzdWJtaXQtc3VjY2Vzcy1tZXNzYWdlPVwiRm9ybSBzdWNjZXNzZnVsbHkgc2VudC5cIj5cbiAgICAgIDx0LXJvdz5cbiAgICAgICAgPHQtY29sPlxuICAgICAgICAgIDx0LWZpZWxkIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiIGJsb2NrPlxuICAgICAgICAgICAgPHQtaW5wdXQgdi1tb2RlbD1cImRhdGEuZW1haWxcIiA6dmFsaWRhdGlvbnM9XCJlbWFpbFZhbGlkYXRpb25zXCIgYmxvY2sgcmVxdWlyZWQgLz5cbiAgICAgICAgICA8L3QtZmllbGQ%252BXG4gICAgICAgIDwvdC1jb2w%252BXG4gICAgICA8L3Qtcm93PlxuICAgICAgPHQtcm93PlxuICAgICAgICA8dC1jb2w%252BXG4gICAgICAgICAgPHQtYnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB0aGVtZT1cInByaW1hcnlcIiBibG9jaz5cbiAgICAgICAgICAgIFN1YnNjcmliZVxuICAgICAgICAgIDwvdC1idXR0b24%252BXG4gICAgICAgIDwvdC1jb2w%252BXG4gICAgICA8L3Qtcm93PlxuICAgIDwvdC1mb3JtPlxuICA8L3QtY29sPlxuPC90LXJvdz5cbiIsImNvbnRyb2xsZXIiOiJyZXR1cm4ge1xuICBkYXRhKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IHt9LFxuICAgICAgdmFsaWRFbWFpbFJlZ2V4OiBuZXcgUmVnRXhwKC9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXSskLywgJ2knKSxcbiAgICAgIGVtYWlsVmFsaWRhdGlvbnM6IFt7XG4gICAgICAgIGlzVmFsaWQ6IHZhbHVlID0%252BIHRoaXMudmFsaWRFbWFpbFJlZ2V4LnRlc3QodmFsdWUpLFxuICAgICAgICBlcnJvck1lc3NhZ2U6ICdQbGVhc2UsIGVudGVyIGEgdmFsaWQgZW1haWwuJ1xuICAgICAgfV1cbiAgICB9O1xuICB9LFxuICBcIm1ldGhvZHNcIjoge1xuICAgIG9uU3VibWl0KCl7XG4gICAgICAvLyBNYWtlIGEgbWlzdGFrZSBvbiB0aGUgdXJsIGJlbG93IHRvIHNpbXVsYXRlIGFuIGVycm9yXG4gICAgICByZXR1cm4gYXhpb3MucG9zdCgnaHR0cHM6Ly9hcHAuZmFrZWpzb24uY29tL3EnLCB7XG4gICAgICAgIHRva2VuOiAnX1diT0Z1TDFUdE5RNUxFbTBvdC1uUScsXG4gICAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgb25TdWJtaXRTdWNjZXNzKCl7XG4gICAgICB0aGlzLmRhdGEgPSB7IGVtYWlsOiAnJyB9O1xuICAgIH1cbiAgfVxufTsiLCJzdHlsZXMiOiJcbiJ9&source=edit-link" target="_blank">
      Formulário inteligente com Vue
    </a>
  </li>
  <li>
    <a href="https://components.taslonic.com/#!/components/react/playground?tab=1&code=eyJ0ZW1wbGF0ZSI6IlxuIiwiY29udHJvbGxlciI6ImZ1bmN0aW9uKCkge1xuICBjb25zdCB7IHVzZVN0YXRlIH0gPSBSZWFjdDtcbiAgY29uc3QgeyBSb3csIENvbCwgRm9ybSwgRmllbGQsIElucHV0LCBCdXR0b24gfSA9IHRhc2xvbmljUmVhY3Q7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGluaXRpYWxEYXRhID0geyBlbWFpbDogJycgfVxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxEYXRhKTtcbiAgICBjb25zdCB2YWxpZEVtYWlsUmVnZXggPSBuZXcgUmVnRXhwKC9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXSskLywgJ2knKTtcbiAgICBjb25zdCBoYW5kbGVEYXRhQ2hhbmdlID0gKHsgdGFyZ2V0OiB7IG5hbWUsIHZhbHVlIH0gfSkgPT4gc2V0RGF0YShwcmV2RGF0YSA9PiAoeyAuLi5wcmV2RGF0YSwgW25hbWVdOiB2YWx1ZX0pKTtcbiAgICBjb25zdCBvblN1Ym1pdCA9ICgpID0%252BIHtcbiAgICAgIC8vIFVuY29tbWVudCB0aGUgbGluZSBiZWxvdyB0byBzaW11bGF0ZSBhIHJlcXVlc3QgZXJyb3JcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiBzZXRUaW1lb3V0KHJlamVjdCwgMTUwMCkpXG4gICAgICByZXR1cm4gYXhpb3MucG9zdCgnaHR0cHM6Ly9hcHAuZmFrZWpzb24uY29tL3EnLCB7XG4gICAgICAgIHRva2VuOiAnX1diT0Z1TDFUdE5RNUxFbTBvdC1uUScsXG4gICAgICAgIGRhdGEsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJvdyBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICA8Q29sIG1kPVwiNFwiPlxuICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgICAgICAgICBvblN1Ym1pdFN1Y2Nlc3M9eygpID0%252BIHNldERhdGEoaW5pdGlhbERhdGEpfVxuICAgICAgICAgICAgc3VibWl0U3VjY2Vzc1RpdGxlPVwiR29vZCBqb2IhXCJcbiAgICAgICAgICAgIHN1Ym1pdFN1Y2Nlc3NNZXNzYWdlPVwiWW91J3JlIG5vdyBzdWJzY3JpYmVkXCJcbiAgICAgICAgICA%252BXG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIiBibG9jaz5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZURhdGFDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zPXtbe1xuICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ6IHZhbHVlID0%252BIHZhbGlkRW1haWxSZWdleC50ZXN0KHZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdQbGVhc2UsIGVudGVyIGEgdmFsaWQgZW1haWwuJ1xuICAgICAgICAgICAgICAgICAgICB9XX1cbiAgICAgICAgICAgICAgICAgICAgYmxvY2tcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIC8%252BXG4gICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgPC9Db2w%252BXG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxSb3c%252BXG4gICAgICAgICAgICAgIDxDb2w%252BXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdGhlbWU9XCJwcmltYXJ5XCIgYmxvY2s%252BXG4gICAgICAgICAgICAgICAgICBTdWJzY3JpYmVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Db2w%252BXG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L0Zvcm0%252BXG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c%252BXG4gICAgKTtcbiAgfTtcbn0iLCJzdHlsZXMiOiJcbiJ9&source=edit-link" target="_blank">
      Formulário inteligente com React
    </a>
  </li>
  <li>
    <a href="https://components.taslonic.com/#!/components/vue/form" target="_blank">
      Documentação Taslonic: Vue
    </a>
  </li>
  <li>
    <a href="https://components.taslonic.com/#!/components/react/form" target="_blank">
      Documentação Taslonic: React
    </a>
  </li>
</ul>

Se gostou do que viu aqui, considere estrelar o repositório do projeto no [Github](https://github.com/glorious-codes/glorious-taslonic) para que mais pessoas conheçam o Taslonic e passem a construir formulários perdendo menos tempo.
