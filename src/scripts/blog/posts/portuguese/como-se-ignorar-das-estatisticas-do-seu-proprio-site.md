title: Como se ignorar das estatísticas do seu próprio site
date: 2022-05-31
description: Quando visitamos nosso próprio site, suas estatísticas acabam incluindo dados que não gostaríamos que estivessem sendo considerados. Ao invés de quebrar a cabeça com estratégias complicadas, descubra como se ignorar das estatísticas do seu próprio site de uma maneira bem simples.
keywords: google, analytics, plausible, glorious, estatísticas.
lang: pt-BR

---

São várias as razões para que você queria desabilitar pontualmente as estatísticas de seu website ou web app. Desconsiderar visitas feitas por você ao seu próprio site, evitar o consumo desnecessário de um serviço pago em tempo de desenvolvimento, não contabilizar acessos feitos por ferramentas de teste, entre outros.

Desde o dia em que pesquisei como me ignorar das estatísticas do Google Analytics, notei que poderia existir uma solução mais simples. Esse foi o motivo maior por trás da criação do **Glorious Analytics, uma biblioteca que estende alguns serviços de estatística como o Google Analytics, permitindo facilmente desabilitá-los via Browser**. Ao atribuir o valor *disabled* para um parâmetro de URL chamado *analytics*, você impede que o site colete as estatísticas da sua visita.

Além de evitar a poluição das estatísticas com dados indesejados, a possibilidade de desabilitar a coleta dos dados adiciona uma camada extra de privacidade aos usuários que optarem por não serem monitorados.

O Glorious Analytics usa o Plausible como serviço padrão de estatísticas. Veja abaixo um exemplo de uso básico da biblioteca:

``` javascript
import GAnalytics from '@glorious/analytics';

const analytics = new GAnalytics();
analytics.init('rafaelcamargo.com');
analytics.trackPageview();
```

Opcionalmente, você pode adaptar a biblioteca para usar o Google Analytics:

``` javascript
import GAnalytics from '@glorious/analytics';
import googleAnalyticsAdapter from '@glorious/analytics/dist/adapters/google-analytics';

const analytics = new GAnalytics();
analytics.init('UA-123456', { adapter: googleAnalyticsAdapter });
analytics.trackPageview();
```

Para saber mais sobre a biblioteca, ou colaborar com seu desenvolvimento, acesse seu [repositório no Github](https://github.com/glorious-codes/glorious-analytics).
