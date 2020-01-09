import React, { Component } from 'react';
import { RCode } from '@scripts/base/components/code/code';
import { RQuote } from '@scripts/base/components/quote/quote';
import { RStoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';

export class RBottlesAndPrinciplesEN extends Component {
  render() {
    return (
      <RStoryViewport
        storySummaryId={6}
        primaryLanguage="en">
        <p>
          Something really curious about lots of the most famous programming
          concepts, principles and good practices is that they seem to
          disappear or, at least, keep distant, when the software we are
          talking about is a web client, also known as a front-end application.
        </p>
        <p>
          Very few front-end projects that I have seen in my life had a
          minimum of logical dignity regarding how code was organized. Most of
          them were just a bunch of code lines highly interdependent with
          very bad delimited responsibilities. A real mess that wasn’t even
          close from any of the letters SOLID.
        </p>
        <p>
          In the middle of that blurry and mysterious representation of what
          would be the web-client raises something that is likely the main
          cause for the despair felt by who needs to maintain and improve
          that mess. Style sheets. Yes, CSS. I have met programmers that felt
          real terror for CSS. Among other lovely statements, I have already heard:
        </p>
        <p>
          <em>
            (a) Pure s*** (b) Very easy to f*** that all (c) CSS is like Lego.
            If you start it wrong, it gets very hard to change the initial pieces
            after some later s*** has been made (d) F****** confusing.
          </em>
        </p>
        <p>
          Some developers blame the global nature of CSS. Others attack what
          they judge to be a universe of indecipherable symbols and relations.
          Even another part of them just complains they can’t position a
          button at the exact place the designer would like in a fashion
          that mixes begging and despair.
        </p>
        <p>
          CSS may have a different structure, a different syntax, may not be
          even considered a programming language. However, I assure you it
          accepts the greatest programming principles, concepts and good
          practices like any real programming language.
        </p>
        <h2>
          Before thinking in technology, think in principles
        </h2>
        <p>
          That said, I suggest you that instead of trying to tame your CSS
          with weird class names that mix double dashes and underlines, or to
          exploit hidden logics that sometimes treat classes as layout,
          sometimes as pages and sometimes as themes, or even to commit the
          sacrilege of putting styles in your JavaScript, just practice one of
          the listed principles in the acronym SOLID. The letter "O"
          represents the <em>Open-Closed</em> principle.
        </p>
        <RQuote
          sourceText="Wikipedia"
          sourceHref="https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle">
          Software entities should be open for extension, but closed for
          modification; that is, such an entity can allow its behavior to be
          extended without modifying its source code.
        </RQuote>
        <p>
          That’s the concept. Organize your objects in a way that they can
          have their behavior extended with no need to modify them.
        </p>
        <h2>
          Defining objects
        </h2>
        <p>
          One easy way to understand it in practice is by imagining a bottle.
          Yes, a bottle. At this moment, you are likely imagining a soda bottle,
          beer bottle, wine bottle or even an empty bottle. However, notice
          that I cited just a bottle, not its contents. A bottle accepts an
          infinity of different liquids inside. I can fill it with soda, beer
          or wine with no need to modify it. It's such a great example of an
          object that respects the open-closed principle.
        </p>
        <p>
          Now, you might be asking yourself: How the heck a bottle is going to
          protect me against the hell my style sheets may become? Below, I am
          going to repeat the example above, but in the form of code. CSS
          classes, more specifically.
        </p>
        <RCode language="html">
{
`<div class="bottle">
  <div class="bottle-content"></div>
</div>`
}
        </RCode>
        <p>
          What we can see is an empty bottle. Once the bottle is an object, it
          has its own style sheet: <em>bottle.css</em>.
        </p>
        <h2>
          Specializing objects
        </h2>
        <p>
          After having created a bottle, a wine bottle is now required. Now
          what? How to organize the code? Should I create a class named as <em>
          bottle-content-wine</em> and add it to the <em>&lt;div&gt;</em> that
          already contains the <em>bottle-content</em> class? Should I
          create a theme named as <em>bottle-wine</em> to the bottle and add
          it to the <em>&lt;div&gt;</em> that already contains the class <em>
          bottle</em>? Notice, every one of the suggestions above would be
          violating the <em>Open-Closed</em> principle because all of them would
          be modifying the bottle code. The best way to handle the wine bottle
          is creating another object in your system that makes use of the
          base bottle without modifying it. Take a look:
        </p>
        <RCode language="html">
{
`<div class="wine-bottle">
  <div class="bottle">
    <div class="bottle-content"></div>
  </div>
</div>`
}
        </RCode>
        <p>
          From now on, beyond the style sheet <em>bottle.css</em>, you will have
          another one named as <em>wine-bottle.css</em>. The last one may extend
          every element of the base bottle the way it needs. Example:
        </p>
        <RCode language="css">
{
`.wine-bottle .bottle-content {
  background-color: red;
}`
}
        </RCode>
        <p>
          Done!
        </p>
        <p>
          To make things easier to understand, ignore for now the several
          different colors wines could be. The most important thing here is
          to notice the bottle has not been modified and, wherever I put a
          bottle in my system, it will always look the same. This same warranty
          should be true for the wine bottle and for any other object you create.
        </p>
        <p>
          Also notice that following the <em>Open-Closed</em> principle you
          automatically dose your selector specificity at the exact need for
          your necessity. This is crucial for bottle and wine-bottle keep
          themselves open for extension. If you over-specify your selectors,
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
          itself not aspects of the context that is using the bottle. One
          approach to face this case would be:
        </p>
        <RCode language="html">
{
`<div class="bottle bottle-small">
  <div class="bottle-content"></div>
</div>`
}
        </RCode>
        <p>
          The CSS class <em>bottle-small</em> modifies the default bottle making it
          small. That said, <em>bottle-small</em> should be placed on <em>bottle.css
          </em> style sheet. In that style sheet, every aspect that refers to the
          bottle should be placed, including its own variations. That style
          sheet should not contain anything that is not directly related to
          the bottle. Bottle should not know any aspect other than its own. If
          we create a class named <em>bottle-wine</em> and write it inside <em>
          bottle.css</em>, we would be bringing the context into the bottle.
          Since a bottle can be filled with infinite different contents, we
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
        <RCode language="html">
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
        </RCode>
        <ol>
          <li>
            The root element in the object's markup must have the CSS class
            which represents the name of the object, <em>application</em> in the
            example above. That CSS class works as namespace and must prefix
            every other CSS class that belongs to the object.
          </li>
          <li>
            The CSS class that represents the name of the object is also the
            name of the stylesheet where all object's CSS classes will be written.
          </li>
          <li>
            The CSS classes that perform the modifier role are never used
            alone. <em>application-action-close</em> has no effect if used alone.
            In this case, it only modifies something if used together <em>
            application-action</em>.
          </li>
        </ol>
        <h2>
          In practice
        </h2>
        <p>
          Are you curious to see this concept applied in a real project? Check
          out one of my open source projects called <a href="https://glorious.codes/demo" target="_blank">
          Glorious Demo</a>. As commented in this story, each one of the <a href="https://github.com/glorious-codes/glorious-demo/tree/master/src/styles" target="_blank">
          style sheets</a> represents one single object and always keep itself
          open for extension.
        </p>
      </RStoryViewport>
    );
  }
}
