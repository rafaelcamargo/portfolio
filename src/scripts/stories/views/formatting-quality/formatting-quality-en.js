import React, { Component } from 'react';
import { RStoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';

export class RFormattingQualityEN extends Component {
  render() {
    return (
      <RStoryViewport
        storySummaryId={7}
        primaryLanguage="en">
        <p>
          It was mid-2018 and I needed to build an application for internal
          use at the company I was working for. The project was to put on the
          air a web client to monitor the company’s main application releases.
          I was the only front-end developer in the project and, having all
          the powers to structure the application the way I considered best,
          I couldn’t miss the opportunity to drive the application to quality.
        </p>
        <p>
          Since 2017, I have been configuring the unit test coverage threshold
          in 100% on the personal and professional applications in which I have
          been working on. On this project, it wasn’t different. But this time,
          I would like to ensure some other aspects related to quality. I
          wanted to find a way to avoid functions and files inflate themselves
          tending to the chaos. I wanted to avoid nested conditions that
          little by little make the return of a function becomes unpredictable,
          terrible to read and maintain. I wanted to find such an alarm that
          would be fired every time a module, class or function starting to
          concentrate too much responsibility.
        </p>
        <p>
          Looking for tools that could help me to check the code quality, I
          noticed how much ESLint was underused at the company where I worked.
          Most programmers that use ESLint drive its configuration to
          syntactical aspects. At where I was, it wasn’t different. We
          enforced semicolon at the end of sentences, eighty columns as
          maximum line length, two spaces as indentation size, and so on.
          However, reading the tool documentation in detail, I discovered it
          offers the possibility not to check the code syntax only, but great
          quality aspects too. Personally, I liked three of those rules so much:
        </p>
        <p>
          <b>
            <a href="https://github.com/glorious-codes/glorious-pitsby/blob/master/.eslintrc.json#L27" target="_blank">
              Cyclomatic Complexity
            </a>
          </b>
        </p>
        <p>
          Amount of linear paths some code can go through. A function that
          contains a high level of cyclomatic complexity certainly has more
          than one single responsibility and makes impossible for anyone to
          predict what it returns just reading its name. I set this rule’s
          maximum value as three. In practice, it means a function can contain
          one <em>if/else</em> or two <em>if</em>.
        </p>
        <p>
          <b>
            <a href="https://github.com/glorious-codes/glorious-pitsby/blob/master/.eslintrc.json#L28" target="_blank">
              Maximum Lines
            </a>
          </b>
        </p>
        <p>
          Modules/Classes containing hundreds of lines are a code smell. They
          are very likely to concentrate on more responsibilities than they
          should. It’s not rare to stumble upon some file named <em>helper</em> which,
          in practice, becomes a bottomless chest that accepts anything and
          tends to inflate indefinitely. Setting one hundred as the maximum
          number of lines for a file, I make it hard to concentrate
          responsibilities and favor its distribution instead. Modules and
          classes should be as small as their responsibilities.
        </p>
        <p>
          <b>
            <a href="https://github.com/glorious-codes/glorious-pitsby/blob/master/.eslintrc.json#L29" target="_blank">
              Maximum Statements
            </a>
          </b>
        </p>
        <p>
          In addition to cyclomatic complexity, a function that contains too
          many statements is a clue that it’s doing more than what it should.
          For this rule, I define a limit of five statements per function.
        </p>
        <p>
          As well as the unit test coverage threshold, I don't start a project
          without those quality rules anymore. Those constraints collaborate
          with an important factor. I'm forced to reflect on how I organize my
          code <em>all the time</em>. You can successfully release some code today
          by only focusing on making it satisfy its requirements. But reflecting
          on how to organize the code even before it satisfies any requirement,
          you ensure the success of today's release and every other else.
        </p>
      </RStoryViewport>
    );
  }
}
