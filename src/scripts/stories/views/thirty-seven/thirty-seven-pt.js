import React, { Component } from 'react';
import { ExternalLink } from '@scripts/base/components/external-link/external-link';
import { Quote } from '@scripts/base/components/quote/quote';
import { StoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';

export class RThirtySevenPT extends Component {
  render() {
    return (
      <StoryViewport>
        <Quote
          sourceText="Origem do nome 37signals."
          sourceHref="https://37signals.com/33.html">
          A humanidade frequentemente analisa as ondas de rádio vindas do
          espaço na busca por inteligência extraterrestre. Desde que essas
          análises começaram, a origem de quase todos os sinais foi
          identificada. Trinta e sete delas, porém, permanecem sem explicação.
        </Quote>
        <p>
          Tão intrigante quanto ondas de radio vindas do além, foi a capacidade
          de uma pequeníssima empresa chamada <ExternalLink href="https://37signals.com/">
          37signals</ExternalLink> lançar, desde o final dos anos 90,
          incalculáveis meteoros sobre o senso comum no que se referente a design,
          produto e programação.
        </p>
        <p>
          O primeiro meteoro talvez tenha sido o tratado que dá origem à própria
          empresa. Seu <em>manifesto</em>. Escrito em 1999 e contendo
          37 <em>microtextos</em> que, mesmo depois de duas décadas, continuam
          repletos de frescor.
        </p>
        <h2>
          Crescer fazendo melhor, não mais.
        </h2>
        <p>
          O desprezo por tudo aquilo que pode tirar o foco do verdadeiro espírito
          da <em>web</em> fica escancarado na frase que abre o manifesto: <em>The
          web should empower, not frustrate</em>. Alguns parágrafos
          adiante, <ExternalLink href="https://37signals.com/17.html">No Awards Please</ExternalLink> deixa
          claro que o julgamento da indústria do design jamais influenciaria o
          resultado final do trabalho produzido. O meio jamais deslocaria para
          si o foco do fim. <em>Ser útil e fácil de usar</em>.
        </p>
        <p>
          Empresas desejam crescer. Para crescer, as empresas procuram entregar
          mais valor. Em uma boa parcela dos casos, entregar mais valor acaba
          virando oferecer mais serviços. Ao muito bem delimitar o serviço
          oferecido, em <ExternalLink href="https://37signals.com/04.html">Not Full Service</ExternalLink> a
          empresa combate elegantemente a tentação de crescer fazendo mais ao
          invés de crescer fazendo melhor.
        </p>
        <Quote
          sourceText="37signals Manifesto [04]"
          sourceHref="https://37signals.com/04.html"
          lang="en">
          We think companies that claim they can do everything actually excel at nothing.
        </Quote>
        <h2>
          Sentido acima das aparências.
        </h2>
        <p>
          Novas tecnologias alimentam a definição de novidade. Novidades
          alimentam o desejo de estar atualizado. E o desejo de estar
          atualizado pode atrapalhar importantes decisões. Em <ExternalLink href="https://37signals.com/25.html">Just
          Because You Can, Doesn't Mean You Should</ExternalLink> são
          descartadas as decisões que se baseiam num raso <em>é tão legal!</em> ou
          num <em>todo mundo está usando!</em> Mais alguns parágrafos e,
          em <ExternalLink href="https://37signals.com/28.html">Tulipomania</ExternalLink>, encontramos a declaração:
        </p>
        <Quote
          sourceText="37signals Manifesto [28]"
          sourceHref="https://37signals.com/28.html"
          lang="en">
          Trends are temporary. Don't just do something because everyone else
          is doing it – do something because it makes sense.
        </Quote>
        <h2>
          Usabilidade é secundária.
        </h2>
        <p>
          Para alguns, poderia soar como um sacrilégio dizer que usabilidade não
          é o fator mais importante de um site. <ExternalLink href="https://37signals.com/26.html">Make it Useful
          </ExternalLink> nos lembra então que antes de ser usável, o site
          precisa ser útil.
        </p>
        <Quote
          sourceText="The Design of Everyday Things"
          sourceHref="https://www.thriftbooks.com/w/the-design-of-everyday-things_donald-a-norman/246934/#isbn=0465050654&idiq=5238616"
          lang="en">
          Usability is always secondary. It's never the most important thing
          about an experience. I will accept poor usability if I get what I
          need, if the total experience is great. I will reject perfect
          usability if I am not rewarded with a useful, engaging experience.
        </Quote>
        <h2>
          Usuário lê.
        </h2>
        <p>
          Uma premissa que de vez em sempre alguém adiciona a uma discussão é: <em>
          usuário não lê</em>. A propósito, O livro <em>Don’t Make
          Me Think</em> reserva um parágrafo em seu segundo capítulo
          para os devidos esclarecimentos sobre <em>Como nós realmente usamos a
          web</em>:
        </p>
        <Quote
          sourceText="Don’t Make Me Think"
          sourceHref="https://www.thriftbooks.com/w/dont-make-me-think-a-common-sense-approach-to-web-usability-second-edition_steve-krug/249342/#isbn=0321965515&idiq=4441288"
          lang="en">
          What users actually do most of the time (if we’re lucky) is glance
          at each new page, scan some of the text, and click on the first link
          that catches their interest or vaguely resembles the thing they’re
          looking for. There are usually parts of the page that they don’t
          even look at.
        </Quote>
        <p>
          Seria o usuário realmente esse desespero em forma de pessoa, ou o
          desinteresse pela leitura seria porque a redação é apenas
          decepcionante? Em <ExternalLink href="https://37signals.com/11.html">Copy
          Righting</ExternalLink>, a empresa lança a pergunta: Você
          leria se não o tivesse escrito? Muitas empresas acreditam que se <em>tá
          bonito, tá bom</em> e cometem o pecado de não se importarem tanto o
          quanto deveriam com a redação de seus sites. Toda vez que um texto
          não seduz, não provoca ou não entretém, o usuário realmente não vai ler.
        </p>
        <p>
          Assim como seu manifesto, muitas outras provocações seriam lançadas em
          forma de <ExternalLink href="https://basecamp.com/books">livros</ExternalLink>. O
          que todas têm em comum parece estar intimamente ligado ao nome da
          empresa, 37signals. Separar o sinal de qualidade da quantidade
          infindável de ruído que nos cerca.
        </p>
      </StoryViewport>
    );
  }
}
