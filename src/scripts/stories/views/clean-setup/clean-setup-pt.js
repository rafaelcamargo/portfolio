import React, { Component } from 'react';
import { ExternalLink } from '@scripts/base/components/external-link/external-link';
import { Quote } from '@scripts/base/components/quote/quote';
import { StorySpacer } from '@scripts/stories/components/story-spacer/story-spacer';
import { StoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';

export class CleanSetupPT extends Component {
  render() {
    return (
      <StoryViewport>
        <p>
          Nasce então a oportunidade de caminhar por um campo intocado e
          verdejante. Uma estrada ainda livre de qualquer pedregulho. Enfim, é
          hora de começar uma nova, promissora e reluzente aplicação. O
          primeiro passo? Configurar a aplicação, claro. É nesse momento que
          decisões não tão interessantes podem rapidamente amarelar o lindo
          campo verdejante e largar as primeiras pedras sobre aquela lisa estrada.
        </p>
        <h2>
          Não seja configurado, configure.
        </h2>
        <p>
          Num tempo em que o Vue ainda não tinha caído nas graças da geral e
          configurar uma aplicação React beirava o impossível com <em>bundlers
          </em> e <em>transpilers</em> ainda muito imaturos, decidi experimentar
          uma novidade chamada Aurelia. Após algumas tentativas fracassadas tentando
          configurar a aplicação manualmente, descubro um pacote chamado
          <em>aurelia-cli</em>. Instalo o pacote, executo o comando au new,
          respondo a poucas perguntas e <em>voilá</em>. Todo o fracasso das
          minhas tentativas anteriores desapareceram em questão de segundos. Não
          apenas as configurações, mas toda a estrutura da aplicação havia
          também sido criada. Entendi rapidamente como e onde criar meus
          arquivos, quais scripts executar para rodar testes, compilar assets e
          servir a aplicação. O horizonte não poderia ser mais azul e nada
          poderia dar errado.
        </p>
        <p>
          Sigo empolgado com minha carreira de <em>Aurelia Developer</em> até o
          momento em que meu colega de trabalho me alerta que a alteração que
          eu tinha colocado em produção parecia não estar disponível para ele.
          Após limpar o cache do browser, a alteração surge em sua tela. O
          inconveniente soa estranho, já que a cada novo <em>bundle</em> gerado
          pelo Aurelia CLI, um novo <em>hash</em> sufixava o nome de cada
          arquivo requisitado pela aplicação, forçando assim a invalidação de
          qualquer tipo de cache. Ao investigar melhor, descubro que de fato
          há um problema com a geração do <em>hash</em>. Altero os arquivos
          fontes, gero um novo <em>bundle</em> e, surpreendentemente, o <em>
          hash</em> não muda. O recurso utilizado para forçar a invalidação de
          cache realmente não estava funcionando conforme o esperado. Atualizo
          o pacote <em>Aurelia CLI</em>, mas o problema persiste.
        </p>
        <p>
          O que fazer então? Tenho a ideia de sufixar os assets com um <em>
          timestamp</em> a cada novo deploy. Ainda que o <em>hash</em> não
          mudasse, o parâmetro contendo o <em>timestamp</em> forçaria a
          invalidação do cache. Ótimo. Com a ideia em mãos, faltava agora
          apenas saber em qual arquivo escrever a alteração. Ao verificar que
          todos esses scripts estavam dentro do pacote <em>Aurelia CLI</em>, me
          dou conta que eu não tenho controle sobre aquelas configurações.
        </p>
        <p>
          Como se pode perceber, o <em>Aurelia CLI</em> me trouxe um problema,
          mas trouxe também um grande aprendizado. Escolha sempre configurar,
          jamais aceite ser configurado.
        </p>
        <h2>
          Jogue lixo no lixo, não na sua aplicação.
        </h2>
        <p>
          Durante boa parte do tempo que trabalhei numa empresa chamada Conta
          Azul, contribuí ativamente com a seleção de novos programadores
          front-end. Além de planejar e conduzir entrevistas, avaliei uma
          grande quantidade de desafios técnicos que recebíamos em uma
          determinada etapa do processo.
        </p>
        <p>
          Esse tal desafio se chamava <ExternalLink href="https://weather-now-vue.web.app/">
          Weather Now</ExternalLink>, uma mini aplicação que continha apenas uma
          barra superior e apresentava a temperatura de três cidades. Embora muito
          simples, essa aplicação nos dava a oportunidade de avaliar muitos
          dos itens que buscávamos identificar nos candidatos. Como o
          candidato alinharia os cards exibidos na interface, como ele
          alternaria a ordem das informações em telas pequenas, quão fiel
          seria a tela em relação ao mockup enviado, quão limpo seria o
          código, como ele organizaria os arquivos/diretórios e, finalmente,
          como ele configuraria a aplicação.
        </p>
        <p>
          Por várias vezes, constatava decepcionado que a aplicação tinha sido
          estruturada e configurada com comandos ao estilo <em>au new</em>. Na
          maioria desses casos, o arquivo de configuração sequer estava visível.
          Aqueles desenvolvedores provavelmente teriam grandes dificuldades
          até para explicar quais dependências o projeto realmente precisava.
          Não foram poucas as vezes que encontrei arquivos que sequer eram
          utilizados pela aplicação, mas que continuavam ocupando espaço
          desnecessário no projeto porque o desenvolvedor teria esquecido de
          removê-los.
        </p>
        <Quote
          sourceText="Derek Sivers"
          sourceHref="https://sivers.org/polut"
          lang="en">
          You couldn’t just roll down the street leaving huge piles of garbage
          everywhere you go, making life slower for everyone as they climb
          over your mountains of junk, just to get on with their life. You’d
          feel bad about it, right? That’s how I feel about the digital
          things we put out into the world: websites, apps, and files.<br />
          I prefer coding everything by hand, because I don’t like the huge
          piles of garbage that the automated generators create. These
          programs that generate a website, app, or file for you spit out
          thousands of lines of unnecessary junk when really only 10 lines
          are needed. Then people wonder why their site is so slow, and they
          think it’s their phone or connection’s fault.
        </Quote>
        <StorySpacer />
        <p>
          Quando você permite que um agente terceiro configure sua aplicação,
          você abre mão de uma das decisões mais importantes de um projeto.
          Decidir como e quais peças juntar para fazer sua aplicação funcionar.
          Ao negligenciar essa responsabilidade, você pode até se deparar com
          algo que funciona, mas pode não saber exatamente o porquê. Não
          sabendo o porquê, você pode acabar com algo mais pesado e mais
          complexo do que o necessário. Por mais encantador que um comando
          possa parecer, nunca abra mão do total controle sobre as
          configurações da sua aplicação. Dez, vinte ou trinta minutos de
          economia na criação de uma nova aplicação não se comparam aos dias
          de desperdício e às horríveis gambiarras que a falta de controle
          pode custar a curto prazo.
        </p>
      </StoryViewport>
    );
  }
}
