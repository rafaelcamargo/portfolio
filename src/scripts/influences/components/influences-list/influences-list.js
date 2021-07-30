import '@styles/influences-list.styl';
import React, { Component } from 'react';
import { ExternalLink } from '@scripts/base/components/external-link/external-link';

export class InfluencesList extends Component {
  render() {
    return (
      <div className="r-influences-list">
        <p>
          Once in a while, friends and strangers ask me about what are the
          contents that have influenced me most. I used to answer them
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
            <ExternalLink href="https://www.amazon.com.br/Virando-Pr%C3%B3pria-Mesa-Ricardo-Semler/dp/8532513484">
              Virando a Própria Mesa (Maverick)
            </ExternalLink>, <em>Ricardo Semler</em>
          </li>
          <li>
            <ExternalLink href="https://www.amazon.com.br/Manual-Philosophers-Guide-Philosophy-English-ebook/dp/B072KZWHW4">
              The Manual: A Philosopher’s Guide to Life
            </ExternalLink>, <em>Epictetus</em>
          </li>
          <li>
            <ExternalLink href="https://www.amazon.com.br/Anything-You-Want-Lessons-Entrepreneur/dp/0241209048">
              Anything You Want
            </ExternalLink>, <em>Derek Sivers</em>
          </li>
          <li>
            <ExternalLink href="https://www.amazon.com.br/Sapiens-Brief-History-Humankind-English-ebook/dp/B00ICN066A">
              Sapiens
            </ExternalLink>, <em>Yuval Noah Harari</em>
          </li>
          <li>
            <ExternalLink href="https://www.amazon.com.br/Sobre-brevidade-vida-firmeza-s%C3%A1bio/dp/8582850506">
              Sobre a Brevidade da Vida (On The Shortness Of Life)
            </ExternalLink>, <em>Seneca</em>
          </li>
          <li>
            <ExternalLink href="https://www.amazon.com.br/ReWork-Change-Way-Work-Forever/dp/0091929784">
              Rework
            </ExternalLink>, <em>Jason Fried & David Hanson</em>
          </li>
          <li>
            <ExternalLink href="https://www.amazon.com.br/Pernas-Pro-Escola-Mundo-Avesso/dp/8525408336">
              De Pernas Pro Ar (Upside Down)
            </ExternalLink>, <em>Eduardo Galeano</em>
          </li>
          <li>
            <ExternalLink href="https://www.amazon.com.br/As-veias-abertas-Am%C3%A9rica-Latina/dp/8525420816">
              As Veias Abertas da América Latina (Open Veins of Latin America)
            </ExternalLink>, <em>Eduardo Galeano</em>
          </li>
          <li>
            <ExternalLink href="https://basecamp.com/books/getting-real">
              Getting Real
            </ExternalLink>, <em>Jason Fried & David Hanson</em>
          </li>
          <li>
            <ExternalLink href="https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882">
              Clean Code
            </ExternalLink>, <em>Robert Martin</em>
          </li>
          <li>
            <ExternalLink href="https://www.amazon.com.br/Test-Driven-Development-Kent-Beck/dp/0321146530">
              Test-Driven Development by Example
            </ExternalLink>, <em>Kent Beck</em>
          </li>
          <li>
            <ExternalLink href="https://www.amazon.com/Pedagogia-Oprimido-Em-Portugues-Brasil/dp/8577531643">
              Pedagogia do Oprimido (Pedagogy of the Oppressed)
            </ExternalLink>, <em>Paulo Freire</em>
          </li>
          <li>
            <ExternalLink href="https://basecamp.com/shapeup">
              Shape Up
            </ExternalLink>, <em>Ryan Singer</em>
          </li>
          <li>
            <ExternalLink href="https://www.amazon.com/Dont-Make-Me-Think-Usability/dp/0321344758">
              Don’t Make Me Think
            </ExternalLink>, <em>Steve Krug</em>
          </li>
          <li>
            <ExternalLink href="https://www.amazon.com/Testable-JavaScript-Ensuring-Reliable-Code/dp/1449323391">
              Testable Javascript
            </ExternalLink>, <em>Mark Ethan Trostler</em>
          </li>
          <li>
            <ExternalLink href="https://www.amazon.com/Bauhaus-Magdalena-Droste/dp/3822850020">
              Bauhaus 1919-1933
            </ExternalLink>, <em>Magdalena Droste</em>
          </li>
          <li>
            <ExternalLink href="https://www.amazon.com/Responsive-Design-Brief-People-Websites/dp/098444257X">
              Responsive Web Design
            </ExternalLink>, <em>Ethan Marcotte</em>
          </li>
        </ul>
        <h2>
          Videos
        </h2>
        <ul>
          <li>
            <ExternalLink href="https://www.youtube.com/watch?v=47aFAIDierM">
              Sangue Latino
            </ExternalLink>, <em>Eduardo Galeano</em>
          </li>
          <li>
            <ExternalLink href="https://www.ted.com/talks/ricardo_semler_how_to_run_a_company_with_almost_no_rules">
              How to run a company with (almost) no rules
            </ExternalLink>, <em>Ricardo Semler</em>
          </li>
          <li>
            <ExternalLink href="https://www.youtube.com/watch?v=cGXs58RioPA">
              Pale Blue Dot
            </ExternalLink>, <em>Carl Sagan</em>
          </li>
          <li>
            <ExternalLink href="https://www.imdb.com/title/tt3674140/">
              The Salt of the Earth
            </ExternalLink>, <em>Sebastião Salgado</em>
          </li>
          <li>
            <ExternalLink href="https://www.ted.com/talks/derek_sivers_how_to_start_a_movement">
              How to start a movement
            </ExternalLink>, <em>Derek Sivers</em>
          </li>
          <li>
            <ExternalLink href="https://www.youtube.com/watch?v=m89rYW0epTs">
              Dance monkeys, dance!
            </ExternalLink>, <em>Ernest Cline</em>
          </li>
          <li>
            <ExternalLink href="https://www.youtube.com/watch?v=DgfodqUcNhI">
               Speech at Stanford
            </ExternalLink>, <em>Steve Jobs</em>
          </li>
          <li>
            <ExternalLink href="https://www.ted.com/talks/dan_pink_the_puzzle_of_motivation">
              The puzzle of motivation
            </ExternalLink>, <em>Daniel Pink</em>
          </li>
        </ul>
        <h2>
          Posts
        </h2>
        <ul>
          <li>
            <ExternalLink href="https://sivers.org/richand">
              How I got rich on the other hand
            </ExternalLink>, <em>Derek Sivers</em>
          </li>
          <li>
            <ExternalLink href="https://sivers.org/subtract">
              Subtract
            </ExternalLink>, <em>Derek Sivers</em>
          </li>
          <li>
            <ExternalLink href="https://sivers.org/full">
              What if you didn’t need money or attention?
            </ExternalLink>, <em>Derek Sivers</em>
          </li>
          <li>
            <ExternalLink href="https://m.signalvnoise.com/reconsider/">
              Reconsider
            </ExternalLink>, <em>David Hanson</em>
          </li>
          <li>
            <ExternalLink href="https://m.signalvnoise.com/exponential-growth-devours-and-corrupts/">
              Exponential growth devours and corrupts
            </ExternalLink>, <em>David Hanson</em>
          </li>
          <li>
            <ExternalLink href="https://sahillavingia.com/reflecting">
              Reflecting on My Failure to Build a Billion-Dollar Company
            </ExternalLink>, <em>Sahil Lavingia</em>
          </li>
          <li>
            <ExternalLink href="http://blog.cleancoder.com/uncle-bob/2011/01/17/software-craftsmanship-is-about.html">
              What Software Craftsmanship is about
            </ExternalLink>, <em>Robert Martin</em>
          </li>
          <li>
            <ExternalLink href="https://derickbailey.com/2015/08/26/building-a-component-based-web-ui-with-modern-javascript-frameworks/">
              Building A Component-Based Web UI
            </ExternalLink>, <em>Derick Bailey</em>
          </li>
          <li>
            <ExternalLink href="https://sivers.org/polut">
              Digital pollution
            </ExternalLink>, <em>Derek Sivers</em>
          </li>
          <li>
            <ExternalLink href="https://pingr.io/blog/having-170-competitors-is-not-an-obstacle/">
              Having 170 competitors is not an obstacle
            </ExternalLink>, <em>Victor Ponamariov</em>
          </li>
        </ul>
      </div>
    );
  }
}
