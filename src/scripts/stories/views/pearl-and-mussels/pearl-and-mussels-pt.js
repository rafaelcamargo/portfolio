import React, { Component } from 'react';
import { Quote } from '@scripts/base/components/quote/quote';
import { ExternalLink } from '@scripts/base/components/external-link/external-link';
import { RStorySpacer } from '@scripts/stories/components/story-spacer/story-spacer';
import { RStoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';

export class RPearlAndMusselsPT extends Component {
  render() {
    return (
      <RStoryViewport>
        <p>
          Octocash. Esse era o nome do produto que eu e dois colegas lançamos
          há quatro anos. Começar a construir o próprio produto tendo apenas
          dois anos de profissão é uma experiência deslumbrante. Todos os
          integrantes transbordam otimismo. É tanto otimismo que ele sozinho
          é mais do que suficiente para desenvolver o produto. É tanta euforia
          que entender profundamente um problema passa a ser opcional. Após
          desenharmos um logo e as primeiras telas, programamos loucamente até
          colocar o produto no ar. Visitante após visitante, começamos a
          coletar então a amarga métrica de zero conversões. Ops! Ficou
          evidente que era preciso mais que só abrir a porta da loja pro
          negócio dar certo.
        </p>
        <h2>
          Mariscos
        </h2>
        <p>
          Depois do banho de água fria, saímos à caça das razões que ousaram
          secar nosso oceano de otimismo. Começaram as apostas. A maioria delas
          carregava consigo a ausência de uma feature. <em>Não temos conversões
          porque o produto não faz isso. Não temos conversões porque o produto
          não faz aquilo.</em> Em pouquíssimo tempo, dispunhamos de uma enorme
          quantidade de trabalho pela frente. E quanto mais discutíamos, mais
          features gostaríamos que o produto tivesse. Acreditávamos que a cada
          nova feature adicionada ao produto, estaríamos aumentando as chances
          de alguém se convencer a pagar por ele.
        </p>
        <p>
          Diante daquele alto volume de trabalho a ser desenvolvido e sem
          acreditar que estaríamos entregando alguma coisa que os concorrentes
          já não tivessem entregue, decidi sair do projeto. A minha conclusão
          foi que, por maior que fosse nossa boa vontade, a total falta de
          entendimento do problema nos tornava incapaz de oferecer algo que
          fizesse brilhar os olhos dos nossos clientes. Queríamos nos
          convencer do potencial do produto reunindo a maior quantidade
          possível de mariscos, sem notar que não tínhamos nenhuma pérola a
          oferecer.
        </p>
        <h2>
          Pérolas
        </h2>
        <p>
          Dois anos mais tarde, inspirado pela homepage de um produto que eu
          gostava tanto, WeDeploy, comecei a construir um novo <em>produto
          </em>. Dessa vez, infinitamente mais modesto. Além disso, eu estava
          protegido por completo da decepção de ninguém pagar por ele. O
          produto era open source, se chamava <ExternalLink href="https://glorious.codes/demo">
          Glorious Demo</ExternalLink> e permitia a um desenvolvedor usar
          JavaScript para construir uma animação que simulava o desenvolvimento
          e execução de um trecho de código. Com pouquíssimas linhas de
          JavaScript, era possível criar uma animação que abria um editor,
          escrevia nele, abria um terminal, executava comandos e retornava
          respostas. Tornava-se possível com JavaScript fazer algo que até
          então demandava o uso de gifs.
        </p>
        <p>
          Recebo o primeiro feedback positivo. Justamente de quem liderava o
          WeDeploy à época, Zeno Rocha. O seu <ExternalLink href="https://twitter.com/zenorocha/status/1057275408935194625">tweet
          </ExternalLink> fez o projeto alcançar quase quarenta estrelas no
          Github. Obter pela primeira vez na vida um pequeno reconhecimento de
          pessoas que eu sequer conhecia já ecoava dentro de mim como o maior
          de todos os sucessos. Dias depois, numa quinta-feira à noite, divulgo
          o produto no Product Hunt. Na manhã de sexta-feira, acordo atônito ao
          ver o Glorious Demo como <ExternalLink href="https://www.producthunt.com/posts/glorious-demo">
          produto mais votado do dia</ExternalLink>. O projeto ultrapassa
          300 estrelas e entra na lista de tendências do Github. Uma das
          publicações mais populares do mundo sobre CSS <ExternalLink href="https://twitter.com/css/status/1060325303459962882">
          divulga</ExternalLink> o projeto. Um <ExternalLink href="https://twitter.com/jnthnhw/status/1060209206685564929">
          programador em Seattle</ExternalLink> cria um site chamado <ExternalLink href="https://roadtoglory.netlify.app/">
          Road To Glory</ExternalLink> permitindo usar o Glorious Demo através
          de uma interface gráfica. O Glorious Demo se transforma em um <ExternalLink href="https://heowc.dev/2018/11/14/introduction-hexo-tag-gdemo/">
          plugin</ExternalLink> para Hexo pelas mãos de um programador Sul
          Coreano. Blog posts são escritos em <ExternalLink href="https://www.majidonline.com/article/%D9%85%D8%B9%D8%B1%D9%81%DB%8C_%DB%8C%DA%A9_%D8%B1%D8%A7%D9%87_%D8%A2%D8%B3%D8%A7%D9%86_%D9%88_%D8%B2%DB%8C%D8%A8%D8%A7_%D8%A8%D8%B1%D8%A7%DB%8C_%D9%86%D9%85%D8%A7%DB%8C%D8%B4_%DA%A9%D8%AF%D9%87%D8%A7%DB%8C_%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87_%D8%A8%D8%B5%D9%88%D8%B1%D8%AA_%D8%A7%D9%86%DB%8C%D9%85%DB%8C%D8%B4%D9%86.html">
          árabe</ExternalLink> e <ExternalLink href="https://paiza.hatenablog.com/entry/2019/01/16/JavaScript%E3%81%A7%E3%82%BD%E3%83%BC%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%89%E3%82%84%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E6%93%8D%E4%BD%9C%E3%82%92%E3%82%A2%E3%83%8B%E3%83%A1%E3%83%BC%E3%82%B7%E3%83%A7">
          japonês</ExternalLink>.
        </p>
        <p>
          Hoje, dezoito meses após o lançamento, aquele pequeno produto feito
          com 80 <em>commits</em> alcança uma popularidade de três mil estrelas no
          Github, e o site do projeto contabiliza dezenas de milhares de
          visitas vindas de mais de 150 países. Não me restam dúvidas de que,
          em Novembro de 2018, de maneira despretensiosa e acidental, eu
          tinha de fato descoberto uma pérola.
        </p>
        <h2>
          Impacto ao invés de features
        </h2>
        <p>
          Se a ausência de features costuma ser a explicação para a baixa
          adesão a um produto, o real problema pode não ser a a falta delas, mas
          o fato das que já existem não fazer brilhar o olho de ninguém. No
          livro Rework, Jason Fried e David Hansson comentam concorrência e
          quantidade de features numa seção chamada <em>Underdo your competition</em>.
          Desbanque seus concorrentes fazendo menos, não mais.
        </p>
        <Quote
          sourceText="Rework"
          sourceHref="https://www.thriftbooks.com/w/rework_david-heinemeier-hansson_jason-fried/246388/#isbn=0307463745&idiq=3992062"
          lang="en">
            Conventional wisdom says that to beat your competitors, you need to
            one-up them. If they have four features, you need five (or fifteen,
            or twenty-five). If they’re spending $20,000, you need to spend
            $30,000. If they have fifty employees, you need a hundred.<br />
            This sort of one-upping, Cold War mentality is a dead end.
            When you get suckered into an arms race, you wind up in a
            never-ending battle that costs you massive amounts of money,
            time and drive. And it forces you to constantly be on the
            defensive, too. Defensive companies can’t think ahead; they can
            only think behind. They don’t lead; they follow.
        </Quote>
        <RStorySpacer />
        <p>
          De vez em quando nos pegamos em meio ao desenvolvimento de um
          produto que se considera atrás do concorrente por ter menos features.
          Que acredita que o sucesso do produto consiste necessariamente em
          superar a enorme lista de features que o concorrente já oferece.
          Nesse momento, podemos cair na tentação de conduzir o desenvolvimento
          do produto por um caminho já trilhado. Podemos chegar à conclusão
          absurda de que os olhos do nosso cliente vão brilhar quando
          entregarmos exatamente aquilo que o concorrente já oferece. Querer
          superar um concorrente com a quantidade de features, ao invés de se
          dedicar à qualidade de cada uma delas, é se reduzir a colecionar
          mariscos. Não importa quantos você consiga amontoar, jamais vão
          se igualar ao impacto causado pelo brilho de uma pequena pérola.
        </p>
      </RStoryViewport>
    );
  }
}
