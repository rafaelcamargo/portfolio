import React, { Component } from 'react';
import { Code } from '@scripts/base/components/code/code';
import { Quote } from '@scripts/base/components/quote/quote';
import { RStoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';

export class RBottlesAndPrinciplesEN extends Component {
  render() {
    return (
      <RStoryViewport>
        <p>
          Something curious about lots of the most popular programming
          concepts, principles and good practices is that they seem to
          disappear or, at least, keep distant, when the software we are
          talking about is a web-client, also known as a front-end application.
        </p>
        <p>
          Very few front-end projects that I have seen in my life had a
          minimum of logical dignity regarding how they organized code. Most of
          them were just a bunch of code lines highly interdependent with
          bad delimited responsibilities. A real mess that didn't get even
          close from any of the letters <em>SOLID</em>.
        </p>
        <p>
          In the middle of that blurry and mysterious representation of what
          would be the web-client raises something that is likely the principal
          cause for the despair felt by who needs to maintain and improve
          that mess. Style sheets. Yes, CSS. I have met programmers that felt
          real terror for CSS. Among other lovely statements, I have already heard:
        </p>
        <p>
          <em>
            (a) Pure s*** (b) Very easy to f*** that all (c) CSS is like Lego.
            If you start it wrong, it gets hard to change the pieces
            after some later s*** has been made (d) F****** confusing.
          </em>
        </p>
        <p>
          Some developers blame the global nature of CSS. Others attack what
          they judge to be a universe of indecipherable symbols and relations.
          Even another part of them complains they cannot position a
          button at the exact place the designer would like in a fashion
          that mixes begging and despair.
        </p>
        <p>
          CSS may have a different structure, a different syntax, may not be
          considered a programming language. However, I assure you it
          accepts great programming principles, concepts, and best
          practices like any real programming language.
        </p>
        <h2>
          Before thinking about technology, think about principles.
        </h2>
        <p>
          You might try to tame styles with weird CSS classes that mix double
          dashes with underlines or allow hidden logics that sometimes treat
          CSS classes as layout, sometimes as page, and sometimes as a theme,
          or even commit the sacrilege to put styles in JavaScript. Instead of
          trying those things, just remember one of the principles listed on
          the SOLID acronym. The "O" letter represents the <em>Open-Closed
          </em> principle.
        </p>
        <Quote
          sourceText="Wikipedia"
          sourceHref="https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle">
          Software entities should be open for extension, but closed for
          modification; that is, such entity can allow its behavior to be
          extended without modifying its source code.
        </Quote>
        <p>
          That is the concept. Organize your objects in a way that they can
          have their behavior extended with no need to modify them.
        </p>
        <h2>
          Defining objects
        </h2>
        <p>
          One easy way to understand it in practice is by imagining a bottle.
          Yes, a bottle. At this moment, you might imagine a soda bottle,
          beer bottle, wine bottle, or even an empty bottle. However, notice
          that I referred just to the bottle object, not its contents. You can
          fill a bottle with lots of different liquids. Soda, beer, wine, and
          there's no need to modify it. It's a great example of an object that
          respects the open-closed principle.
        </p>
        <p>
          Now, you might be asking yourself: How the heck a bottle is going to
          protect me against the hell my style sheets may become? Below, I am
          going to repeat the example above, but in the form of code. CSS
          classes, more specifically.
        </p>
        <Code language="html">
{
`<div class="bottle">
  <div class="bottle-content"></div>
</div>`
}
        </Code>
        <p>
          What we can see here is an empty bottle. Once the bottle is an object, it
          has its style sheet: <em>bottle.css</em>.
        </p>
        <h2>
          Specializing objects
        </h2>
        <p>
          After having created a bottle, your project demands a wine bottle. Now
          what? How to organize the code? Should I create a class named as <em>
          bottle-content-wine</em> and add it to the <em>&lt;div&gt;</em> that
          already contains the <em>bottle-content</em> class? Should I
          create a theme named as <em>bottle-wine</em> to the bottle and add
          it to the <em>&lt;div&gt;</em> that already contains the class <em>
          bottle</em>? Notice, every one of the above suggestions would be
          violating the <em>Open-Closed</em> principle because all of them would
          be modifying the bottle code. The best way to handle the wine bottle
          is by creating another object in your system that makes use of the
          base bottle without modifying it. Take a look:
        </p>
        <Code language="html">
{
`<div class="wine-bottle">
  <div class="bottle">
    <div class="bottle-content"></div>
  </div>
</div>`
}
        </Code>
        <p>
          From now on, beyond the style sheet <em>bottle.css</em>, you will have
          another one named as <em>wine-bottle.css</em>. The last one may extend
          every element of the base bottle the way it needs. Example:
        </p>
        <Code language="css">
{
`.wine-bottle .bottle-content {
  background-color: red;
}`
}
        </Code>
        <p>
          Done!
        </p>
        <p>
          To make things easier to understand, ignore for now the several
          different colors wines could be. The most important thing here is
          that the bottle didn't get modified. Doing so, wherever I put a
          bottle in my system, it will always look the same. This same
          warranty should exist for the wine bottle and for any other object
          you create.
        </p>
        <p>
          Also, notice that following the <em>Open-Closed</em> principle, you
          automatically dose your selector specificity at the exact weight for
          your necessity. That is an essential requirement to keep the bottle and
          the wine-bottle open for extension. If you over-specify your selectors,
          you may end up blocking the extension and, that way, violating
          the principle.
        </p>
        <h2>
          Variations of the same object
        </h2>
        <p>
          So you may be thinking: what if a new requirement demands a small
          or large bottle? Should I create new objects named <em>small-bottle
          </em> and <em>large-bottle</em>?
        </p>
        <p>
          No. In this case, we would be handling aspects of the bottle
          itself, not aspects of the context that is using the bottle. One
          approach to face this case would be:
        </p>
        <Code language="html">
{
`<div class="bottle bottle-small">
  <div class="bottle-content"></div>
</div>`
}
        </Code>
        <p>
          The CSS class <em>bottle-small</em> modifies the default bottle making it
          small. That said, <em>bottle-small</em> should be on the <em>
          bottle.css</em> style sheet. In that style sheet, every aspect that
          refers to the bottle should be placed, including its variations. That
          style sheet should not contain anything that is not directly related to
          the bottle. The bottle should not know any aspect other than its own. If
          we create a class named <em>bottle-wine</em> and write it inside <em>
          bottle.css</em>, we would be bringing the context into the bottle.
          Since you can fill a bottle with infinite different contents, we
          would be taking the risk of inflating the bottle object with a pile
          of aspects that should not be there. After some time, this object
          will likely become very complex and hard to maintain.
        </p>
        <h2>
          Class name, namespace and style sheet
        </h2>
        <p>
          Intending to avoid a possible misunderstanding between CSS classes
          that represent an object and CSS classes that represent modifiers,
          three simple rules related to the markup anatomy should be respected:
        </p>
        <Code language="html">
{
`<div class="application">
  <div class="application-topbar">
    <div class="application-actions-container">
      <div class="application-action application-action-close"></div>
      <div class="application-action application-action-minimize"></div>
      <div class="application-action application-action-maximize"></div>
    </div>
    <div class="application-title-container"></div>
  </div>
  <div class="application-content-container"></div>
</div>`
}
        </Code>
        <ol>
          <li>
            The object root HTML element must contain the CSS class that
            represents the name of that object, <em>application</em> in the
            example above. That CSS class works like a namespace and must prefix
            every other CSS class that belongs to that object.
          </li>
          <li>
            The CSS class that represents the name of the object is also the
            name of the stylesheet where all the object CSS classes will be.
          </li>
          <li>
            The CSS classes that perform the modifier role does not stand
            alone. The CSS class <em>application-action-close</em> has no effect.
            It only modifies something if used together <em>application-action</em>.
          </li>
        </ol>
        <h2>
          In practice
        </h2>
        <p>
          Are you curious to see this concept applied in a real project? Check
          out one of my open-source projects called <a href="https://glorious.codes/demo" target="_blank">
          Glorious Demo</a>. As commented in this story, each one of those <a href="https://github.com/glorious-codes/glorious-demo/tree/master/src/styles" target="_blank">
          style sheets</a> represents one single object and always keep themselves
          open for extension.
        </p>
      </RStoryViewport>
    );
  }
}
