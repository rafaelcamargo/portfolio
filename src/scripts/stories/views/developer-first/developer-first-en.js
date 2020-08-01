import React, { Component } from 'react';
import { Quote } from '@scripts/base/components/quote/quote';
import { StorySpacer } from '@scripts/stories/components/story-spacer/story-spacer';
import { StoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';

export class DeveloperFirstEN extends Component {
  render() {
    return (
      <StoryViewport>
        <p>
          Over the past few years, we have heard a variety of strategies succeed
          in the dispute for how best to approach software development. A few
          years ago, it was common to use the term API-first. More recently,
          the enthusiasm was with AI-first. As a developer, I suggest adopting
          a new strategy. A strategy that does not exclude any other that is
          already in progress. A strategy that maintains the same suffix as
          those already mentioned, but that adds the human factor to the word
          that comes before it. Developer-First.
        </p>
        <p>
          Right now, you might think I'm looking to make developers the
          centerpiece of software development. If that was your impression,
          don't worry. You’re right. Don’t get me wrong, I don’t mean that a
          product should not put customers' needs as the main reason for its
          development. Note that I used the term software development, not <em>
          product</em> development because I consider that the problem to be
          solved is already clear at this stage as well as it is also clear
          that the solution involves software. The end remains to offer a
          solution to someone's problem. What is suggested here is how to
          better deal with the means. Software development.
        </p>
        <p>
          When we realize that software development (still) requires developers,
          it is evident that the level of developer engagement directly impacts
          the final result of the software produced. The less are dedication
          and commitment, the less are the chances of a great outcome.
          Therefore, it is essential that engagement, usually high at the
          beginning, does not disappear along the process. So which ingredients
          would favor developer engagement?
        </p>
        <h2>
          Precision
        </h2>
        <p>
          Software that doesn’t work doesn’t solve anyone's problem. Precision
          is an unquestioned requirement of any product that is on the market.
          But it is also an essential requirement to maintain the engagement of
          those who develop it.
        </p>
        <p>
          If releasing a new feature feels like taking us one step ahead on the
          game, stop everything to fix a bug feels like getting us two steps
          back. Fixing bugs means investing energy just to keep in the same
          place. If bugs destroy the reputation of software outside the
          company, they undermine engagement inside it.
        </p>
        <h2>
          Productivity
        </h2>
        <p>
          Developing the most precise software in the world wouldn’t be
          applaudable if it never got shipped. From the moment a solution is
          figured out until the moment it’s available to the customer, there is
          the development time. The shorter is that time, the faster we can
          check whether the proposed solution solves a problem or not. And
          the faster that feedback loop is, the more developers keep engaged
          with the software they are building.
        </p>
        <Quote
          sourceText="Finding Flow"
          sourceHref="https://www.thriftbooks.com/w/finding-flow-the-psychology-of-engagement-with-everyday-life-masterminds-series_mihaly-csikszentmihalyi/253384/#isbn=0465045138&idiq=1009114"
          lang="en">
          Another characteristic of flow activities is that they provide
          immediate feedback. They make it clear how well you are doing. After
          each move of a game you can tell whether you have improved your
          position or not.
        </Quote>
        <p>
          Whether you have to remember to turn something on/off in a specific
          moment of the day or having to write the same piece of code for every
          new feature developed, you will get bored very fast. And when
          boredom gets in, engagement gets out. Repetitive tasks must be
          automated as well as every common pattern in code must be abstracted.
        </p>
        <StorySpacer />
        <p>
          If it doesn’t make sense to launch very fast something that doesn’t
          work, it’s also not viable never to ship something because we’re
          not sure it works properly. Precision and Productivity are two
          ingredients that perfectly balance out each other. <b>Developer-first
          is an approach that values high developer engagement. And high
          engagement only happens when we can build very fast, something
          that works very well.</b>
        </p>
        <p>
          Adopting this strategy doesn’t demand the seal of any manager or
          director. It’s only on us, developers. Therefore, when you have to take
          any decision along with the software development, ask yourself: <em>How does
          it collaborate to make our software more precise? How would it make
          us write tests more easily? How does it make our code more
          understandable? How does it allow us to write less code? How it will
          speed us up?</em> If the decision taken is not able to satisfy one of
          these questions, great are the chances it’s not Developer-first.
        </p>
      </StoryViewport>
    );
  }
}
