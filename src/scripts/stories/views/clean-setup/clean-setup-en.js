import React, { Component } from 'react';
import { ExternalLink } from '@scripts/base/components/external-link/external-link';
import { Quote } from '@scripts/base/components/quote/quote';
import { StorySpacer } from '@scripts/stories/components/story-spacer/story-spacer';
import { StoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';

export class CleanSetupEN extends Component {
  render() {
    return (
      <StoryViewport>
        <p>
          Then you face the opportunity to walk through an untouchable and
          green field. A road still free from any obstacle. That is, it is time
          to start a new, promising and shining application from scratch. First
          step? Set it up, of course. That is the moment in which <em>not-so-interesting
          </em> decisions could rapidly wash that green field out and drop the
          first stones over that clean road.
        </p>
        <h2>
          Configure it rather than let it be configured.
        </h2>
        <p>
          When Vue was not yet a thing and setting a React application up was
          nearly impossible with <em>bundlers</em> and <em>transpilers</em> still
          very immature, I decided to try a novelty called Aurelia. After some
          failed attempts to set the application up manually, I discover a
          package called <em>aurelia-cli</em>. I install it, run au new, answer
          to a few questions and <em>voilá</em>. All the failure of my previous
          attempts fades away in a matter of seconds. Not only its
          configuration, but all the structure of the application has been
          generated too. I quickly understood how and where to write my files,
          which scripts execute to get tests running, assets compiled and the
          application served. The horizon could not be bluer and nothing could
          go wrong.
        </p>
        <p>
          I keep going with my <em>Aurelia Developer</em> career very excited
          until the moment a workmate warns me that the change I have just put
          in production seems not to be available for him. After clearing the
          browser cache, that change raises on the screen. The inconvenient
          sounds weird since every new application bundle had a new hash
          suffix on its filenames. Any kind of cache should not survive after
          that. Investigating a little deeper, I got convinced that there was a
          problem regarding the hash suffix generation. I change some source
          files, generate a new bundle and, surprisingly, the hash suffix does
          not change. The strategy used to invalidate the cache was not really
          working as expected. I update the <em>Aurelia CLI</em> package, but
          the bug is still there.
        </p>
        <p>
          So what to do? I got the idea of suffixing all the assets with a <em>
          timestamp</em> parameter at each new deploy. If the hash suffix does not
          change, that parameter will force the cache invalidation. Great. With
          the idea in my hands, I just needed to know in which file to write
          this. As soon as I see that all the application scripts were managed
          by the <em>Aurelia CLI</em> package, I discovered that I have no
          control over the configurations of the application.
        </p>
        <p>
          The Aurelia CLI package brought me a problem, but also a great lesson.
          Configure it rather than let it be configured.
        </p>
        <h2>
          The application is not a trash can.
        </h2>
        <p>
          During the time I worked at Conta Azul, I collaborated with new
          front-end developers hires. Besides planning and conducting interviews,
          I evaluated many technical tasks we received from candidates at some
          specific step of the process.
        </p>
        <p>
          The task consisted of developing a tiny application called <ExternalLink href="https://weather-now-vue.web.app/">
          Weather Now</ExternalLink> that only showed a topbar and weather
          stats for three preselected cities. Although very simple, that
          application gave us total conditions to evaluate lots of skills we
          were looking for. How the candidate would align the application cards.
          How he would alternate their order on small screens. How much the final
          interface would match the mockup sent, how clean would be the code,
          how he would organize the files and directories and, finally, how he
          would set the application up.
        </p>
        <p>
          Several times I got frustrated with applications that have been
          generated using commands like <em>au new</em>. In most cases, I could
          not even see a configuration file. Those developers would probably
          face difficulties to even explain which dependencies their application
          really needed. Sometimes I found files that were not used by the
          application, but they were still there taking unnecessary space
          because the developer forgot to remove them.
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
          When you allow a third party library to set your application up, you
          throw away one of the most critical steps of a project. You no longer
          decide how and which parts get together to make your application
          works. When you refuse that responsibility, you can even see a
          working application, but you might not know why. And if you don't
          know the why, you might end up with an application heavier and more
          complex than it really needed. Do not be enticed for easy commands.
          Never lose total control over the configurations of the application.
          Saving ten, twenty, or thirty minutes setting an application up is
          worthless when compared to the waste that those terrible
          half-ass solutions and the lack of full control can charge in the
          short term.
        </p>
      </StoryViewport>
    );
  }
}
