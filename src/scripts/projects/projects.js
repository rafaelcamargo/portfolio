import React, { Component } from 'react';
import { RAvatron } from '@scripts/base/components/avatron/avatron';
import { RCol } from '@scripts/base/components/col/col';
import { RHero } from '@scripts/base/components/hero/hero';
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
            <RCol size="5">
              <RRow>
                <RCol size="12">
                  <RAvatron
                    image="logo-glorious-demo.svg"
                    title="Glorious Demo"
                    subtitle="2018"
                    url="https://glorious.codes/demo" />
                </RCol>
              </RRow>
              <RRow offset="2">
                <RCol size="12">
                  <p>
                    The easiest way of creating animations to show your code in
                    action. Glorious Demo is open source, has been featured
                    on sites like <a href="https://news.ycombinator.com/item?id=18363668" target="_blank">
                    Hacker News</a> and <a href="https://www.reddit.com/r/javascript/comments/cavci6/the_easiest_way_of_creating_animations_to_show/" target="_blank">
                    Reddit</a>, and got the <b>Product of the Day</b> badge
                    on <a href="https://www.producthunt.com/posts/glorious-demo" target="_blank">
                    Product Hunt</a>.
                  </p>
                </RCol>
              </RRow>
            </RCol>
            <RCol size="5" offset="2">
              <RRow>
                <RCol size="12">
                  <RAvatron
                    image="logo-nashios.svg"
                    title="Nashios"
                    subtitle="2017"
                    url="https://nashios.com" />
                </RCol>
              </RRow>
              <RRow offset="2">
                <RCol size="12">
                  <p>
                    That was the first time I made an API using Node. It
                    integrates with Github and show the people behind some of the
                    products we all love. The webclient was built with Vue.
                    Logo and components designed by me.
                  </p>
                </RCol>
              </RRow>
            </RCol>
          </RRow>
          <RRow offset="10">
            <RCol size="5">
              <RRow>
                <RCol size="12">
                  <RAvatron
                    image="logo-hiphunt.svg"
                    title="Hiphunt"
                    subtitle="2019"
                    url="https://hiphunt.com" />
                </RCol>
              </RRow>
              <RRow offset="2">
                <RCol size="12">
                  <p>
                    This is a project in progress that aims to help companies
                    finding excellent JavaScript developers. Landing page built
                    with Vue and pre rendered to get all of its content indexed.
                    Logo and components designed by me.
                  </p>
                </RCol>
              </RRow>
            </RCol>
            <RCol size="5" offset="2">
              <RRow>
                <RCol size="12">
                <RAvatron
                  image="logo-teleflik.svg"
                  title="Teleflik"
                  subtitle="2016"
                  url="https://play.google.com/store/apps/details?id=com.ionicframework.teleflik479683&hl=en_US" />
                </RCol>
              </RRow>
              <RRow offset="2">
                <RCol size="12">
                  <p>
                    Android app that helps you finding TV shows that match your
                    interests on the next 24h. I did this to learn how to build a
                    mobile app using Ionic and AngularJS. Logo and components
                    designed by me.
                  </p>
                </RCol>
              </RRow>
            </RCol>
          </RRow>
        </RSection>
      </RViewport>
    );
  }
}
