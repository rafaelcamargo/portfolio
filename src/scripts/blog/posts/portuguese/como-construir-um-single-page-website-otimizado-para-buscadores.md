title: Como construir um Single Page Website otimizado para buscadores
date: 2021-08-27
description: Gatsby, Next.js, Jekyll e Hugo são alguns frameworks considerados Static Site Generators que você poderia utilizar para alcançar esse objetivo, mas o foco desse post é te apresentar uma solução muito mais simples e desacoplada de frameworks.
keywords: spa, single page application, website, buscadores, seo, react, vue, static site generator
lang: pt-BR

---

Com o surgimento de tecnologias como Angular e React anos atrás, começamos a compreender que a interface gráfica poderia ser estruturada de uma maneira diferente do tradicional conceito MVC (Model-View-Controller). Essa maneira, hoje comum, é chamada de Arquitetura Baseada em Componentes. Essa nova estratégia entrega benefícios que vão [além do reuso dos componentes](https://tableless.com.br/componentes-alem-do-reuso/) e fornece as bases para [melhor organizar CSS](https://rcamargo.medium.com/entre-garrafas-e-princ%C3%ADpios-como-organizar-melhor-seu-css-4f1572159a04).

A experiência de velocidade/fluidez entregue pelas "Single Page Applications"—que não mais demandavam o recarregamento de uma página por completo quando navegávamos pela aplicação—se tornou o padrão desde então. A solução caiu como uma luva para muitos dos sites que visitamos diariamente na internet. Mas para vários outros, essa nova estratégia poderia causar sérios prejuízos. Isso porque o conteúdo de uma Single Page Application é totalmente construído com JavaScript no dispositivo de quem acessa o site. O corpo do documento enviado pelo servidor quando requisitamos uma URL é, na grande maioria desses casos, vazio. Então todos os sites que dependem da indexação de suas páginas em motores de busca ficaram impossibilitados de aderir a essa nova tecnologia.

Embora esse impedimento ainda seja realidade para diversos sites, já é possível resolver o problema da não indexação de conteúdo para vários outros. Um bom exemplo é o meu [portfolio](https://rafaelcamargo.com). O site é um pequeno conjunto de páginas estáticas onde apresento minhas habilidades, projetos, experiência, formulário de contato, etc. É imprescindível que todo esse conteúdo esteja visível para os motores de busca. Então como fazer todo esse site rodar em uma única página apenas (Single Page Website) e ter seu conteúdo indexado nos motores de busca?

Gatsby, Next.js, Jekyll e Hugo são alguns frameworks considerados "Static Site Generators" que você poderia utilizar para alcançar esse objetivo, mas o foco desse post é te apresentar uma solução muito mais simples e desacoplada de frameworks. Sendo assim, pouco importa se você optou por React, Angular, Vue ou alguma outra tecnologia para rodar seu Single Page Website, essa solução é compatível com qualquer uma delas: **Prerender SPA Plugin**. Sim, um simples plugin para Webpack desenvolvido por [Chris Fritz](https://github.com/chrisvfritz). Veja abaixo as poucas linhas que você precisa adicionar à configuração do Webpack para que o conteúdo de todas as "páginas" do seu site sejam indexadas da mesma maneira que um site tradicional.

Instale o plugin via NPM:
```
npm i -D prerender-spa-plugin
```

Adicione-o à sua configuração do webpack:
``` javascript
const webpack = require('webpack');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
  plugins: [
    new PrerenderSPAPlugin({
      staticDir: `${__dirname}/dist`,
      // Aqui você lista todas as "páginas" que
      // você quer tornar indexáveis.
      routes: ['/', '/skills', '/projects'],
      renderer: new Renderer({ headless: true })
    })
  ]
}
```

Nada de usar bazuca pra matar formiga. O plugin é tão simples quanto uma dependência de desenvolvimento que você usaria para pré processar CSS ou minimizar JavaScript. Além dos atributos demostrados acima, o plugin oferece diversas outras opções interessante. Uma das que eu mais gosto é a opção de minimizar o HTML. Para conhecer mais detalhes sobre o plugin, visite seu repositório no [Github](https://github.com/chrisvfritz/prerender-spa-plugin). E se quiser conferir o uso do plugin na prática, você pode ver a [configuração do meu site pessoal (React)](https://github.com/rafaelcamargo/portfolio) ou a configuração do site de um dos meus projetos chamado [Taslonic (Vue)](https://github.com/glorious-codes/glorious-taslonic-website).
