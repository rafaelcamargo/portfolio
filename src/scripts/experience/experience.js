import React, { Component } from 'react';
import { RAvatron } from '@scripts/base/components/avatron/avatron';
import { RCol } from '@scripts/base/components/col/col';
import { RHero } from '@scripts/base/components/hero/hero';
import { RNewsletterBar } from '@scripts/base/components/newsletter-bar/newsletter-bar';
import { RRow } from '@scripts/base/components/row/row';
import { RSection } from '@scripts/base/components/section/section';
import { RViewport } from '@scripts/base/components/viewport/viewport';

const meta = {
  title: 'Experience',
  description: 'I started on 2013 my career as a programmer at one of the most popular startups in Brazil where, after almost 6 uninterrupted years, I ended up leading the front-end efforts in the Design System team.',
  keywords: 'component based, pitsby, glorious codes, conta azul, jobscore'
};

export class Experience extends Component {
  render() {
    return (
      <RViewport
        title={ meta.title }
        description={ meta.description }
        keywords={ meta.keywords }>
        <RHero title="Experience" size="small" />
        <RSection>
          <RRow>
            <RCol size="6">
              <RAvatron
                image="logo-glorious-codes.png"
                title="Glorious Codes"
                subtitle="Aug.2018 - Present"
                url="https://glorious.codes"
                caption="Anywhere" />
            </RCol>
            <RCol size="6">
              <p>
                Glorious Codes is a Github organization where I publish all the
                open source code that I have been creating on the latest years.
              </p>
              <p>
                I am very proud of having offered to the JavaScript community
                a few open source libraries. I specially highlight <a
                href="https://glorious.codes/demo" target="_blank">Glorious Demo
                </a> that, beyond to be tweeted by <a
                href="https://twitter.com/zenorocha/status/1057275408935194625"
                target="_blank">Zeno Rocha</a>, <a href="https://twitter.com/css/status/1060325303459962882" target="_blank">
                CSS Tricks</a> and <a href="https://twitter.com/0310lan/status/1085420922159300608" target="_blank">
                まさとらん</a>, got dozens of upvotes on <a href="https://news.ycombinator.com/item?id=18363668" target="_blank">
                Hacker News</a> and <a href="https://www.reddit.com/r/javascript/comments/cavci6/the_easiest_way_of_creating_animations_to_show/" target="_blank">
                Reddit</a>, and has been featured as <b>Product of the Day
                </b> on <a href="https://www.producthunt.com/posts/glorious-demo" target="_blank">
                Product Hunt</a>.
              </p>
            </RCol>
          </RRow>
          <RRow offset="10">
            <RCol size="6">
              <RAvatron
                image="logo-rd.png"
                title="Resultados Digitais"
                subtitle="Apr.2020 - Present"
                url="https://www.rdstation.com/en/"
                badgeText="Remotely"
                caption="Florianópolis, Brazil" />
            </RCol>
            <RCol size="6">
              <h3>The Company</h3>
              <p>
                Resultados Digitais was founded in Brazil in 2011 with the goal
                of helping medium and small enterprises understand and leverage
                the benefits of Digital Marketing, thereby achieving real and
                long-lasting results for their businesses.
              </p>
              <h3>My Role</h3>
              <p>
                Helping to maintain and improve the <a href="https://www.rdstation.com/crm/" target="_blank">
                RD Station CRM</a> product.
              </p>
            </RCol>
          </RRow>
          <RRow offset="10">
            <RCol size="6">
              <RAvatron
                image="logo-bcredi.png"
                title="Bcredi"
                subtitle="Nov.2019 - Feb.2020"
                url="https://materiais.bcredi.com.br/baas"
                caption="Curitiba, Brazil" />
            </RCol>
            <RCol size="6">
              <h3>The Company</h3>
              <p>
                Bcredi is one of the most popular Fintechs in Brazil offering
                home equity loans with the best market rates. The amount of money
                borrowed during its short life surpasses US$ 100 Million,
                helping thousands of companies and people.
              </p>
              <h3>My Role</h3>
              <p>
                In a brief passage by Bcredi, I helped to maintaining and improve
                internal products through technologies like React, Redux, Jest
                and a couple of others more.
              </p>
            </RCol>
          </RRow>
          <RRow offset="10">
            <RCol size="6">
              <RAvatron
                image="logo-conta-azul.jpg"
                title="Conta Azul"
                subtitle="Mar.2017 - Sep.2019"
                url="https://contaazul.com"
                caption="Joinville, Brazil" />
            </RCol>
            <RCol size="6">
              <h3>The Company</h3>
              <p>
                Created in 2012, Conta Azul is a SaaS that aims to help small
                companies to run their business in Brazil. Conta Azul allows
                business owners issue invoices, control their finances,
                manage customers, receive payments and get great reports about
                their business. Conta Azul is used in all regions of Brazil
                and serves dozens of thousands of customers.
              </p>
              <h3>My Role</h3>
              <p>
                Among a lot of features developed in almost 5 years at Conta
                Azul, I contributed with a few projects that I am very proud
                of. In 2017, I had the opportunity to contribute to a
                company’s internal product as the only front-end in the team,
                being 100% responsible for designing all the web app's views
                too and, even more important, put into practice the first <b>
                fully component-based UI project</b> made in the company.
              </p>
              <p>
                A little more than one year after starting that project, I
                began to disseminate the component-based architecture
                inside the company, at guilds and front-end discussions, and
                outside the company, writing an article entitled <b>Components
                beyond reuse</b> published in portuguese on <a href="https://tableless.com.br/componentes-alem-do-reuso/" target="_blank">
                Tableless</a> and in english on <a href="https://hackernoon.com/components-beyond-reuse-6cef6848a748" target="_blank">
                Hackernoon</a>.
              </p>
              <p>
                By the end of 2018, the company finally decided to replace the
                MVC approach in favor of a component-based approach on its
                main product. That was the moment which components became
                first-class citizens in every tech discussion. A dedicated
                team was created to handle <b>our internal component library</b> putting
                together the <b>most experienced front-end developers</b> and
                UX designers.
              </p>
              <p>
                Focusing on <b>high-quality</b> - <i>clean code and automated tests
                </i> - and <b>productivity</b>, our components <a href="https://twitter.com/rcamargo/status/1152288995524644866" target="_blank">have
                saved hours of programming time</a> and has contributed to
                increase the consistency of user experience along the application.
              </p>
              <p>
                Beyond delivering great results to the product and to the
                company, I have <b>created our own documentation tool</b>. We
                struggled to have a unified documentation containing our
                legacy - <em>AngularJS</em> - and modern - <em>VueJS</em> components. <a
                href="https://www.npmjs.com/package/@glorious/pitsby"
                target="_blank">Pitsby</a> solved our problem once and for all.
                It’s open source and has even helped to improve the experience
                of developing new components as well as increasing the
                component library adoption by product teams.
              </p>
            </RCol>
          </RRow>
        </RSection>
        <RSection>
          <RRow>
            <RCol size="6">
              <RAvatron
                image="logo-jobscore.png"
                title="JobScore"
                subtitle="Aug.2015 - Oct.2016"
                url="https://jobscore.com"
                badgeText="Remotely"
                caption="San Francisco, USA" />
            </RCol>
            <RCol size="6">
              <h3>The Company</h3>
              <p>
                JobScore is an applicant tracking system that gives in-house
                recruiters what they need to get the job done. Hosted careers
                page, one-click job posting, referral campaigns, resume parsing
                scoring and reports.
              </p>
              <h3>My Role</h3>
              <p>
                In a brief period at Jobscore I had the opportunity to
                collaborate to the website’s redesign project and its later
                improvements. Also, I introduced the AMD concept to the
                JavaScript code making it modular, reusable and, more
                important, fully testable. Jobscore was also the place where
                I first touched Ruby on Rails.
              </p>
            </RCol>
          </RRow>
          <RRow offset="10">
            <RCol size="6">
              <RAvatron
                image="logo-conta-azul.jpg"
                title="Conta Azul"
                subtitle="Jul.2013 - Aug.2015"
                url="https://contaazul.com"
                caption="Joinville, Brazil" />
            </RCol>
            <RCol size="6">
              <h3>My Role</h3>
              <p>
                That was the moment I started my career as a programmer. Some
                of the activities I did include the "translation" of CSS
                stylesheets to LESS stylesheets intending to apply themes to
                the product through a set of variables besides daily
                contributions on the implementation of new features.
              </p>
              <p>
                I was responsible for creating the first company's style guide
                intending to reduce the amount of CSS code written. In 2014
                I helped to build the first reusable components
                (at that time AngularJS forced us to call them "directives")
                written with AngularJS and fully covering them with unit tests.
              </p>
              <p>
                During all that period I touched several front end technologies
                including RequireJS (a library that implements the AMD pattern),
                Grunt, AngularJS, Karma and Jasmine.
              </p>
            </RCol>
          </RRow>
          <RRow offset="10">
            <RCol size="6">
            <RAvatron
              title="Graphic Design"
              subtitle="Mar.2006 - Jul.2013" />
            </RCol>
            <RCol size="6">
              <p>
                From 2006 to 2013 I worked for a couple of advertising agencies.
                A few of the works that I did can still be seen on my <a href="https://www.behance.net/rafaelcamargo" target="_blank">
                Behance</a> profile. I have been doing graphic design for a few hobby
                projects too. The latest works can be seen on my <a href="https://dribbble.com/rcamargo" target="_blank">
                Dribbble</a> profile.
              </p>
            </RCol>
          </RRow>
        </RSection>
      </RViewport>
    );
  }
}
