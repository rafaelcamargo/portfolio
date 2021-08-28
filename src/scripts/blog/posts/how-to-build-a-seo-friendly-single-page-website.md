title: How to build a SEO friendly Single Page Website
date: 2021-08-28
description: Gatsby, Next.js, Jekyll, and Hugo are frameworks considered 'Static Site Generators' you can use to achieve that goal. However, the purpose of this post is to present a solution that makes it simpler, decoupled from any framework.
keywords: spa, single page application, website, search engines, seo, react, vue, static site generator

---

When Angular and React got on the stage years ago, we started to realize a way of building graphic interfaces other than the traditional MVC (Model-View-Controller). That way, popular these days, is called Component-Based Architecture. The new strategy delivers some benefits [beyond components reuse](https://medium.com/hackernoon/components-beyond-reuse-6cef6848a748) and brings the foundations to [better organize CSS](https://rafaelcamargo.com/blog/bottles-and-principles-how-to-better-organize-css).

The great experience in perceived performance delivered by a "Single Page Application" - not requesting another entire page anymore when we navigated through it - became the standard. The solution was perfect for lots of the websites we visit daily. But it could cause real damage to many others. That's because the content of a Single Page Application is built using JavaScript on the user's device. The body of the document sent by the server when we request some URL is nearly always empty. So every website that depends on the indexation of its content in search engines couldn't opt for this new technology.

Even though some websites still can't adhere to this new technology, the indexation issue is resolved for many others. A good example is my [portfolio](https://rafaelcamargo.com). The site is a small set of static pages where I present my skills, projects, work experience, means of contact, etc. It's necessary that all those pages be visible to search engines. So how to make the whole website runs on a single page having its entire content indexed by search engines?

Gatsby, Next.js, Jekyll, and Hugo are frameworks considered "Static Site Generators" you can use to achieve that goal. However, the purpose of this post is to present a solution that makes it simpler, decoupled from any framework. It doesn't matter if you have chosen React, Angular, Vue, or another technology to run your Single Page Website on. The following solution fits any of them: **Prerender SPA Plugin**. Yes, a simple Webpack plugin developed by [Chris Fritz](https://github.com/chrisvfritz). See below the few lines of code you need to add to the Webpack configuration to allow search engines to index all the pages of your site the same way they index traditional ones.

Install the plugin via NPM:
```
npm i -D prerender-spa-plugin
```

Add it to the Webpack configuration:
``` javascript
const webpack = require('webpack');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
  plugins: [
    new PrerenderSPAPlugin({
      staticDir: `${__dirname}/dist`,
      // Here you list all the "pages" you
      // want to make visible to search engines
      routes: ['/', '/skills', '/projects'],
      renderer: new Renderer({ headless: true })
    })
  ]
}
```

As you can see, you don't need a bazooka to kill an ant. The plugin is as simple as any other development dependency you use to preprocess CSS or minify JavaScript. Beyond the attributes shown on the snippet above, the plugin offers several options. One I like the most is the option that minifies HTML. To learn more about the plugin, visit its repository on [Github](https://github.com/chrisvfritz/prerender-spa-plugin). And if you want to see the plugin in practice, you can check my [personal website configuration (React)](https://github.com/rafaelcamargo/portfolio) or the configuration of the website of one of my projects called [Taslonic (Vue)](https://github.com/glorious-codes/glorious-taslonic).
