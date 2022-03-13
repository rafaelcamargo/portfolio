import '@styles/blog-featured-list.styl';
import React from 'react';
import { CtaLink } from '@scripts/base/components/cta-link/cta-link';
import dateService from '@scripts/base/services/date/date';
import blogPostsService from '@scripts/blog/services/blog-posts/blog-posts';

const BLOG_BASE_URL = '/blog';
const ENGLISH_BLOG_BASE_URL = `${BLOG_BASE_URL}/l/en-US/`

export const BlogFeaturedList = () => {
  return (
    <div className="r-blog-featured-list-container">
      <ul className="r-blog-featured-list">
        {getLatestEnglishPosts().map(({ title, description, url, date }, index) => (
          <li key={index}>
            <h2><a href={buildPostFullUrlPath(url)} target="_blank">{title}</a></h2>
            <p>{description}</p>
            <div className="r-blog-featured-list-item-date" data-blog-post-date>
              {dateService.formatDescriptively(date)}
            </div>
          </li>
        ))}
      </ul>
      <div className="r-blog-featured-list-cta-link-container">
        <CtaLink href={ENGLISH_BLOG_BASE_URL} text="Read all articles" />
      </div>
    </div>
  )
}

function getLatestEnglishPosts(){
  // const allposts = blogPostsService.get()
  // console.log([
  //   'to-test-or-not-to-test-an-application.html',
  //   'from-idea-to-the-first-sale.html',
  //   'generating-a-multi-language-blog-based-in-markdown.html',
  //   'improving-the-developer-experience-with-smart-form.html',
  //   'why-i-built-an-english-augmented-dictionary.html',
  //   'how-to-build-a-seo-friendly-single-page-website.html'
  // ].map(url => ({ [url]: allposts.findIndex(p => p.url === url) })))
  return blogPostsService.get().filter(isEnglishPost).sort(orderPostsByDescDate).slice(0, 6);
}

function isEnglishPost({ lang }){
  return lang == 'en-US';
}

function orderPostsByDescDate(a, b){
  return a.date > b.date ? -1 : 1;
}

function buildPostFullUrlPath(url){
  return `${BLOG_BASE_URL}/${url.replace('.html', '/')}`;
}
