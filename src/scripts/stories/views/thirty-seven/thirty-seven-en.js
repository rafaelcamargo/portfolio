import React, { Component } from 'react';
import { ExternalLink } from '@scripts/base/components/external-link/external-link';
import { Quote } from '@scripts/base/components/quote/quote';
import { StoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';

export class RThirtySevenEN extends Component {
  render() {
    return (
      <StoryViewport>
        <Quote
          sourceText="Inspiration for the name 37signals"
          sourceHref="https://37signals.com/33.html">
          Mankind constantly analyzes radio waves from outer space in the
          search for extraterrestrial intelligence. Since this analysis started,
          almost all of the signal sources have been identified. 37 signals,
          however, remain unexplained.
        </Quote>
        <p>
          As intriguing as the quote above, it has been the capacity of a small
          company called <ExternalLink href="https://37signals.com/">
          37signals</ExternalLink> to throw uncountable meteors over common
          sense on design, business, and tech, since the late '90s.
        </p>
        <p>
          The first meteor was probably the document that marks the rise of
          the company. Its <em>manifesto</em>. Written in 1999 and having 37 <em>
          micro-texts</em> which, even after two decades, keep all their
          freshness.
        </p>
        <h2>
          Grow a company doing better, not more.
        </h2>
        <p>
          The contempt for everything that can take the focus away from the true
          spirit of the <em>web</em> is wide open in the phrase that opens the
          manifesto:  <em>The web should empower, not frustrate</em>. A few
          paragraphs later, <ExternalLink href="https://37signals.com/17.html">
          No Awards Please</ExternalLink> reinforces how effectless would
          be the design industry judgment on the final work produced by the
          company. The means would never shine more than the end. <em>Useful and
          easy to use</em>.
        </p>
        <p>
          Companies wish to grow. To grow, companies figure out how to deliver
          more value. In a large number of cases, delivering more value becomes
          delivering more services. Stating <ExternalLink href="https://37signals.com/04.html">
          Not Full Service</ExternalLink>, the company  elegantly curbs the
          temptation to grow doing more instead of doing better.
        </p>
        <Quote
          sourceText="37signals Manifesto [04]"
          sourceHref="https://37signals.com/04.html"
          lang="en">
          We think companies that claim they can do everything actually excel at nothing.
        </Quote>
        <h2>
          Sense over appearance.
        </h2>
        <p>
          Technology powers our notion of newness. Newness boosts the desire
          to be up-to-date. And the desire to be up-to-date can misguide
          important decisions. <ExternalLink href="https://37signals.com/25.html">
          Just Because You Can, Doesn't Mean You Should</ExternalLink> discards
          decisions based on a vague <em>it’s so cool!</em> or on <em>everyone else is
          doing!</em> Some paragraphs ahead and, on <ExternalLink href="https://37signals.com/28.html">
          Tulipomania</ExternalLink>, we find the following statement:
        </p>
        <Quote
          sourceText="37signals Manifesto [28]"
          sourceHref="https://37signals.com/28.html"
          lang="en">
          Trends are temporary. Don't just do something because everyone else
          is doing it – do something because it makes sense.
        </Quote>
        <h2>
          Usability is secondary.
        </h2>
        <p>
          Someone could say it’s sacrilege not to consider usability as the
          most important factor in a website. <ExternalLink href="https://37signals.com/26.html">
          Make it Useful</ExternalLink> remember us that before to be usable,
          the website needs to be useful.
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
          Copy Righting.
        </h2>
        <p>
          An always heard premise is: <em>user doesn’t read</em>. By the way, <em>
          Don’t Make Me Think</em> dedicates a whole paragraph in its second
          chapter to clarify <em>How we really use the web</em>:
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
          Would users navigate the web that frenetically or is that a
          consequence of zero interest for a disappointing copy? <ExternalLink href="https://37signals.com/11.html">Copy
          Righting</ExternalLink> suggests the following reflection: Would you read it if you didn't
          write it? A lot of companies believe <em>it’s good if it looks
          good</em>, and commit the sin of not taking good care of their
          copywriting. Seduce, entice, entertain. Copy righting.
        </p>
        <p>
          Like its manifesto, a lot of other audacious <ExternalLink href="https://basecamp.com/books">
          publications</ExternalLink> would be launched in the following years.
          What all of them have in common seems to be intimately connected with
          the name of the company, 37signals. Identify signals amid the infinite
          amount of noise around us.
        </p>
      </StoryViewport>
    );
  }
}
