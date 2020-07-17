import React, { Component } from 'react';
import { ExternalLink } from '@scripts/base/components/external-link/external-link';
import { Quote } from '@scripts/base/components/quote/quote';
import { RStoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';

export class RCleanCodePT extends Component {
  render() {
    return (
      <RStoryViewport>
        <p>
          Esse é um dos livros mais famosos do universo da programação. Sua
          fama parece só não ser maior do que o número de programadores que
          ainda não leu esse livro. Alguns reclamam que os exemplos exibidos
          ao longo do livro estão escritos em Java, como se a linguagem de
          programação fosse um obstáculo para entender o que é código limpo.
          Já ouvi também que o tal código limpo seria uma utopia, que funções
          contendo quatro ou cinco linhas estariam reservadas ao Olimpo do
          desenvolvimento de software.
        </p>
        <p>
          Embora o livro possa, em alguns poucos momentos, se apegar a
          detalhes não tão pragmáticos, a sua quase totalidade compartilha
          uma sabedoria sem igual. A seguir, destaco os trechos que me
          pareceram melhor descrever o caminho para chegar ao código limpo.
        </p>
        <h2>
          Letras acima dos números.
        </h2>
        <Quote
          sourceText="Source"
          sourceHref="https://www.osnews.com/story/19266/wtfsm/"
          lang="en">
          The only valid measurement of code quality: WTF/Minute.
        </Quote>
        <p>
          Essa frase, que abre a introdução do livro, parece antecipar tudo
          aquilo que será tratado nas próximas centenas de páginas. Cada linha
          de software que você altera colabora com a história que você escreve
          junto com seus colegas de trabalho. Código de baixa qualidade é uma
          sucessão de fatos incompreensíveis, uma história sem pé nem cabeça,
          uma avalanche de WTF/Minute. Para escrever código limpo, você precisa
          ter mais habilidade com letras do que com números.
        </p>
        <h2>
          Uma letra de cada vez.
        </h2>
        <Quote
          sourceText="Clean Code"
          sourceHref="https://www.thriftbooks.com/w/clean-code-a-handbook-of-agile-software-craftsmanship-robert-c-martin-series_robert-c-martin/332840/#isbn=0132350882&idiq=10169803"
          lang="en">
          The ratio of time spent reading vs. writing is well over 10:1. We
          are constantly reading old code as part of the effort to write new
          code. [...] You cannot write code if you cannot read the surrounding
          code.  [...] So if you want to go fast, if you want to get done
          quickly, if you  want your code to be easy to write, make it easy to read.
        </Quote>
        <p>
          Comunicação é habilidade imprescindível para escrever código limpo.
          Quando você dá nome a uma variável você está se comunicando, quando
          você dá nome a um arquivo você está se comunicando, quando você
          agrupa seus arquivos em diretórios você está se comunicando.
        </p>
        <p>
          Tempos atrás eu virei para um colega de trabalho e falei: <em>Sabe o
          que eu tenho vontade de fazer quando vejo um código como esse?</em>.
          Ele me devolveu a pergunta: <em>O quê?</em>. <em>Tenho de vontade de
          passar o dedo na tela. Isso parece Braille.</em>, respondi. O arquivo
          continha algumas centenas de linhas infestadas de variáveis nomeadas
          com um único caractere.
        </p>
        <p>
          Não tenha medo de dar nomes longos a variáveis, funções, arquivos e
          diretórios. Preocupe-se em dar a eles o significado que precisam ter.
          Um minuto investido em um bom nome pode poupar dez de quem precisará
          interpreta-lo. Uma letra de cada vez, jamais uma única letra.
        </p>
        <h2>
          Uma coisa. Uma coisa só. Uma coisa apenas.
        </h2>
        <p>
          Se na vida real a gente tem dificuldades para assoviar e chupar cana
          ao mesmo tempo, por quê depositar essa expectativa no nosso código?
          Diretórios, arquivos, classes, módulos e funções. Tudo deve fazer
          uma única coisa. Tudo deve ter apenas uma única resposabilidade.
          Imagine um diretório chamado utils. A primeira pergunta que me vem
          à mente é: <em>Se ali está o código útil, o que haveria dentro dos
          demais diretórios?</em> Utils não é apenas um péssimo nome, é um ótimo
          exemplo de algo que faz mais do que deveria. É um exemplo de ausência
          de limites.
        </p>
        <p>
          Responsabilidade pressupõe limites. Responsabilidade delimita o
          começo e o fim. Responsabilidade determina o que uma coisa faz, mas
          acima de tudo o que essa coisa não faz. Usain Bolt se tornou o
          homem mais veloz da história porque decidiu se especializar em uma
          coisa. Uma coisa só. Uma coisa apenas.
        </p>
        <h2>
          Código limpo dispensa comentários.
        </h2>
        <Quote
          sourceText="Clean Code"
          sourceHref="https://www.thriftbooks.com/w/clean-code-a-handbook-of-agile-software-craftsmanship-robert-c-martin-series_robert-c-martin/332840/#isbn=0132350882&idiq=10169803"
          lang="en">
          The proper use of comments is to compensate for our failure to
          express ourself in code. Note that I used the word failure. I meant it.
          Comments are always failures. We must have them because we cannot
          always figure out how to express ourselves without them, but their
          use is not a cause for celebration.
        </Quote>
        <p>
          A única certeza que podemos ter em relação a comentários é que a
          máquina irá ignora-los. Comentários não podem ser testados.
          Não podendo ser testados, podem rapidamente se tornar desatualizados.
          Uma vez desatualizados, a única certeza que podemos ter é que o
          desenvolvedor irá ignora-los.
        </p>
        <p>
          Se em algum momento você se pegar escrevendo um comentário na
          tentativa de melhor explicar o seu código, reflita porque o próprio
          código não conseguiu explicar a si mesmo. Comentários são sempre
          uma oportunidade de melhoria. Assim como um código limpo,
          esse <ExternalLink href="https://youtu.be/wXaC0YvDgIo?t=237">vídeo</ExternalLink> dispensa
          comentários.
        </p>
        <h2>
          Edite brilhantemente.
        </h2>
        <p>
          <em>Red, Green, Blue</em>. Essa é uma expressão associada ao
          desenvolvimento orientado a testes - <em>TDD</em>. A tríade de cores
          significa as seguintes etapas de desenvolvimento:
        </p>
        <ul>
          <li>
            <u>Red</u>: Por ter escrito o teste antes da implementação, ele
            quebra ao ser rodado pela primeira vez.
          </li>
          <li>
            <u>Green</u>: Você evolui a implementação até que o teste passe.
          </li>
          <li>
            <u>Blue</u>: Assim que o teste passa, você transforma aquilo que apenas
            funciona em algo que funciona bem.
          </li>
        </ul>
        <p>
          É com a segurança fornecida pelo teste passando que você relê seu
          código e verifica se a nomenclatura escolhida continua fazendo
          sentido. Se linhas de código podem ser removidas. Se a implementação
          pode ser mais limpa, mais clara. Se você não envia um email tão logo
          termina de escreve-lo, por quê consideraria a implementação concluída
          tão logo ela funcione?
        </p>
        <p>
          Sobre a importância de editar, Jason Fried escreveu <ExternalLink href="https://signalvnoise.com/posts/2930-svn-flashback-eureka-were-editors" lang="en">Eureka! We’re editors</ExternalLink> e
          Carolyn Cherry muito bem lembrou:
        </p>
        <p>
          <em lang="en">It is  perfectly okay to write garbage as long as you edit brilliantly</em>.
        </p>
      </RStoryViewport>
    );
  }
}
