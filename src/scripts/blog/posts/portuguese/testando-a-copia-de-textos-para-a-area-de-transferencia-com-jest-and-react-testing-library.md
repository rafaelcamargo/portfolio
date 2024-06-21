title: Testando a cópia de textos para a área de transferência com Jest e React Testing Library
date: 2023-10-30
description: Os botões Copiar estão hoje por toda a parte na internet. Usar o teclado para copiar dados de um site nos dias atuais soa desconfortável. Mas seria possível escrever testes que acessem dados armazenados na área de transferência?
keywords: clipboard, área de transferência, react testing library, rtl, jest, copiar, teste
lang: pt-BR

---

Muito tempo atrás, fiquei estupefato com o lançamento de mais um dos projetos do Zeno Rocha, um dos profissionais mais surpreendentes que conheço. O projeto era o *clipboard.js*. Naquele tempo, a estratégia mais comum para implementar qualquer botão que copiasse algum dado para a área de transferência era usar Flash, uma tecnologia que padeceu após o advento do HTML 5.

Ao longo dos anos que se sucederam, a facilidade introduzida pelo *clipboard.js* em usar a área de transferência fez proliferar os botões *Copy* por toda a internet. Hoje em dia, selecionar um texto e pressionar Ctrl+C (ou Cmd+C) soa desconfortável quando precisamos copiar qualquer dado exibido num site.

Mas como escrever os testes para esse caso de uso tão interessante? Seria possível acessar os dados que foram armazenados na área de transferência durante um teste automatizado? A resposta para a segunda pergunta é sim, e abaixo você encontra a resposta para a primeira.

A API que expõe a área de transferência para o browser é disponibilizada através do objeto `clipboard` presente em `window.navigator`. Quando o assunto é especificamente texto, existem dois métodos que podem ser utilizados: `writeText` e `readText`. Veja a seguir o teste para um caso de uso onde um botão, rotulado como Copy, armazena na área de transferência o texto que é passado para ele:

``` javascript
it('should copy text to clipboard', async () => {
  const text = 'Anything'
  render(<CopyButton text={text}/>)
  userEvent.click(screen.getByRole('button', { name: 'Copy' }))
  await pause(10)
  const copiedText = await window.navigator.clipboard.readText()
  expect(copiedText).toEqual(text)
})

async function pause(delay){
  return await new Promise(resolve => setTimeout(resolve, delay))
}
```

Note que após o clique sobre o botão Copiar, é necessário fazer uma breve pausa. Isso é necessário porque tanto a função `writeText` quanto `readText` operam de maneira assíncrona. Importante notar que as ferramentas utilizadas neste teste foram Jest v29 e React Testing Library v12, popularmente apelidada de RTL.

![Animação demonstrando a implementação de um botão copiar usando React](../../images/copy-button.gif)  
_Implementação em React de um botão Copiar_

Ficou curioso para ver como seria a implementação que faria esse teste passar? Acesse esse [playground](https://pitsby-demo.compilorama.com/#!/components/react/playground?tab=1&code=eyJjb250cm9sbGVyIjoiZnVuY3Rpb24oKSB7XG4gIGNvbnN0IENvcHlCdXR0b24gPSAoeyB0ZXh0IH0pID0%252BIHtcbiAgICBjb25zdCBjb3B5ID0gKCkgPT4gd2luZG93Lm5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb3B5fT5Db3B5PC9idXR0b24%252BXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWdyb3VuZC1wcmV2aWV3LWNvbnRhaW5lclwiPlxuICAgICAgICA8Q29weUJ1dHRvbiB0ZXh0PVwiQW55dGhpbmdcIiAvPlxuICAgICAgPC9kaXY%252BXG4gICAgKTtcbiAgfVxufSIsInN0eWxlcyI6Ii5wbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyIHsgcGFkZGluZzogMzBweDsgfSJ9) e explore no próprio browser as possibilidades oferecidas pela Clipboard API.
