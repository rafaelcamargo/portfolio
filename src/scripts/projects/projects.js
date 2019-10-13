import React, { Component } from 'react';
import { RAvatron } from '@scripts/base/components/avatron/avatron';
import { RCol } from '@scripts/base/components/col/col';
import { RCtaLink } from '@scripts/base/components/cta-link/cta-link';
import { RHero } from '@scripts/base/components/hero/hero';
import { RProject } from '@scripts/projects/components/project/project';
import { RProjectList } from '@scripts/projects/components/project-list/project-list';
import { RRow } from '@scripts/base/components/row/row';
import { RSection } from '@scripts/base/components/section/section';
import { RViewport } from '@scripts/base/components/viewport/viewport';

const meta = {
  title: 'Projects',
  description: 'I am always full of new ideias. Building a side project is the way I best learn something new.',
  keywords: 'teleflik, nashios, hiphunt'
};

export class Projects extends Component {
  render() {
    return (
      <RViewport
        title={ meta.title }
        description={ meta.description }
        keywords={ meta.keywords }>
        <RHero title="Projects" size="small" />
        <RSection>
          <RRow>
            <RCol size="12">
              <RProjectList>
                <RProject
                  image="logo-glorious-demo.svg"
                  title="Glorious Demo"
                  subtitle="2018"
                  badgeText="Open Source"
                  ctaUrl="https://glorious.codes/demo"
                  ctaText="Try It Online"
                  codeCtaUrl="https://github.com/glorious-codes/glorious-demo"
                  codeCtaText="See The Code">
                  The easiest way of creating animations to show your code in
                  action. Glorious Demo is open source, has been featured
                  on sites like <a href="https://news.ycombinator.com/item?id=18363668" target="_blank">
                  Hacker News</a> and <a href="https://www.reddit.com/r/javascript/comments/cavci6/the_easiest_way_of_creating_animations_to_show/" target="_blank">
                  Reddit</a>, and got the <b>Product of the Day</b> badge
                  on <a href="https://www.producthunt.com/posts/glorious-demo" target="_blank">
                  Product Hunt</a>.
                </RProject>
                <RProject
                  image="logo-nashios.svg"
                  title="Nashios"
                  subtitle="2017"
                  ctaUrl="https://nashios.com"
                  ctaText="Visit Website">
                  That was the first time I made an API using Node. It
                  integrates with Github and show the people behind some of the
                  products we all love. The webclient was built with Vue.
                  Logo and components designed by me.
                </RProject>
                <RProject
                  image="logo-woblast.svg"
                  title="Woblast"
                  subtitle="2019"
                  badgeText="Open Source"
                  ctaUrl="https://woblast-app.web.app/"
                  ctaText="Check It Out"
                  codeCtaUrl="https://github.com/rafaelcamargo/woblast-web"
                  codeCtaText="See The Code">
                  A small application that fetches currency rates and stock
                  exchange variations, and monitors them in real time. Built
                  with React, HG Brasil Finance API and ChartJS. Logo and
                  components designed by me.
                </RProject>
                <RProject
                  image="logo-teleflik.svg"
                  title="Teleflik"
                  subtitle="2016"
                  ctaUrl="https://play.google.com/store/apps/details?id=com.ionicframework.teleflik479683&hl=en_US"
                  ctaText="Visit Google Play">
                  Android app that helps you finding TV shows that match your
                  interests on the next 24h. I did this to learn how to build a
                  mobile app using Ionic and AngularJS. Logo and components
                  designed by me.
                </RProject>
                <RProject
                  image="logo-weather-now.svg"
                  title="Weather Now"
                  subtitle="2018"
                  badgeText="Open Source"
                  ctaUrl="https://weather-now-vue.web.app"
                  ctaText="Check It Out"
                  codeCtaUrl="https://github.com/rafaelcamargo/weather-now-vue"
                  codeCtaText="See The Code">
                  As a front-end developer at Conta Azul, I collaborated with
                  the hiring process of new developers designing a technincal
                  challenge for them. They should build a responsive small app
                  that fetched weather conditions from Open Weather Map API and
                  auto refreshed them after a couple minutes, using local
                  cache in the meantime. That's my implementation in Vue to the
                  challenge.
                </RProject>
                <RProject
                  image="logo-hiphunt.svg"
                  title="Hiphunt"
                  subtitle="2019"
                  ctaUrl="https://hiphunt.com"
                  ctaText="Early Access Page">
                  This is a project in progress that aims to help companies
                  finding excellent JavaScript developers. Landing page built
                  with Vue and pre rendered to get all of its content indexed.
                  Logo and components designed by me.
                </RProject>
              </RProjectList>
            </RCol>
          </RRow>
        </RSection>
      </RViewport>
    );
  }
}
