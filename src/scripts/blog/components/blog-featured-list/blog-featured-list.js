import '@styles/blog-featured-list.styl';
import React from 'react';
import { CtaLink } from '@scripts/base/components/cta-link/cta-link';
import dateService from '@scripts/base/services/date/date';
import blogPostsService from '@scripts/blog/services/blog-posts/blog-posts';

export const BlogFeaturedList = () => {
  return (
    <div className="r-blog-featured-list-container">
      <ul className="r-blog-featured-list">
        {getLatestEnglishPosts().map(({ title, date }, index) => (
          <li key={index}>
            <h2>{title}</h2>
            <div className="r-blog-featured-list-item-date" data-blog-post-date>
              {dateService.formatDescriptively(date)}
            </div>
          </li>
        ))}
      </ul>
      <div className="r-blog-featured-list-cta-link-container">
        <CtaLink href="/blog/l/en-US/" text="Read all articles" />
      </div>
    </div>
  )
}

function getLatestEnglishPosts(){
  return blogPostsService.get().filter(isEnglishPost).sort(orderPostsByDescDate).slice(0, 3);
}

function isEnglishPost({ lang }){
  return lang == 'en-US';
}

function orderPostsByDescDate(a, b){
  return a.date > b.date ? -1 : 1;
}
