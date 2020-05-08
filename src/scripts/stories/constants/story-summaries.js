import { RComponentMaturityModelEN } from '@scripts/stories/views/component-maturity-model/component-maturity-model-en';
import { RComponentMaturityModelPT } from '@scripts/stories/views/component-maturity-model/component-maturity-model-pt';
import { RBottlesAndPrinciplesEN } from '@scripts/stories/views/bottles-and-principles/bottles-and-principles-en';
import { RFormattingQualityEN } from '@scripts/stories/views/formatting-quality/formatting-quality-en';
import { RFormattingQualityPT } from '@scripts/stories/views/formatting-quality/formatting-quality-pt';

export default [
  {
    id: 11,
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
    }
  },
  {
    id: 10,
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
    }
  },
  {
    id: 9,
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
  },
  {
    id: 8,
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
  },
  {
    id: 7,
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
    }
  },
  {
    id: 6,
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
    }
  },
  {
    id: 5,
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
    id: 4,
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
    id: 3,
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
    id: 2,
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
    id: 1,
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
