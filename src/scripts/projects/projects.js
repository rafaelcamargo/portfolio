import React, { Component } from 'react';
import { Avatron } from '@scripts/base/components/avatron/avatron';
import { Col } from '@scripts/base/components/col/col';
import { CtaLink } from '@scripts/base/components/cta-link/cta-link';
import { Hero } from '@scripts/base/components/hero/hero';
import { Project } from '@scripts/projects/components/project/project';
import { ProjectList } from '@scripts/projects/components/project-list/project-list';
import { Row } from '@scripts/base/components/row/row';
import { Section } from '@scripts/base/components/section/section';
import { Viewport } from '@scripts/base/components/viewport/viewport';

const meta = {
  title: 'Projects',
  description: 'I am always full of new ideias. Building a side project is the way I best learn something new.',
  keywords: 'teleflik, nashios, hiphunt'
};

export class Projects extends Component {
  render() {
    return (
      <Viewport
        title={ meta.title }
        description={ meta.description }
        keywords={ meta.keywords }>
        <Hero title="Projects" size="small" />
        <Section>
          <Row>
            <Col size="12">
              <ProjectList>
                <Project
                  image="logo-typenik.svg"
                  title="Typenik"
                  subtitle="2021"
                  url="https://typenik.com">
                  Typenik is an English Augmented Dictionary for non-native
                  speakers. It helps you to make sure the words you put on
                  your copy carry the intention you had in your mind.
                </Project>
                <Project
                  image="logo-taslonic.svg"
                  title="Taslonic"
                  subtitle="2020"
                  badgeText="Open-Source"
                  url="https://taslonic.com"
                  ctaText="See The Code"
                  ctaUrl="https://github.com/glorious-codes/glorious-taslonic">
                  Set yourself free from the ordinary work to focus on the
                  extraordinary one. Taslonic makes form creation and data
                  fetching really simple.
                </Project>
                <Project
                  image="logo-pitsby.svg"
                  title="Pitsby"
                  subtitle="2019"
                  badgeText="Open-Source"
                  url="https://pitsby.com"
                  ctaUrl="https://github.com/glorious-codes/glorious-pitsby"
                  ctaText="See The Code">
                  Pitsby is a super simple tool to document UI components in a
                  declarative way. Its main features are Lightning Setup, Wide
                  Support, Playground, Analytics Integration, and Customization.
                </Project>
                <Project
                  image="logo-glorious-demo.svg"
                  title="Glorious Demo"
                  subtitle="2018"
                  badgeText="Open-Source"
                  url="https://glorious.codes/demo"
                  ctaUrl="https://github.com/glorious-codes/glorious-demo"
                  ctaText="See The Code">
                  The easiest way of creating animations to show your code in
                  action. Glorious Demo is open-source, has been featured
                  on sites like <a href="https://news.ycombinator.com/item?id=18363668" rel="noreferrer" target="_blank">
                  Hacker News</a> and <a href="https://www.reddit.com/r/javascript/comments/cavci6/the_easiest_way_of_creating_animations_to_show/" rel="noreferrer" target="_blank">
                  Reddit</a>, and got the <b>Product of the Day</b> badge
                  on <a href="https://www.producthunt.com/posts/glorious-demo" rel="noreferrer" target="_blank">
                  Product Hunt</a>.
                </Project>
                <Project
                  image="logo-weather-now.svg"
                  title="Weather Now"
                  subtitle="2018"
                  badgeText="Open-Source"
                  url="https://weather-now-vue.web.app"
                  ctaUrl="https://github.com/rafaelcamargo/weather-now-vue"
                  ctaText="See The Code">
                  As a front-end developer at Conta Azul, I collaborated with
                  the hiring process designing a technical challenge. The
                  candidates should build a tiny and responsive app
                  that fetched weather conditions from Open Weather Map API and
                  auto refreshed them after a couple minutes, using local
                  cache in the meantime. This is my own implementation for
                  the challenge using VueJS.
                </Project>
                <Project
                  image="logo-woblast.svg"
                  title="Woblast"
                  subtitle="2019"
                  badgeText="Open-Source"
                  url="https://woblast-app.web.app/"
                  ctaUrl="https://github.com/rafaelcamargo/woblast-web"
                  ctaText="See The Code">
                  A small application that fetches currency rates and stock
                  exchange variations, and monitors them in real-time. Built
                  with React, HG Brasil Finance API, and ChartJS. Logo and
                  components designed by me.
                </Project>
                <Project
                  image="logo-nashios.svg"
                  title="Nashios"
                  subtitle="2017"
                  url="https://nashios-web.web.app">
                  That was the first time I made an API using Node. It
                  integrates with Github and shows the people behind some of the
                  products we all love. The web-client was built with Vue.
                  Logo and components designed by me.
                </Project>
                <Project
                  image="logo-teleflik.svg"
                  title="Teleflik"
                  subtitle="2016"
                  url="https://play.google.com/store/apps/details?id=com.ionicframework.teleflik479683&hl=en_US">
                  Android app that helps you finding TV shows that match your
                  interests in the next 24h. I did this to learn how to build a
                  mobile app using Ionic and AngularJS. Logo and components
                  designed by me.
                </Project>
                <Project
                  image="logo-dollert.svg"
                  title="Dollert"
                  subtitle="2016"
                  badgeText="Open-Source"
                  url="https://chrome.google.com/webstore/detail/dollert/lkbhlmhaiggihoihajncjlnmbpigbkam"
                  ctaText="See The Code"
                  ctaUrl="https://github.com/rafaelcamargo/dollert-extension">
                  If USD rate impacts your daily life making you visit
                  financial websites all day long, Dollert saves your energy.
                  Enter the USD rates you are awaiting for and Dollert will
                  notify you when one of those rates gets reached.
                </Project>
              </ProjectList>
            </Col>
          </Row>
        </Section>
      </Viewport>
    );
  }
}
