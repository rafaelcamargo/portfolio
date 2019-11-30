import React, { Component } from 'react';
import { RCol } from '@scripts/base/components/col/col';
import { RHero } from '@scripts/base/components/hero/hero';
import { RRow } from '@scripts/base/components/row/row';
import { RSection } from '@scripts/base/components/section/section';
import { RStory } from '@scripts/stories/components/story/story';
import { RViewport } from '@scripts/base/components/viewport/viewport';

const meta = {
  title: 'Component Maturity Model',
  description: '',
  keywords: 'component, maturity, model, custom elements, css components'
};

export class RComponentMaturityModelEN extends Component {
  render() {
    return (
      <RViewport
        title={ meta.title }
        description={ meta.description }
        keywords={ meta.keywords }>
        <RHero title="Component Maturity Model" size="small" />
        <RSection>
          <RRow >
            <RCol size="12">
              <RStory>
                <p>
                  Think you are a programmer, a front-end programmer. You
                  collaborate with the development of a web product. Your
                  workmates are back-end programmers, designers and product
                  owners. So, in an ordinary day, in a casual meeting, in a
                  simple presentation or in a regular chat among team members,
                  you make use of a word, a very simple word. Component.
                </p>
                <p>
                  You could be sharing something you learnt on your latest
                  reading, making a suggestion about the way of developing user
                  interfaces or making just a joke. Regardless you were doing,
                  at the exact moment you finished to pronounce the last
                  syllable of this so simple word called "component", something
                  very complex is gonna start to happen.
                </p>
                <p>
                  Your designer will invoke the powers of Design System god,
                  blessed with the glory of Atomic Design and baptized with
                  each variable containing on his set of Design Tokens. Your
                  product owner, bewitched by the reusability magic - and
                  suffocated by the Gantt chart that demands him to ship dozens
                  of new features - will ask you a thousand times: "So does it
                  allow us to deliver more features in less time?". And,
                  finally, the back-end programmer will say nothing more than:
                  "I already used Bootstrap once. I hate CSS".
                </p>
                <p>
                  Even though it has four syllables only, the word "component"
                  causes zillions of different interpretations and expectations.
                  So easy to say it, so hard to define it.
                </p>
                <p>
                  At this moment, you might be convinced that I’m gonna
                  introduce a definition for the word "component" that will
                  cause you a "mindquake". The definition that, once pronounced,
                  is able to incinerate any ambiguity.
                </p>
                <p>
                  No man, I’m sorry. Unfortunately, I didn’t find that one and
                  only powerful definition, but I’ll try to help you offering
                  three! They represent what I called Component Maturity Model.
                </p>
                <h2>
                  Level Zero
                </h2>
                <h3>
                  Chaos
                </h3>
                <p>
                  Welcome to the chaos. At this level, anyone of that zillions
                  of different interpretations doesn’t even exist. Everything is
                  reduced to blood, sweat and tears. Nothing can be reused and
                  any change is very expensive.
                </p>
                <h4>
                  Anatomy
                </h4>
                <ul>
                  <li>
                    No predefined HTML structure that can be replicated.
                  </li>
                  <li>
                    No predefined CSS classes that could be used together those
                    predefined HTML structures.
                  </li>
                  <li>
                    Markup, styles and logic are not encapsulated.
                  </li>
                </ul>
                <h4>
                  Side Effects
                </h4>
                <ul>
                  <li>
                    <b>Unnecessary CSS.</b> With no predefined CSS classes, already
                    existing styles are redundantly written as new classes.
                    Within a short period of time, you end up with different
                    classes in different stylesheets doing the exact same thing.
                  </li>
                  <li>
                    <b>Unnecessary scripts.</b> Since the existing logic is not
                    encapsulated, the same behaviour is replicated along the
                    system.
                  </li>
                  <li>
                    <b>Zero reuse.</b> With no predefined HTML structures, those
                    different CSS Classes multiply themselves at the same speed
                    which new random HTML structures are created.
                  </li>
                  <li>
                    <b>Very expensive changes.</b> With the same responsibility
                    replicated in several other parts of the application, even
                    the smallest change could become the worst nightmare since
                    you don’t have any idea of how many parts of the system
                    need to be changed.
                  </li>
                </ul>
                <h5>
                  Example
                </h5>
                <div className="story-code">
                  <code>
                    &lt;div class="finance-btn-attach-file glyphicons paperclip"&gt;<br/>
                    &nbsp;&nbsp;&lt;i&gt;&lt;/i&gt;Attach documents<br/>
                    &lt;/div&gt;
                  </code>
                </div>
                <p>
                  A generic button to upload files got coupled to a stylesheet
                  already connected to a business domain (finance). Markup and
                  logic are not encapsulated and will be replicated with other
                  classes and markup on every part of the system which a file
                  upload button be necessary again.
                </p>
                <h2>
                  Level One
                </h2>
                <h3>
                  CSS Components
                </h3>
                <p>
                  Stage which predefined HTML structures are available and CSS
                  classes can be reused.
                </p>
                <h4>
                  Anatomy
                </h4>
                <ul>
                  <li>
                    Predefined HTML structures.
                  </li>
                  <li>
                    Predefined CSS classes.
                  </li>
                  <li>
                    Markup, styles and logic still not encapsulated.
                  </li>
                </ul>
                <h4>
                  Side Effects
                </h4>
                <ul>
                  <li>
                    <b>Less CSS.</b> With predefined HTML structures, CSS classes
                    can be reused from now on. New CSS classes are drastically
                    avoided and much less CSS needs to be written.
                  </li>
                  <li>
                    <b>Unnecessary markup.</b> Although you already have
                    predefined HTML structures, they aren’t encapsulated. That
                    said, unnecessary markup still continues to be replicated
                    along the system.
                  </li>
                  <li>
                    <b>Unnecessary scripts.</b> Same as markup, the lack of
                    encapsulation still makes the behaviour to be replicated
                    in different parts of the system.
                  </li>
                  <li>
                    <b>Expensive changes</b> At least on CSS, changes become
                    less expensive. However, any change related to the markup
                    or the behaviour still costs a lot.
                  </li>
                </ul>
                <h5>
                  Example
                </h5>
                <div className="story-code">
                  <code>
                    &lt;button class="btn btn-primary"&gt;<br/>
                    &nbsp;&nbsp;&lt;i class="glyphicons glyphicons-download-alt"&gt;&lt;/i&gt; Download<br/>
                    &lt;/button&gt;
                  </code>
                </div>
                <p>
                  This is a predefined HTML structure for a button styled as
                  primary and containing an icon at the left of its text. Every
                  part of the system that requires a button like this are now
                  able to achieve the same result replicating that HTML
                  structure with those CSS classes.
                </p>
                <h2>
                  Level Two
                </h2>
                <h3>
                  Custom Elements
                </h3>
                <p>
                  Welcome productivity! This is the stage which everything,
                  absolutely everything, is encapsulated in uts own component.
                </p>
                <h4>
                  Anatomy
                </h4>
                <ul>
                  <li>
                    Predefined HTML structures.
                  </li>
                  <li>
                    Predefined CSS classes.
                  </li>
                  <li>
                    Markup, style and logic are encapsulated.
                  </li>
                </ul>
                <h4>
                  Side Effects
                </h4>
                <ul>
                  <li>
                    Each component becomes the single authority about one only
                    system's responsibility.
                  </li>
                  <li>
                    Everything becomes reusable.
                  </li>
                  <li>
                    Changes are cheap.
                  </li>
                </ul>
                <h5>
                  Example
                </h5>
                <div className="story-code">
                  <code>
                    &lt;my-button data-theme="primary" data-icon-name="paperclip"&gt;<br/>
                    &nbsp;&nbsp;Attach Documents<br/>
                    &lt;/my-button&gt;
                  </code>
                </div>
                <p>
                  The custom element above (my-button) is the single part of
                  the system where anything related to all application buttons
                  is handled.
                </p>
                <p>
                  As you can see, that one and only powerful definition I
                  really can’t offer at this time, but I hope these three
                  levels of maturity may help you to explain to your workmates
                  what kind of components are you talking about, what level of
                  maturity you expected to have and which level you would
                  like to reach.
                </p>
              </RStory>
            </RCol>
          </RRow>
        </RSection>
      </RViewport>
    );
  }
}
