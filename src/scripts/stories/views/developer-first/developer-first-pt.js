import React, { Component } from 'react';
import { RQuote } from '@scripts/base/components/quote/quote';
import { RStorySpacer } from '@scripts/stories/components/story-spacer/story-spacer';
import { RStoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';

export class RDeveloperFirstPT extends Component {
  render() {
    return (
      <RStoryViewport>
        <p>
          Ao longo dos últimos anos temos ouvido uma variedade de estratégias
          se sucederem na disputa por como melhor abordar o desenvolvimento de
          um software. Há poucos anos, era corriqueiro o uso do termo <em>
          API-First</em>. Mais recentemente, o entusiasmo foi com <em>AI-First</em>. Sendo
          desenvolvedor, sugiro a adoção de uma nova estratégia. Uma estratégia
          que não exclui qualquer outra que já esteja em curso. Uma estratégia
          que mantém o mesmo sufixo daquelas já mencionadas, mas que adiciona
          o fator humano na palavra que o precede. <em>Developer-First</em>.
        </p>
        <p>
          Neste momento, você poderia achar que estou querendo fazer do
          desenvolvedor a peça central no desenvolvimento de software. Se foi
          essa a impressão, não se preocupe. Ela está correta. Longe de mim
          querer dizer que um produto não deve colocar a necessidade de seus
          clientes como principal razão do seu desenvolvimento. Mas note que
          fiz questão de utilizar o termo desenvolvimento de software porque
          entendo que nesse estágio o problema que o cliente possui já está
          claro, assim como já está claro também que a solução demandará
          software. O fim continua sendo oferecer solução para o problema de
          alguém. A sugestão aqui é de como lidar melhor com o meio. O
          desenvolvimento do software.
        </p>
        <p>
          Quando nos damos conta de que para desenvolver software precisamos
          (ainda) de desenvolvedores, fica evidente que o nível de engajamento
          do desenvolvedor impacta diretamente o resultado final do software
          produzido. Menor a dedicação e o comprometimento, menor a chance de
          um bom resultado. Por isso, é fundamental que esse engajamento, que
          costuma ser alto no início do desenvolvimento, não desapareça ao
          longo do processo. Quais seriam então os ingredientes que poderiam
          favorecer o engajamento do desenvolvedor?
        </p>
        <h2>
          Precisão
        </h2>
        <p>
          Um software que não se comporta como o esperado não resolve o
          problema de ninguém. Precisão é requisito indiscutível de qualquer
          produto que esteja no mercado. Mas é também um requisito
          imprescindível para manter o engajamento de quem o desenvolve.
        </p>
        <p>
          Se liberar uma nova funcionalidade nos dá a sensação de avançar uma
          casa no jogo, ter que corrigir um bug nos faz sentir voltando duas.
          Corrigir bugs significa investir esforços para continuar apenas no
          mesmo lugar. Se da empresa pra fora, bugs acabam com a reputação do
          software, da empresa pra dentro minam o engajamento dos
          desenvolvedores.
        </p>
        <h2>
          Produtividade
        </h2>
        <p>
          De nada adiantaria desenvolver o software mais preciso do mundo se
          ele nunca fosse entregue. Entre o momento em que se imagina uma
          solução e o momento em que ela é disponibilizada aos clientes, existe
          o tempo de desenvolvimento. Quanto menor é esse tempo, mais rápido
          podemos avaliar se a solução entregue resolve ou não um problema. E
          quanto mais rápido for esse <em>feedback loop</em>, mais nos mantemos
          engajados com aquilo que estamos construindo.
        </p>
        <RQuote
          sourceText="Finding Flow"
          sourceHref="https://www.thriftbooks.com/w/finding-flow-the-psychology-of-engagement-with-everyday-life-masterminds-series_mihaly-csikszentmihalyi/253384/#isbn=0465045138&idiq=1009114"
          lang="en">
          Another characteristic of flow activities is that they provide
          immediate feedback. They make it clear how well you are doing. After
          each move of a game you can tell whether you have improved your
          position or not.
        </RQuote>
        <p>
          Seja tendo que lembrar de ligar ou desligar algo em um determinado
          momento do dia ou seja tendo que escrever a mesma porção de código a
          cada nova funcionalidade, iremos nos entendiar rapidamente. E quando
          o tédio entra por uma porta, o engajamento sai por outra. Tarefas
          rotineiras devem ser automatizadas, da mesma maneira que todo padrão
          comum deve ser abstraído.
        </p>
        <RStorySpacer />
        <p>
          Assim como não faz sentido lançar rapidamente algo que não funciona,
          tão pouco seria celebrável jamais conseguir lançar algo por não
          estarmos certos de que funcione. Precisão e produtividade são dois
          ingredientes que funcionam como o exato contra-peso um do outro. <strong>
          Developer-first é uma abordagem que preza pelo alto engajamento do
          desenvolvedor. E o alto engajamento acontece justamente
          quando conseguimos fazer muito rápido algo que funciona muito
          bem</strong>.
        </p>
        <p>
          A adoção dessa abordagem não demanda a chancela de nenhum gerente ou
          diretor. Cabe tão somente a nós desenvolvedores. Portanto, diante de
          qualquer decisão ao longo do desenvolvimento do software,
          questione-se: <em>Como essa decisão colabora para tornar o
          software mais preciso? Como essa decisão nos faria escrever testes
          mais facilmente? Como essa decisão torna nosso código mais
          compreensível? Como essa decisão nos fará escrever menos código? Como
          ganharemos velocidade seguindo por esse caminho?</em> Se a decisão
          tomada for incapaz de satisfazer a um desses questionamentos, grandes
          são as chances dela não priorizar o desenvolvedor.
        </p>
      </RStoryViewport>
    );
  }
}
