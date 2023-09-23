title: Simulando search params nos testes de um componente React
date: 2023-09-23
description: O uso de search params em aplicações front-end é frequentemente utilizado. Mas testar o comportamento de componentes que dependem desses parâmetros pode não ser tão simples quanto gostaríamos. Entenda como simular os parâmetros encontrados na url de maneira simples e direta com o uso da History API.
keywords: search params, react, componente, history api, push state
lang: pt-BR

---

Todo mundo que já precisou garantir que um componente React se comporte corretamente a partir de parâmetros passados pela url já enfrentou algum nível de dificuldade com testes.

Uma das primeiras estratégias utilizadas para simular o caso de uso é tentar definir search params na url antes da montagem do componente. Algo como:
``` javascript
it('should show page according page search param found on url', () => {
  window.location.search = 'page=2';
  render(<Component />);
  // asserção de que a segunda página foi exibida
});
```

Mas ao aplicar a estratégia acima, o resultado não é nada animador. Em um ambiente de testes, não é possível fazer requisições. Ao manipular os search params usando o `window.location`, uma requisição é feita implicitamente, culminando em falha na execução do teste:

```
console.error
  Error: Not implemented: navigation (except hash changes)
```

É preciso então encontrar uma maneira de inserir search params na url, mas sem que uma requisição ocorra. Uma das maneiras mais populares de se conseguir isso hoje em dia é usando o método `pushState` da `History API`. Introduzido na versão 5 do Chrome, em meados de 2010, essa tecnologia é massivamente empregada em aplicações SPA através de bibliotecas de roteamento, como por exemplo a React Router. Com o método `pushState` é possível alterar uma url sem que seja feita uma nova requisição para o servidor.

Reescrevendo o teste com o uso da History API, teremos:
``` javascript
it('should show page according page search param found on url', () => {
  const url = `${window.location.pathname}?page=2`;
  window.history.pushState({}, '', url);
  render(<Component />);
  // asserção de que a segunda página foi exibida
});
```

Se lançarmos o valor de `window.location.href` no console logo após a definição do search param via `pushState`, veremos a seguinte url: `http://localhost/?page=2`. Simples, não é?

Como o uso de search params é algo bastante comum em diversos componentes de uma aplicação front-end, tenho o hábito de criar uma função utilitária em um módulo dedicado exclusivamente a oferecer funções que me ajudem com os testes. Esse módulo fica armazenado em `src/services/testing.js` e a função utilitária fica dessa maneira:

``` javascript
export function mockSearchParams(paramsString){
  const { pathname } = window.location;
  const url = paramsString ? `${pathname}?${paramsString}` : pathname;
  window.history.pushState({}, '', url);
}
```

Finalmente, ao reescrever novamente o teste com a função utilitária, o tornamos simples, direto e altamente legível, facilitando futuras alterações no código:

``` javascript
it('should show page according page search param found on url', () => {
  mockSearchParams('page=2');
  render(<Component />);
  // asserção de que a segunda página foi exibida
});
```

Se você quiser ver a estratégia acima sendo aplicada em uma aplicação real escrita com React e testada com Jest e RTL (React Testing Library), confira essa [suíte de testes](https://github.com/rafaelcamargo/bordiple/blob/main/src/home/views/home-view.test.js#L32) do Bordiple no GitHub. [Bordiple](https://bordiple.rafaelcamargo.com/) é uma aplicação front-end que permite que programadores e designers criem elementos contendo múltiplas bordas CSS através de uma interface gráfica amigável.
