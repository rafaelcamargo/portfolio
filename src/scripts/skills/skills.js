import React, { Component } from 'react';
import { RCol } from '@scripts/base/components/col/col';
import { RHero } from '@scripts/base/components/hero/hero';
import { RRow } from '@scripts/base/components/row/row';
import { RSection } from '@scripts/base/components/section/section';
import { RViewport } from '@scripts/base/components/viewport/viewport';

const meta = {
  title: 'Skills',
  description: `After working for over seven years as a graphic designer, I
    started on 2013 my career as a programmer. Along this rich period, I got
    fluent with the latest JavaScript specifications, several front-end
    technologies and got deep in concepts that have shaped the
    way I write software.`,
  keywords: `gulp, webpack, spa, angularjs, vue, react, karma, jasmine, jest,
    postcss, sass, less, stylus, nodejs, express, mongodb, ruby, rails, postgres,
    docker`
};

export class Skills extends Component {
  render() {
    return (
      <RViewport
        title={ meta.title }
        description={ meta.description }
        keywords={ meta.keywords }>
        <RHero title="Skills" size="small" />
        <RSection>
          <RRow >
            <RCol size="6">
              <p>
                After working for over seven years as a graphic designer, I <b>
                started on 2013</b> my career as a programmer at one of the <b>most
                popular startups in Brazil</b> where, after almost 6 uninterrupted
                years, I ended up leading the <b>front-end</b> efforts in the <b>
                Design System</b> team.
              </p>
              <p>
                Along this rich period, I got fluent with
                the <b>latest JavaScript specifications</b>, several front-end
                technologies and got deep in concepts that have shaped the
                way I write software. Among these concepts are <b>Clean Code
                </b>, <b>SOLID</b>, the <b>three laws of TDD</b> and this
                awesome <a
                  href="https://blog.cleancoder.com/uncle-bob/2011/01/17/software-craftsmanship-is-about.html"
                  target="_blank">
                  blog post
                </a> on <b>Software Craftsmanship</b> written by Robert Martin.
              </p>
            </RCol>
            <RCol size="6">
              <p>
                I have great knowledge on bundlers and task runners like <b>Gulp
                </b> and <b>Webpack</b>. Long experience building <b>Single Page
                Applications</b> since the old <b>AngularJS</b> until the
                modern <b>Vue</b> and <b>React</b>. I am very familiar with
                unit test tools like <b>Karma</b>, <b>Jasmine</b> and <b>Jest</b>.
                I’m extremely familiar with a wide range of CSS preprocessors
                like <b>Sass</b>, <b>Less</b>, <b>PostCSS</b> and, mainly, <b>Stylus</b>.
              </p>
              <p>
                Topics other than front-end which I have a very well
                understanding include Continuous Integration tools like <b>
                Travis</b> and <b>CircleCI</b>. <b>Firebase</b>, <b>Netlify
                </b> and <b>AWS S3</b>, test coverage tools like <b>Coveralls
                </b> and <b>Codecov</b>, <b>HTTP</b> and <b>REST</b>. Also, I
                have a basic understanding on the following back-end
                technologies: <b>NodeJS</b>, <b>Express</b>, <b>MongoDB</b>, <b>
                Ruby</b>, <b>Rails</b>, <b>Postgres</b> and <b>Docker</b>.
              </p>
            </RCol>
          </RRow>
        </RSection>
      </RViewport>
    );
  }
}
