import React, { Component } from 'react';
import { ExternalLink } from '@scripts/base/components/external-link/external-link';
import { StoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';

export class InfluencesEN extends Component {
  render() {
    return (
      <StoryViewport hideFooter>
        <p>
          Once in a while, friends and strangers ask me about what are the
          contents that have influenced most. I used to answer them
          individually by email, direct messages, and occasional chats. But my
          memory is always like a hard disk requiring more space, so I decided
          to put all the great things that have shaped the way I see the world
          in the following list. I hope some of these references can surprise
          you the same way they have surprised me.
        </p>
        <h2>
          Books
        </h2>
        <ul>
          <li>
            <b>Virando a Própria Mesa (Maverick)</b>, <em>Ricardo Semler</em>
          </li>
          <li>
            <b>The Manual: A Philosopher’s Guide to Life</b>, <em>Epictetus</em>
          </li>
          <li>
            <b>Sapiens</b>, <em>Yuval Noah Harari</em>
          </li>
          <li>
            <b>Sobre a Brevidade da Vida (On The Shortness Of Life)</b>, <em>Seneca</em>
          </li>
          <li>
            <b>Rework</b>, <em>Jason Fried & David Hanson</em>
          </li>
          <li>
            <b>De Pernas Pro Ar (Upside Down)</b>, <em>Eduardo Galeano</em>
          </li>
          <li>
            <b>As Veias Abertas da América Latina (Open Veins of Latin America)</b>, <em>Eduardo Galeano</em>
          </li>
          <li>
            <b>Getting Real</b>, <em>Jason Fried & David Hanson</em>
          </li>
          <li>
            <b>Clean Code</b>, <em>Robert Martin</em>
          </li>
          <li>
            <b>Pedagogia do Oprimido (Pedagogy of the Oppressed)</b>, <em>Paulo Freire</em>
          </li>
          <li>
            <b>Shape Up</b>, <em>Ryan Singer</em>
          </li>
          <li>
            <b>Don’t Make Me Think</b>, <em>Steve Krug</em>
          </li>
          <li>
            <b>Testable Javascript</b>, <em>Mark Ethan Trostler</em>
          </li>
          <li>
            <b>Bauhaus 1919-1933</b>, <em>Magdalena Droste</em>
          </li>
          <li>
            <b>Responsive Web Design</b>, <em>Ethan Marcotte</em>
          </li>
        </ul>
        <h2>
          Videos
        </h2>
        <ul>
          <li>
            <ExternalLink href="https://www.youtube.com/watch?v=47aFAIDierM">
              Sangue Latino: Eduardo Galeano
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.ted.com/talks/ricardo_semler_how_to_run_a_company_with_almost_no_rules">
              How to run a company with (almost) no rules
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.imdb.com/title/tt3674140/">
              The Salt of the Earth
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.ted.com/talks/derek_sivers_how_to_start_a_movement">
              How to start a movement
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.youtube.com/watch?v=m89rYW0epTs">
              Dance monkeys, dance!
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.youtube.com/watch?v=DgfodqUcNhI">
              Steve Jobs speech at Stanford
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.ted.com/talks/dan_pink_the_puzzle_of_motivation">
              The puzzle of motivation
            </ExternalLink>
          </li>
        </ul>
        <h2>
          Posts
        </h2>
        <ul>
          <li>
            <ExternalLink href="https://sivers.org/richand">
              How I got rich on the other hand
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://sivers.org/subtract">
              Subtract
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://sivers.org/full">
              What if you didn’t need money or attention?
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://m.signalvnoise.com/reconsider/">
              Reconsider
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://m.signalvnoise.com/exponential-growth-devours-and-corrupts/">
              Exponential growth devours and corrupts
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://sahillavingia.com/reflecting">
              Reflecting on My Failure to Build a Billion-Dollar Company
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="http://blog.cleancoder.com/uncle-bob/2011/01/17/software-craftsmanship-is-about.html">
              What Software Craftsmanship is about
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://derickbailey.com/2015/08/26/building-a-component-based-web-ui-with-modern-javascript-frameworks/">
              Building A Component-Based Web UI With Modern JavaScript Frameworks
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://sivers.org/polut">
              Digital pollution
            </ExternalLink>
          </li>
        </ul>
      </StoryViewport>
    );
  }
}
