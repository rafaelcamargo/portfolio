import React, { Component } from 'react';
import { RAvatron } from '@scripts/base/components/avatron/avatron';
import { RCol } from '@scripts/base/components/col/col';
import { RHero } from '@scripts/base/components/hero/hero';
import { RRow } from '@scripts/base/components/row/row';
import { RSection } from '@scripts/base/components/section/section';
import { RViewport } from '@scripts/base/components/viewport/viewport';

export class Projects extends Component {
  render() {
    return (
      <RViewport>
        <RHero title="Projects" size="small" />
        <RSection>
          <RRow>
            <RCol size="6">
              <RAvatron
                image="logo-hiphunt.svg"
                title="Hiphunt"
                subtitle="2019"
                url="https://hiphunt.com" />
            </RCol>
            <RCol size="6">
              <p>
                This is a project in progress that aims to help companies
                finding excellent JavaScript developers. Landing page built
                with Vue and pre rendered to get all of its content indexed.
                Logo and components designed by me.
              </p>
            </RCol>
          </RRow>
          <RRow offset="10">
            <RCol size="6">
              <RAvatron
                image="logo-nashios.svg"
                title="Nashios"
                subtitle="2017"
                url="https://nashios.com" />
            </RCol>
            <RCol size="6">
              <p>
                That was the first time I made an API using Node. It
                integrates with Github and show the people behind some of the
                products we all love. The webclient was built with Vue.
                Logo and components designed by me.
              </p>
            </RCol>
          </RRow>
          <RRow offset="10">
            <RCol size="6">
              <RAvatron
                image="logo-teleflik.svg"
                title="Teleflik"
                subtitle="2016"
                url="https://play.google.com/store/apps/details?id=com.ionicframework.teleflik479683&hl=en_US" />
            </RCol>
            <RCol size="6">
              <p>
              Android app that helps you finding TV shows that match your
              interests on the next 24h. I did this to learn how to build a
              mobile app using Ionic and AngularJS. Logo and components
              designed by me.
              </p>
            </RCol>
          </RRow>
        </RSection>
      </RViewport>
    );
  }
}
