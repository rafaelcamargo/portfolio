import React, { Component } from 'react';
import { Col } from '@scripts/base/components/col/col';
import { Hero } from '@scripts/base/components/hero/hero';
import { Row } from '@scripts/base/components/row/row';
import { Section } from '@scripts/base/components/section/section';
import { Viewport } from '@scripts/base/components/viewport/viewport';

const meta = {
  title: 'Skills',
  description: 'After working for over seven years as a graphic designer, I started on 2013 my career as a programmer. Along this rich period, I got fluent with the latest JavaScript specifications, several front-end technologies and got deep in concepts that have shaped the way I write software.',
  keywords: 'gulp, webpack, spa, angularjs, vue, react, karma, jasmine, jest, postcss, sass, less, stylus, nodejs, express, mongodb, ruby, rails, postgres, docker'
};

export class Skills extends Component {
  render() {
    return (
      <Viewport
        title={ meta.title }
        description={ meta.description }
        keywords={ meta.keywords }>
        <Hero title="Skills" size="small" />
        <Section>
          <Row >
            <Col size="6">
              <p>
                After working for over seven years as a graphic designer, I <b>
                started in 2013</b> my career as a programmer at one of the <b>most
                popular startups in Brazil</b>, where I ended up leading
                the <b>front-end</b> efforts in the <b> Design System</b> team.
              </p>
              <p>
                During that exciting period, I got fluent in
                the <b>latest JavaScript specifications</b>, several front-end
                technologies, and went deep in concepts that have shaped the
                way I write software. Among these concepts are <b>Clean Code
                </b>, <b>SOLID</b>, the <b>three laws of TDD</b>, and this <a
                  href="https://blog.cleancoder.com/uncle-bob/2011/01/17/software-craftsmanship-is-about.html"
                  target="_blank">
                  blog post
                </a> on <b>Software Craftsmanship</b> written by Robert Martin.
              </p>
            </Col>
            <Col size="6">
              <p>
                I am very experienced with bundlers and task runners like <b>Gulp
                </b> and <b>Webpack</b>. Long experience building <b>Single Page
                Applications</b> since the old <b>AngularJS</b> until the
                modern <b>Vue</b> and <b>React</b>. I am very familiar with
                unit test tools like <b>Karma</b>, <b>Jasmine</b>, and <b>Jest</b>.
                I’m very familiar with a wide range of CSS preprocessors
                like <b>Sass</b>, <b>Less</b>, <b>PostCSS</b> and, mainly, <b>Stylus</b>.
              </p>
              <p>
                Topics other than front-end on which I have a good
                understanding include Continuous Integration tools like <b>
                Travis</b> and <b>CircleCI</b>. <b>Firebase</b>, <b>Netlify
                </b> and <b>AWS S3</b>, test coverage tools like <b>Coveralls
                </b> and <b>Codecov</b>, <b>HTTP</b> and <b>REST</b>. Also, I
                have a basic understanding of the following back-end
                technologies: <b>NodeJS</b>, <b>Express</b>, <b>MongoDB</b>, <b>
                Ruby</b>, <b>Rails</b>, <b>Postgres</b> and <b>Docker</b>.
              </p>
            </Col>
          </Row>
        </Section>
      </Viewport>
    );
  }
}
