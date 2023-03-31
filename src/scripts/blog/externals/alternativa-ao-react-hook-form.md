title: Alternativa ao React Hook Form
description: Sempre que ouço sobre uma biblioteca que pretende melhorar a experiência de desenvolvimento de formulários acabo depositando mais expectativas do que deveria e sempre me decepciono.
keywords: React Hook Form, Taslonic, desenvolvimento, experiência
date: 2022-01-28
lang: pt-BR

---

Se você está lendo essa frase, não deve ter tido boas experiências com o React Hook Form. Somos dois. Sempre que ouço sobre uma biblioteca que pretende melhorar a experiência de desenvolvimento de formulários acabo depositando mais expectativas do que deveria e me decepciono.

Ao experimentar o React Hook Forms, percebi que seu escopo era mais limitado do que eu esperava. Como diz o seu slogan, _Simple React forms validation_, o objetivo da biblioteca é apenas facilitar a validação dos campos. Na prática, o resultado que você obtém ao desenvolver um pequeno formulário que colete emails para uma newsletter, por exemplo, é o seguinte:

``` jsx
import React from 'react';
import { useForm } from "react-hook-form";

export const NewsletterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const validEmailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/, 'i');
  const onSubmit = formData => console.log(formData);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input id="name" {...register("name", { required: true })} />
      {errors.name?.type === 'required' && <span>Required</span>}
      <label htmlFor="email">Email</label>
      <input id="email" {...register("email", { required: true, validate: value => validEmailRegex.test(value) })} />
      {errors.email?.type === 'required' && <span>Required</span>}
      {errors.email?.type === 'validate' && <span>Enter a valid email</span>}
      <button type="submit">Submit</button>
    </form>
  );
};
```

Os pontos que não me apeteceram nessa abordagem foram:
1. Além de importar o `react-hook-form` no meu módulo, preciso ainda extrair as funções utilitárias do `useForm` hook.
2. O listener de submit precisa ser intermediado pelo método `handleSubmit`.
3. Preciso "registrar" manualmente todos os campos do meu formulário ao invés de me preocupar apenas com as validações de cada um deles.
4. Muito código escrito para controlar a visibilidade de cada uma das mensagens de erro.

Trocando o React Hook Form pelo **Taslonic**, esse mesmo formulário seria escrito da seguinte maneira:

``` jsx
import React, { useState } from 'react';
import { Form, Field, Input, Button } from '@glorious/taslonic-react';

export const NewsletterForm = () => {
  const [data, setData] = useState({})
  const validEmailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/, 'i');
  const emailValidations = [{ isValid: value => validEmailRegex.test(value), errorMessage: 'Enter a valid email'}]
  const handleFieldChange = ({ target: { name, value } }) => setData(prevData => ({ ...prevData, [name]: value }))
  const onSubmit = () => console.log(data);

  return (
    <Form onSubmit={onSubmit}>
      <Field label="Name">
        <Input name="name" value={data.name} onChange={handleFieldChange} required />
      </Field>
      <Field label="Email">
        <Input name="email" value={data.email} validations={emailValidations} onChange={handleFieldChange} required />
      </Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};
```

O uso do Taslonic não muda em nada o jeito como o React gerencia estado, então você continua gerenciando os dados do formulário da maneira com a qual já está acostumado. O mesmo é verdade para o listener de submit.

Os campos do formulário já estarão automaticamente registrados no formulário, então você não precisará fazer isso manualmente para cada um dos campos.

A validação de campo obrigatório é feita exatamente como na API nativa do HTML. Qualquer outro tipo de validação personalizada é feita sempre da mesma maneira. Os campos de um formulário aceitam uma propriedade chamada `validations` que nada mais é do que um Array de objetos contendo os atributos:
- `isValid`: função que que recebe o valor do campo e retorna `true` se o valor for válido.
- `errorMessage`: mensagem a ser exibida caso a função acima retorne `false`.

Nenhum linha de código é necessária para controlar a visibilidade das mensagens de erro. A visibilidade das mensagens é controlada automaticamente pelo Taslonic.

Alcançamos até agora a possibilidade de definir validações para campos de um formulário de maneira mais direta. Tudo que você precisou fazer foi importar os componentes do Taslonic e definir uma validação especial para o campo email usando a propriedade `validations`. Mas isso é só a ponta do iceberg. As melhorias que o Taslonic oferece à experiência de desenvolvimento de formulários vão muito além:

1. Exibe um asterisco nos labels de campos obrigatórios.
2. Exibe a mensagem de erro sob um campo inválido só depois que o usuário desfoca o campo ao menos uma vez, evitando que a mensagem de erro seja exibida enquanto o campo ainda está sendo preenchido.
3. Exibe as mensagens de erro de todos os campos inválidos caso o usuário submeta o formulário sem preenchê-los corretamente, e foca no primeiro campo inválido.
4. Substitui o texto do botão de envio por um _loader_ durante a requisição e o retorna ao estado inicial quando a requisição é concluída.
5. Desabilita o botão de envio durante o processamento da requisição para evitar múltiplos envios.
6. Lança um toast no sucesso do envio dos dados contendo a mensagem de sucesso que você opcionalmente informou ao formulário.
7. Exibe um banner ao topo do formulário acompanhado de um botão que permite ao usuário enviar os dados novamente caso a requisição falhe.

**São sete casos de uso que você não precisa implementar e, consequentemente, testar**. Curioso para ver o Taslonic em ação ? Aqui vão alguns links:

- [Formulário funcional com Taslonic](https://components.taslonic.com/#!/components/react/playground?tab=1&code=eyJ0ZW1wbGF0ZSI6IlxuIiwiY29udHJvbGxlciI6ImZ1bmN0aW9uKCkge1xuICBjb25zdCB7IHVzZVN0YXRlIH0gPSBSZWFjdDtcbiAgY29uc3QgeyBSb3csIENvbCwgRm9ybSwgRmllbGQsIElucHV0LCBCdXR0b24gfSA9IHRhc2xvbmljUmVhY3Q7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGluaXRpYWxEYXRhID0geyBlbWFpbDogJycgfVxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxEYXRhKTtcbiAgICBjb25zdCB2YWxpZEVtYWlsUmVnZXggPSBuZXcgUmVnRXhwKC9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXSskLywgJ2knKTtcbiAgICBjb25zdCBoYW5kbGVEYXRhQ2hhbmdlID0gKHsgdGFyZ2V0OiB7IG5hbWUsIHZhbHVlIH0gfSkgPT4gc2V0RGF0YShwcmV2RGF0YSA9PiAoeyAuLi5wcmV2RGF0YSwgW25hbWVdOiB2YWx1ZX0pKTtcbiAgICBjb25zdCBvblN1Ym1pdCA9ICgpID0%252BIHtcbiAgICAgIC8vIE1ha2UgYSBtaXN0YWtlIG9uIHRoZSB1cmwgYmVsb3cgdG8gc2ltdWxhdGUgYW4gZXJyb3JcbiAgICAgIHJldHVybiBheGlvcy5wb3N0KCdodHRwczovL2FwcC5mYWtlanNvbi5jb20vcScsIHtcbiAgICAgICAgdG9rZW46ICdfV2JPRnVMMVR0TlE1TEVtMG90LW5RJyxcbiAgICAgICAgZGF0YSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Um93IGFsaWduPVwiY2VudGVyXCI%252BXG4gICAgICAgIDxDb2wgbWQ9XCI0XCI%252BXG4gICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgIG9uU3VibWl0PXtvblN1Ym1pdH1cbiAgICAgICAgICAgIG9uU3VibWl0U3VjY2Vzcz17KCkgPT4gc2V0RGF0YShpbml0aWFsRGF0YSl9XG4gICAgICAgICAgICBzdWJtaXRTdWNjZXNzVGl0bGU9XCJUdWRvIGNlcnRvIVwiXG4gICAgICAgICAgICBzdWJtaXRTdWNjZXNzTWVzc2FnZT1cIk9icmlnYWRvIHBvciBzZSBpbnNjcmV2ZXIuXCJcbiAgICAgICAgICA%252BXG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIkVuZGVyZedvIGRlIGVtYWlsXCIgYmxvY2s%252BXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEYXRhQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz17W3tcbiAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkOiB2YWx1ZSA9PiB2YWxpZEVtYWlsUmVnZXgudGVzdCh2YWx1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnSW5zaXJhIHVtIGVuZGVyZedvIGRlIGVtYWlsIHbhbGlkby4nXG4gICAgICAgICAgICAgICAgICAgIH1dfVxuICAgICAgICAgICAgICAgICAgICBibG9ja1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB0aGVtZT1cInByaW1hcnlcIiBibG9jaz5cbiAgICAgICAgICAgICAgICAgIEluc2NyZXZlci1zZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9Db2w%252BXG4gICAgICA8L1Jvdz5cbiAgICApO1xuICB9O1xufSIsInN0eWxlcyI6IlxuIn0%253D&source=edit-link)
- [Documentação Taslonic](https://taslonic.com/react)

Se gostou desse post, considere estrelar o repositório do projeto no [Github](https://github.com/glorious-codes/glorious-taslonic).
