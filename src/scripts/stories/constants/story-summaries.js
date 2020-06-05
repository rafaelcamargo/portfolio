import { RUnconditionalInhotimPT } from '@scripts/stories/views/unconditional-inhotim/unconditional-inhotim-pt';
import { RPearlAndMusselsPT } from '@scripts/stories/views/pearl-and-mussels/pearl-and-mussels-pt';
import { RDeveloperFirstPT } from '@scripts/stories/views/developer-first/developer-first-pt';
import { RThirtySevenEN } from '@scripts/stories/views/thirty-seven/thirty-seven-en';
import { RThirtySevenPT } from '@scripts/stories/views/thirty-seven/thirty-seven-pt';
import { RCleanCodeEN } from '@scripts/stories/views/clean-code/clean-code-en';
import { RCleanCodePT } from '@scripts/stories/views/clean-code/clean-code-pt';
import { RComponentMaturityModelEN } from '@scripts/stories/views/component-maturity-model/component-maturity-model-en';
import { RComponentMaturityModelPT } from '@scripts/stories/views/component-maturity-model/component-maturity-model-pt';
import { RBottlesAndPrinciplesEN } from '@scripts/stories/views/bottles-and-principles/bottles-and-principles-en';
import { RFormattingQualityEN } from '@scripts/stories/views/formatting-quality/formatting-quality-en';
import { RFormattingQualityPT } from '@scripts/stories/views/formatting-quality/formatting-quality-pt';

export default [
  {
    id: 'Mmx5gPyQC',
    created: '2020-06-06',
    lang: 'pt',
    title: 'Incondicional Inhotim',
    excerpt: 'Temos todos a capacidade de reconhecer a beleza no imediato momento em que nos colocamos diante dela. Essa foi a certeza que tomou conta de mim no dia que visitei o maior museu de arte contemporânea a céu aberto do mundo. Um jardim que poderia ser perfeitamente chamado de paraíso. Inhotim.',
    keywords: 'Inhotim, arte, Hélio Oiticica, Adriana Varejão, Valeska Soares, Hugo França, Chelpa Ferro',
    view: RUnconditionalInhotimPT,
    url: {
      href: '/incondicional-inhotim'
    }
  },
  {
    id: 'mzUJTQH08',
    created: '2020-05-31',
    lang: 'pt',
    title: 'Pérolas e mariscos',
    excerpt: 'Octocash. Esse era o nome do produto que eu e dois colegas lançamos há quatro anos. Começar a construir o próprio produto tendo apenas dois anos de profissão é uma experiência deslumbrante. Todos os integrantes transbordam otimismo. É tanto otimismo que ele sozinho é mais do que suficiente para desenvolver o produto. É tanta euforia que entender profundamente um problema passa a ser opcional. Após desenharmos um logo e as primeiras telas, programamos loucamente até colocar o produto no ar. Visitante após visitante, começamos a coletar então a amarga métrica de zero conversões. Ops! Ficou evidente que era preciso mais que só abrir a porta da loja pro negócio dar certo.',
    keywords: 'perolas, mariscos, features, desenvolvimento de produto',
    view: RPearlAndMusselsPT,
    url: {
      href: '/perolas-e-mariscos'
    },
    relationIds: ['VZTsV7OQo', '5563IL90X']
  },
  {
    id: 'VZTsV7OQo',
    created: '2020-05-24',
    lang: 'pt',
    title: 'Developer first',
    excerpt: 'Ao longo dos últimos anos temos ouvido uma variedade de estratégias se sucederem na disputa por como melhor abordar o desenvolvimento de um software. Há poucos anos, era corriqueiro o uso do termo API-First. Mais recentemente, o entusiasmo foi com AI-First. Sendo desenvolvedor, sugiro a adoção de uma nova estratégia. Uma estratégia que não exclui qualquer outra que já esteja em curso. Uma estratégia que mantém o mesmo sufixo daquelas já mencionadas, mas que adiciona o fator humano na palavra que o precede. Developer-First.',
    keywords: 'developer first, desenvolvedor, precisão, produtividade',
    view: RDeveloperFirstPT,
    url: {
      href: '/developer-first-pt'
    },
    relationIds: ['_JEc2sLgc', 'gCHMAKMQG']
  },
  {
    id: 'xZMkuGXQ3',
    created: '2020-05-24',
    lang: 'en',
    title: 'Thirty seven',
    excerpt: 'Mankind constantly analyzes radio waves from outer space in the search for extraterrestrial intelligence. Since this analysis started, almost all of the signal sources have been identified. 37 signals, however, remain unexplained.',
    keywords: 'thirty seven, 37signals, manifesto',
    view: RThirtySevenEN,
    url: {
      href: '/thirty-seven'
    }
  },
  {
    id: '5563IL90X',
    created: '2020-05-17',
    lang: 'pt',
    title: 'Trinta e sete',
    excerpt: 'A humanidade frequentemente analisa as ondas de rádios vindas do espaço na busca por inteligência extraterrestre. Desde que essas análises começaram, a origem de quase todos os sinais foi identificada. Trinta e sete delas, porém, permenecem inexplicadas.',
    keywords: 'trinta e sete, 37signals, manifesto',
    view: RThirtySevenPT,
    url: {
      href: '/trinta-e-sete'
    },
    relationIds: ['VZTsV7OQo']
  },
  {
    id: 'ZlEeWEKqC',
    created: '2020-05-13',
    lang: 'en',
    title: 'Clean code',
    excerpt: 'This is one of the most famous books in the programming universe. Its fame seems only not to be bigger than the number of developers that still has not read it. Some of them complain about the examples shown in the book to be written in Java, wrongly considering the language as an obstacle to understand what clean code is. I have also heard that clean code would be such a utopia, that functions containing four or five statements would be reserved for the software development Olympus.',
    keywords: 'code, clean',
    view: RCleanCodeEN,
    url: {
      href: '/clean-code'
    },
    relationIds: ['Qt7tQ7T6p']
  },
  {
    id: '_JEc2sLgc',
    created: '2020-05-09',
    lang: 'pt',
    title: 'Código limpo',
    excerpt: 'Esse é um dos livros mais famosos do universo da programação. Sua fama parece só não ser maior do que o número de programadores que ainda não leu esse livro. Alguns reclamam que os exemplos exibidos ao longo do livro estão escritos em Java, como se a linguagem de programação fosse um obstáculo para entender o que é código limpo. Já ouvi também que o tal código limpo seria uma utopia, que funções contendo quatro ou cinco linhas estariam reservadas ao Olimpo do desenvolvimento de software.',
    keywords: 'código, limpo',
    view: RCleanCodePT,
    url: {
      href: '/codigo-limpo'
    },
    relationIds: ['gCHMAKMQG', 'VZTsV7OQo']
  },
  {
    id: 'Qt7tQ7T6p',
    created: '2020-01-17',
    lang: 'en',
    title: 'Formatting quality',
    excerpt: 'It was mid-2018 and I needed to build an application for internal use at the company I was working for. The project was to put on the air a web client to monitor the company’s main application releases. I was the only front-end developer in the project and, having all the powers to structure the application the way I considered best, I couldn’t miss the opportunity to drive the application to quality.',
    thumbnail: 'story-formatting-quality-512x512.png',
    keywords: 'eslint, formatting, code, quality',
    view: RFormattingQualityEN,
    url: {
      href: '/formatting-quality'
    },
    image: {
      filename: 'story-formatting-quality.svg',
      alt: 'code successfully formatted'
    },
    relationIds: ['ZlEeWEKqC']
  },
  {
    id: 'gCHMAKMQG',
    created: '2020-01-17',
    lang: 'pt',
    title: 'Formatando qualidade',
    excerpt: 'Era meados de 2018 e eu precisava criar uma aplicação de uso interno na empresa onde trabalhava. O projeto era colocar no ar um cliente web para monitorar as releases da aplicação principal da empresa. Eu era o único front-end trabalhando no projeto e, tendo totais poderes para estruturar a aplicação da maneira que eu achasse melhor, não pude deixar passar a oportunidade de orientar a aplicação à qualidade.',
    thumbnail: 'story-formatting-quality-512x512.png',
    keywords: 'eslint, formatação, código, qualidade',
    view: RFormattingQualityPT,
    url: {
      href: '/formatando-qualidade'
    },
    image: {
      filename: 'story-formatting-quality.svg',
      alt: 'Código bem formatado'
    },
    relationIds: ['_JEc2sLgc', 'VZTsV7OQo']
  },
  {
    id: '2E0CpLf5S',
    created: '2020-01-07',
    lang: 'en',
    title: 'Bottles and principles. How to better organize CSS.',
    excerpt: 'Something really curious about lots of the most famous programming concepts, principles and good practices is that they seem to disappear or, at least, keep distant, when the software we are talking about is a web client, also known as a front-end application.',
    thumbnail: 'story-bottles-and-principles-512x512.png',
    keywords: 'component, css, stylesheet, open-closed',
    view: RBottlesAndPrinciplesEN,
    url: {
      href: '/bottles-and-principles-how-to-better-organize-css'
    },
    image: {
      filename: 'story-bottles-and-principles.svg',
      alt: 'bottles with different contents'
    },
    relationIds: ['ZlEeWEKqC', 'Qt7tQ7T6p']
  },
  {
    id: 'UwYUUy1Au',
    created: '2019-08-22',
    lang: 'pt',
    title: 'Garrafas e princípios. Como melhor organizar CSS.',
    excerpt: 'Algo realmente curioso em relação a vários dos consagrados conceitos, princípios e boas práticas de programação é que eles parecem simplesmente desaparecer, ou ao menos soar distante, quando o software em questão é o cliente web, vulgo front-end.',
    thumbnail: 'story-bottles-and-principles-512x512.png',
    keywords: 'component, css, folhas de estilo, open-closed',
    url: {
      href: 'https://medium.com/@rcamargo/entre-garrafas-e-princ%C3%ADpios-como-organizar-melhor-seu-css-4f1572159a04',
      target: '_blank'
    },
    image: {
      filename: 'story-bottles-and-principles.svg',
      alt: 'bottles with different contents'
    },
    relationIds: ['_JEc2sLgc', 'VZTsV7OQo']
  },
  {
    id: 'd35RrBlBl',
    created: '2019-11-30',
    lang: 'en',
    title: 'Component maturity model',
    excerpt: 'Think you are a programmer, a front-end programmer. You collaborate with the development of a web product. Your workmates are back-end programmers, designers and product owners. So, in an ordinary day, in a casual meeting, in a simple presentation or in a regular chat among team members, you make use of a word, a very simple word. Component.',
    thumbnail: 'story-component-maturity-model-512x512.png',
    keywords: 'component, maturity, model, custom elements, css components',
    view: RComponentMaturityModelEN,
    url: {
      href: '/component-maturity-model'
    },
    image: {
      filename: 'story-component-maturity-model.svg',
      alt: 'ui coponents illustration'
    },
    relationIds: ['ZlEeWEKqC', 'Qt7tQ7T6p']
  },
  {
    id: '1baSryrKk',
    created: '2019-11-30',
    lang: 'pt',
    title: 'Modelo de maturidade de componentes',
    excerpt: 'Pense que você é um programador, um programador front-end. Você colabora com o desenvolvimento de um produto web. Você trabalha junto com designers, programadores back-end e product owners. Então um belo dia numa reunião, numa apresentação ou num simples bate papo entre membros do time, você faz uso de uma palavra muito simples. Componente.',
    thumbnail: 'story-component-maturity-model-512x512.png',
    keywords: 'componentes, maturidade, modelo, custom elements, componentes css',
    view: RComponentMaturityModelPT,
    url: {
      href: '/modelo-de-maturidade-de-componentes'
    },
    image: {
      filename: 'story-component-maturity-model.svg',
      alt: 'ui coponents illustration'
    },
    relationIds: ['gCHMAKMQG', '_JEc2sLgc']
  },
  {
    id: '23vsS2pEj',
    created: '2018-02-20',
    lang: 'en',
    title: 'Components beyond reuse',
    excerpt: 'We are living times where the Model/View/Controller concept is getting more and more obsolete making Component Based approach the new standard to develop web applications now. However, as well as Component Based has become a so popular concept, I still see a lot of developers understanding components in a surprisingly weird way.',
    url: {
      href: 'https://medium.com/@rcamargo/components-beyond-reuse-6cef6848a748',
      target: '_blank'
    },
    image: {
      filename: 'story-components-beyond-reuse.svg',
      alt: 'ui coponents illustration'
    }
  },
  {
    id: 'OBhUcpbeJ',
    created: '2018-02-18',
    lang: 'pt',
    title: 'Componentes além do reuso',
    excerpt: 'Vivemos tempos em que o conceito Model/View/Controller está ficando cada vez mais obsoleto fazendo da abordagem Component-Based o padrão atual no desenvolvimento de aplicações web.',
    url: {
      href: 'https://tableless.com.br/componentes-alem-do-reuso/',
      target: '_blank'
    },
    image: {
      filename: 'story-components-beyond-reuse.svg',
      alt: 'ui coponents illustration'
    }
  },
  {
    id: '0eEqEWrqS',
    created: '2018-03-08',
    lang: 'en',
    title: 'Webpacking environment variables',
    excerpt: 'Keeping with the same expectation of maintaining a simple, easy to understand and crystal clear way to manage environment variables in the browser without having to make any trick or write unnecessary code, I show below how to achieve that same result using now Webpack.',
    url: {
      href: 'https://medium.com/@rcamargo/webpacking-environment-variables-8515e2b95002',
      target: '_blank'
    },
    image: {
      filename: 'story-webpacking-environment-variables.svg',
      alt: 'environment bundles illustration'
    }
  },
  {
    id: 'PpIHVFvmk',
    created: '2017-08-31',
    lang: 'en',
    title: 'Handling environment variables in the browser',
    excerpt: 'Front end projects usually make use of external resources through URLs, API Keys, etc. Those things may change depending on which environment you are running your code. If you are in a development environment, you don’t want to mess your metrics like Mixpanel or Google Analytics, for example.',
    url: {
      href: 'https://engineering.contaazul.com/handling-environment-variables-in-the-browser-bbde35661798',
      target: '_blank'
    },
    image: {
      filename: 'story-handling-environment-variables-in-the-browser.svg',
      alt: 'environment packages illustration'
    }
  },
  {
    id: '_N9Pf7BH2',
    created: '2017-04-07',
    lang: 'en',
    title: 'Avoiding traps in event-driven programming',
    excerpt: 'Every developer knows the importance of keeping the code as much decoupled as possible. Loosely coupling drives your code to smaller responsibilities and, consequently, granular objects which bring us fast understanding and easy maintenance. Sometimes, one of the strategies which can aid you to achieve this is to use events to make those granular objects communicate each other without necessarily know each other.',
    url: {
      href: 'https://engineering.contaazul.com/avoiding-traps-in-event-driven-programming-b996f5aa6248',
      target: '_blank'
    },
    image: {
      filename: 'story-avoiding-traps-in-event-driven-programming.svg',
      alt: 'satellite illustration'
    }
  }
];
