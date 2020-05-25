import React, { Component } from 'react';
import { RExternalLink } from '@scripts/base/components/external-link/external-link';
import { RQuote } from '@scripts/base/components/quote/quote';
import { RStoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';

export class RCleanCodeEN extends Component {
  render() {
    return (
      <RStoryViewport>
        <p>
          This is one of the most famous books in the programming universe. Its
          fame seems only not to be bigger than the number of developers that
          still has not read it. Some of them complain about the examples shown
          in the book to be written in Java, wrongly considering the language
          as an obstacle to understand what clean code is. I have also heard
          that clean code would be such a utopia, that functions containing
          four or five statements would be reserved for the software
          development Olympus.
        </p>
        <p>
          The book, a few moments, may give excessive attention to not so
          pragmatic details, but nearly all of it shares a pearl of unique
          wisdom. Below, I will highlight the pieces that better describe the
          path that leads to the clean code, in my point of view.
        </p>
        <h2>
          Letter over numbers.
        </h2>
        <RQuote
          sourceText="Source"
          sourceHref="https://www.osnews.com/story/19266/wtfsm/">
          The only valid measurement of code quality: WTF/Minute.
        </RQuote>
        <p>
          The statement above opens the book’s introduction. It seems to
          anticipate all of what is going to be discussed on the following
          hundreds of pages. Every line of software you change collaborates
          with the story that you write together with your workmates.
          Low-quality software is a sequence of facts impossible to understand.
          A story that makes no sense. An avalanche of WTF/Minute. To write
          clean code, you need to be more skilled with letters than numbers.
        </p>
        <h2>
          One letter at a time.
        </h2>
        <RQuote
          sourceText="Clean Code"
          sourceHref="https://www.thriftbooks.com/w/clean-code-a-handbook-of-agile-software-craftsmanship-robert-c-martin-series_robert-c-martin/332840/#isbn=0132350882&idiq=10169803">
          The ratio of time spent reading vs. writing is well over 10:1. We
          are constantly reading old code as part of the effort to write new
          code. [...] You cannot write code if you cannot read the surrounding
          code.  [...] So if you want to go fast, if you want to get done
          quickly, if you  want your code to be easy to write, make it easy to read.
        </RQuote>
        <p>
          Communication is a must-have skill to write clean code. Naming a
          variable is communication. Naming a file is communication. Grouping
          files into directories is communication.
        </p>
        <p>
          Some time ago, I turned to a friend and said: <em>Do you know what I’d
          like to do when I read code like this?</em>. He asked me
          back: <em>What?</em>. <em>I’d like to pass my finger on the screen. It’s
          likely Braille.</em>, I answered. That file was plenty of single-letter
          variables.
        </p>
        <p>
          Don’t be afraid of giving long names to your variables, functions,
          files, and directories. Be sure to give them the meaning they need
          to have. One minute invested in a good name can save ten other
          minutes from who needs to understand it. One letter at a time. Never
          one letter only.
        </p>
        <h2>
          One thing. One single thing. One thing only.
        </h2>
        <p>
          If you can't have your cake and eat it too, why do expect it of the
          code? Directories, files, classes, modules, and functions. Everything
          should do one thing only. Everything should have one responsibility
          only. Remember that directory called utils. The first question that
          comes to mind is: <em>If that directory contains useful code, what kind
          of code would I find inside of the other directories?</em> Utils is not
          only a weird name, but it’s also a great example of something that
          does much more than what it should. It’s a lack of limits.
        </p>
        <p>
          Responsibility requires boundaries. It sets the start and the end.
          It defines what something does and, most important, defines what it
          does not. Usain Bolt became the faster man in history because he
          decided to do one thing well. One single thing. One thing only.
        </p>
        <h2>
          Clean code needs no comments.
        </h2>
        <RQuote
          sourceText="Clean Code"
          sourceHref="https://www.thriftbooks.com/w/clean-code-a-handbook-of-agile-software-craftsmanship-robert-c-martin-series_robert-c-martin/332840/#isbn=0132350882&idiq=10169803">
          The proper use of comments is to compensate for our failure to
          express ourself in code. Note that I used the word failure. I meant it.
          Comments are always failures. We must have them because we cannot
          always figure out how to express ourselves without them, but their
          use is not a cause for celebration.
        </RQuote>
        <p>
          The only thing we can be sure about comments is that machines will
          ignore them. Comments can’t be tested. Since they can’t be tested,
          they can rapidly become outdated. Once they get outdated, the only
          thing we can be sure of is that developers will ignore them.
        </p>
        <p>
          If at some point you find yourself writing a comment trying to better
          explain your code, figure out why the code wasn’t able to explain
          itself. Comments are always an opportunity for improvements. Like
          clean code, this <RExternalLink href="https://youtu.be/wXaC0YvDgIo?t=237">video</RExternalLink> also
          needs no comments.
        </p>
        <h2>
          Edit brilliantly.
        </h2>
        <p>
          <em>Red, Green, Blue</em>. This is an expression related to Test
          Driven Development - <em>TDD</em>. Those three colors represent the
          following development steps:
        </p>
        <ul>
          <li>
            <u>Red</u>: Once you write a test before implementing it, the test
            fails when it runs for the first time.
          </li>
          <li>
            <u>Green</u>: You iterate through the implementation up to the test succeed.
          </li>
          <li>
            <u>Blue</u>: As soon as the test succeeds, you transform the code
            that only works in a code that works very well.
          </li>
        </ul>
        <p>
          After having a passing test, you have all the safety you need to
          re-read your code and make sure the names you have chosen are still
          making sense. If a couple lines of code can be removed. If the
          implementation could be cleaner. If you don’t hit the submit button
          as soon as you finish writing an email, why would you consider the
          implementation done as soon as it works?
        </p>
        <p>
          About the importance of editing, Jason Fried wrote <RExternalLink href="https://signalvnoise.com/posts/2930-svn-flashback-eureka-were-editors">Eureka! We’re editors</RExternalLink> and
          Carolyn Cherry noticed it very well:
        </p>
        <p>
          <em>It is  perfectly okay to write garbage as long as you edit brilliantly</em>.
        </p>
      </RStoryViewport>
    );
  }
}
