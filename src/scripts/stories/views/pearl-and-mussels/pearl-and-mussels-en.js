import React, { Component } from 'react';
import { Quote } from '@scripts/base/components/quote/quote';
import { ExternalLink } from '@scripts/base/components/external-link/external-link';
import { StorySpacer } from '@scripts/stories/components/story-spacer/story-spacer';
import { StoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';

export class PearlAndMusselsEN extends Component {
  render() {
    return (
      <StoryViewport>
        <p>
          Octocash. That was the name of the product that I, and two colleagues,
          launched four years ago. Starting to build a product in the early
          stage of your career is such a great experience. Every member
          overflows optimism. Optimism is so abundant that nothing more is
          necessary to develop the product. The level of enthusiasm is so high
          that understanding profoundly a problem becomes optional. After
          designing a logo and the first application views, we worked hard until
          putting the product in the air. Visitor after visitor, we begin to
          measure a bitter result of zero conversions. So we sadly realized that
          it required more than just opening the store to make a business succeed.
        </p>
        <h2>
          Mussels
        </h2>
        <p>
          Still disappointed, we started to figure out the possible reasons that
          dared to drain our ocean of optimism. The bets have started. Most of
          them pointed out a missing feature as the principal cause. <em>Users do
          not convert because the product don’t do this. Users do not convert
          because the product don’t do that...</em> Very quickly, we had a big
          pile of work to do. The more we discussed, the more features we would
          like the product to have. We believed that with each new feature
          added to the product, we would be increasing the chances of someone to
          pay for it.
        </p>
        <p>
          Given that long list of feature to do, and not believing that we would
          be delivering anything that competitors did not already do, I decided
          to quit the project. Even though we were very excited, I concluded
          that a complete lack of understanding about the problem made us unable
          to deliver anything that would delight our customers. We were trying
          to convince ourselves that the product could succeed by gathering as
          many mussels as possible, not noticing that we had no pearls to offer.
        </p>
        <h2>
          Pearl
        </h2>
        <p>
          Two years later, inspired by the homepage of a product that I liked so
          much - WeDeploy - I started to build a new <em>product</em>. This time,
          infinitely more modest. Besides, I was completely protected from the
          disappointment of no one paying for it. The product was open-source
          software, it was called <ExternalLink href="https://glorious.codes/demo">
          Glorious Demo</ExternalLink>, and allowed a developer to use JavaScript
          to build an animation that simulated the development and execution of
          a code snippet. With very few lines of JavaScript, it was possible to
          create an animation that opens an editor, writes on it, opens a
          terminal, executes some commands, and returns responses. From that
          moment, it became possible to do with JavaScript what used to require
          animated GIFs.
        </p>
        <p>
          The first positive feedback I get is from the guy who led WeDeploy at
          the time, Zeno Rocha. His <ExternalLink href="https://twitter.com/zenorocha/status/1057275408935194625">tweet
          </ExternalLink> made the project reach almost forty stars on Github.
          Being for the first time in my life recognized by people who I didn't
          even know just echoed inside me as the greatest of all successes. A
          couple days later, on a Thursday night, I post the product on Product
          Hunt. On Friday morning, I wake up astonished by seeing Glorious Demo
          as <ExternalLink href="https://www.producthunt.com/posts/glorious-demo">
          the most upvoted product of the day</ExternalLink>. The project
          surpasses 300 stars and get featured as a trending JavaScript library
          on Github. One of the most popular publications in the world on CSS <ExternalLink href="https://twitter.com/css/status/1060325303459962882">
          tweets</ExternalLink> about the project. A <ExternalLink href="https://twitter.com/jnthnhw/status/1060209206685564929">
          programmer in Seattle</ExternalLink> creates a website called <ExternalLink href="https://roadtoglory.netlify.app/">
          Road To Glory</ExternalLink> that allows anyone to use Glorious Demo
          through a graphical user interface. Glorious Demo becomes a <ExternalLink href="https://heowc.dev/2018/11/14/introduction-hexo-tag-gdemo/">
          plugin</ExternalLink> for Hexo by the hands of a South Korean
          programmer. Blog posts are written in <ExternalLink href="https://www.majidonline.com/article/%D9%85%D8%B9%D8%B1%D9%81%DB%8C_%DB%8C%DA%A9_%D8%B1%D8%A7%D9%87_%D8%A2%D8%B3%D8%A7%D9%86_%D9%88_%D8%B2%DB%8C%D8%A8%D8%A7_%D8%A8%D8%B1%D8%A7%DB%8C_%D9%86%D9%85%D8%A7%DB%8C%D8%B4_%DA%A9%D8%AF%D9%87%D8%A7%DB%8C_%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87_%D8%A8%D8%B5%D9%88%D8%B1%D8%AA_%D8%A7%D9%86%DB%8C%D9%85%DB%8C%D8%B4%D9%86.html">
          Arabic</ExternalLink> and <ExternalLink href="https://paiza.hatenablog.com/entry/2019/01/16/JavaScript%E3%81%A7%E3%82%BD%E3%83%BC%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%89%E3%82%84%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E6%93%8D%E4%BD%9C%E3%82%92%E3%82%A2%E3%83%8B%E3%83%A1%E3%83%BC%E3%82%B7%E3%83%A7">
          Japanese</ExternalLink>.
        </p>
        <p>
          Now, eighteen months after launch, that small product made with 80
          commits reaches 3,000 stars of popularity on Github, and the project's
          website counts tens of thousands of visits from over 150 countries. I
          have no doubt that in November of 2018, I had accidentally discovered
          a pearl.
        </p>
        <h2>
          Impact over features
        </h2>
        <p>
          If missing features use to be the explanation for the low engagement
          of the users, perhaps the real problem is not that, but the fact that
          existing features simply don't delight anyone. In the
          book Rework, Jason Fried and David Hansson comment on competition
          and the number of product features in a section called <em>Underdo your
          competition</em>. Surpass your competitors by doing less, not more.
        </p>
        <Quote
          sourceText="Rework"
          sourceHref="https://www.thriftbooks.com/w/rework_david-heinemeier-hansson_jason-fried/246388/#isbn=0307463745&idiq=3992062">
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
        <StorySpacer />
        <p>
          Once in a while, we may find ourselves in a situation where the
          product is considered behind a competitor because it has fewer
          features. A situation where the success of the product necessarily
          consists in surpassing the big list of features that the competitor
          already offers. At that moment, we may fall into the temptation to
          drive the product towards a path that is unable to surprise our
          clients. We can absurdly conclude that our product will delight our
          customers when it delivers the same features which competitors already
          do. Believing that we will beat a competitor by having <em>more</em> features
          than having the <em>right</em> features is like to gather mussels. It
          does not matter how many of them you can pile up, they will never beat
          the impact caused by the bright of a tiny pearl.
        </p>
      </StoryViewport>
    );
  }
}
