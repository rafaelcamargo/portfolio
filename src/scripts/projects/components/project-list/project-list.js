import '@styles/project-list.styl';
import React, { Component } from 'react';
import { Project } from '@scripts/projects/components/project/project';

export class ProjectList extends Component {
  render() {
    return (
      <ul className="r-project-list">
        <Project
          image="logo-four-day-week.svg"
          title="Four-Day Week"
          subtitle="2022"
          badgeText="Open-Source"
          url="https://4dayweek.rafaelcamargo.com"
          ctaText="See the code"
          ctaUrl="https://github.com/rafaelcamargo/4dayweek">
          A collaborative list of companies that already practice or ecourage
          a four-day work week. Contribute to this project by filling out a
          Google Form or opening a pull request on Github.
        </Project>
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
          ctaText="See the code"
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
          ctaText="See the code">
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
          ctaText="See the code">
          The easiest way of creating animations to show your code in
          action. Glorious Demo is open-source, has been featured
          on sites like <a href="https://news.ycombinator.com/item?id=18363668" rel="noreferrer" target="_blank">
          Hacker News</a> and <a href="https://www.reddit.com/r/javascript/comments/cavci6/the_easiest_way_of_creating_animations_to_show/" rel="noreferrer" target="_blank">
          Reddit</a>, and got the <b>Product of the Day</b> badge
          on <a href="https://www.producthunt.com/posts/glorious-demo" rel="noreferrer" target="_blank">
          Product Hunt</a>.
        </Project>
        <Project
          image="logo-woblast.svg"
          title="Woblast"
          subtitle="2019"
          badgeText="Open-Source"
          url="https://woblast-app.web.app/"
          ctaUrl="https://github.com/rafaelcamargo/woblast-web"
          ctaText="See the code">
          A small application that fetches currency rates and stock
          exchange variations, and monitors them in real-time. Built
          with React, HG Brasil Finance API, and ChartJS. Logo and
          components designed by me.
        </Project>
        <Project
          image="logo-weather-now.svg"
          title="Weather Now"
          subtitle="2018"
          badgeText="Open-Source"
          url="https://weather-now-vue.web.app"
          ctaUrl="https://github.com/rafaelcamargo/weather-now-vue"
          ctaText="See the code">
          As a front-end developer at Conta Azul, I collaborated with
          the hiring process designing a technical challenge. The
          candidates should build a tiny and responsive app
          that fetched weather conditions from Open Weather Map API and
          auto refreshed them after a couple minutes, using local
          cache in the meantime. This is my own implementation for
          the challenge using VueJS.
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
      </ul>
    );
  }
}
