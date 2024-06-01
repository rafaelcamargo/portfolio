import React, { Component } from 'react';
import { Avatron } from '@scripts/base/components/avatron/avatron';
import { Col } from '@scripts/base/components/col/col';
import { Hero } from '@scripts/base/components/hero/hero';
import { Row } from '@scripts/base/components/row/row';
import { Section } from '@scripts/base/components/section/section';
import { Viewport } from '@scripts/base/components/viewport/viewport';

const meta = {
  title: 'Experience',
  description: 'I started on 2013 my career as a programmer at one of the most popular startups in Brazil where, after almost 6 uninterrupted years, I ended up leading the front-end efforts in the Design System team.',
  keywords: 'component based, pitsby, glorious codes, conta azul, jobscore'
};

export class Experience extends Component {
  render() {
    return (
      <Viewport
        title={ meta.title }
        description={ meta.description }
        keywords={ meta.keywords }>
        <Hero title="Experience" size="small" sectionTheme="primary" />
        <Section>
          <Row offset="10">
            <Col size="6">
              <Avatron
                image="logo-rd.jpeg"
                title="RD Station"
                subtitle="Apr.2020 - Present"
                url="https://www.rdstation.com/en/"
                badgeText="Remote"
                caption="Florianópolis, Brazil" />
            </Col>
            <Col size="6">
              <h3>The Company</h3>
              <p>
                RD Station, previously <em>Resultados Digitais</em>, was
                founded in Brazil in 2011 to help medium and small companies
                understand and leverage the benefits of Digital Marketing. <em>
                RD Station Marketing</em> and <em>RD Station CRM</em> allow them
                to achieve real and long-lasting results for their businesses.
              </p>
              <h3>My Role</h3>
              <p>
                Helping to maintain and improve the <a href="https://www.rdstation.com/crm/" rel="noreferrer" target="_blank">
                RD Station CRM</a> product.
              </p>
            </Col>
          </Row>
          <Row offset="10">
            <Col size="6">
              <Avatron
                image="logo-bcredi.png"
                title="Bcredi"
                subtitle="Nov.2019 - Feb.2020"
                url="https://materiais.bcredi.com.br/baas"
                caption="Curitiba, Brazil" />
            </Col>
            <Col size="6">
              <h3>The Company</h3>
              <p>
                Bcredi is one of the most popular Fintechs in Brazil, It offers
                home equity loans with the best market rates. The amount of money
                borrowed during its short life surpasses US$ 100 Million,
                helping thousands of companies and people.
              </p>
              <h3>My Role</h3>
              <p>
                In a brief passage by Bcredi, I helped to maintain and improve
                internal products through technologies like React, Redux, Jest
                and a couple of others more.
              </p>
            </Col>
          </Row>
          <Row offset="10">
            <Col size="6">
              <Avatron
                image="logo-conta-azul.jpg"
                title="Conta Azul"
                subtitle="Mar.2017 - Sep.2019"
                url="https://contaazul.com"
                caption="Joinville, Brazil" />
            </Col>
            <Col size="6">
              <h3>The Company</h3>
              <p>
                Created in 2012, Conta Azul is a SaaS that aims to help small
                companies to run their business in Brazil. Conta Azul allows
                business owners to issue invoices, control their finances,
                manage customers, receive payments, and get great reports about
                their business. Conta Azul is used in all regions of Brazil
                and serves dozens of thousands of customers.
              </p>
              <h3>My Role</h3>
              <p>
                Among a lot of features developed in almost 5 years at Conta
                Azul, I contributed to a few projects that I am very proud
                of. In 2017, I had the opportunity to collaborate with an
                internal product as the only front-end in the team.
                I was 100% responsible for designing all the web app views
                too and, even more important, put into practice the first <b>
                fully component-based UI project</b> made in the company.
              </p>
              <p>
                A little more than one year after starting that project, I
                began to disseminate the component-based architecture
                inside the company, at guilds and front-end discussions, and
                outside the company, writing an article entitled <b>Components
                beyond reuse</b> published in Portuguese on <a href="https://tableless.com.br/componentes-alem-do-reuso/" rel="noreferrer" target="_blank">
                Tableless</a> and in English on <a href="https://hackernoon.com/components-beyond-reuse-6cef6848a748" rel="noreferrer" target="_blank">
                Hackernoon</a>.
              </p>
              <p>
                By the end of 2018, the company finally started to replace the
                Model-View-Controller approach for a Component-Based approach,
                in its main product. That was the moment in which components became
                first-class citizens in every tech discussion. A dedicated
                team was created to handle <b>our internal component library</b>, putting
                together the <b>most experienced front-end developers</b> and
                UX designers.
              </p>
              <p>
                Focusing on <b>high-quality</b> - <i>clean code and automated tests
                </i> - and <b>productivity</b>, our components <a href="https://twitter.com/rcamargo/status/1152288995524644866" rel="noreferrer" target="_blank">have
                saved hours of programming time</a> and has contributed to
                increasing the consistency of user experience along with the application.
              </p>
              <p>
                Beyond delivering some great results to the product and to the
                company, I have <b>created our own documentation tool</b>. We
                struggled to have one documentation only, containing our legacy
                and current components (AngularJS/Vue). <a href="https://pitsby.compilorama.com" rel="noreferrer" target="_blank">
                Pitsby</a> solved our problem once and for all. It’s open-source
                and has even helped to improve the experience of developing new
                components as well as increasing the component library adoption
                by product teams.
              </p>
            </Col>
          </Row>
          <Row offset="10">
            <Col size="6">
              <Avatron
                image="logo-jobscore.png"
                title="JobScore"
                subtitle="Aug.2015 - Oct.2016"
                url="https://jobscore.com"
                badgeText="Remote"
                caption="San Francisco, USA" />
            </Col>
            <Col size="6">
              <h3>The Company</h3>
              <p>
                JobScore is an applicant tracking system that gives in-house
                recruiters what they need to get the job done. Hosted careers
                page, one-click job posting, referral campaigns, resume parsing
                scoring and reports.
              </p>
              <h3>My Role</h3>
              <p>
                In a brief period at JobScore, I had the opportunity to
                collaborate on its website redesign, and its later
                improvements. Also, I introduced the AMD concept to the
                JavaScript code, making it modular, reusable and fully testable.
                JobScore was also the place where I first touched Ruby on Rails.
              </p>
            </Col>
          </Row>
          <Row offset="10">
            <Col size="6">
              <Avatron
                image="logo-conta-azul.jpg"
                title="Conta Azul"
                subtitle="Jul.2013 - Aug.2015"
                url="https://contaazul.com"
                caption="Joinville, Brazil" />
            </Col>
            <Col size="6">
              <h3>My Role</h3>
              <p>
                That was the moment I started my career as a programmer. Some
                of the activities I did include the "translation" of CSS
                stylesheets to LESS stylesheets intending to apply themes to
                the product through a set of variables besides daily
                contributions to the implementation of new features.
              </p>
              <p>
                I was responsible for creating the first company's style guide
                intending to reduce the amount of CSS code written. In 2014,
                I helped to build the very first reusable components
                (at that time, AngularJS forced us to call them <i>directives</i>)
                written with AngularJS and fully covering them with unit tests.
              </p>
              <p>
                During all that period I touched several front-end technologies,
                including RequireJS (a library that implements the AMD pattern),
                Grunt, AngularJS, Karma, and Jasmine.
              </p>
            </Col>
          </Row>
          <Row offset="10">
            <Col size="6">
            <Avatron
              title="Graphic Design"
              subtitle="Mar.2006 - Jul.2013" />
            </Col>
            <Col size="6">
              <p>
                From 2006 to 2013 I worked for few advertising agencies.
                Some of the works that I did can still be seen on my <a href="https://www.behance.net/rafaelcamargo" rel="noreferrer" target="_blank">
                Behance</a> profile. I have been doing graphic design for a few hobby
                projects too. The latest work can be seen on my <a href="https://dribbble.com/rcamargo" rel="noreferrer" target="_blank">
                Dribbble</a> profile.
              </p>
            </Col>
          </Row>
        </Section>
      </Viewport>
    );
  }
}
