import React from 'react';
import { shallow } from 'enzyme';
import dateService from '@scripts/base/services/date/date';
import blogPostsService from '@scripts/blog/services/blog-posts/blog-posts';
import blogPostsMock from '@scripts/blog/mocks/blog-posts.json';
import { CtaLink } from '@scripts/base/components/cta-link/cta-link';
import { BlogFeaturedList } from '@scripts/blog/components/blog-featured-list/blog-featured-list';

describe('Blog Featured List', () => {
  function mount(props = {}){
    return shallow(<BlogFeaturedList />);
  }

  beforeEach(() => {
    blogPostsService.get = jest.fn(() => blogPostsMock)
  })

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-blog-featured-list-container');
  });

  it('should show a list of featured blog posts', () => {
    const wrapper = mount();
    expect(wrapper.find('ul').prop('className')).toEqual('r-blog-featured-list');
  });

  it('should list the latest three english blog posts', () => {
    const wrapper = mount();
    const items = wrapper.find('li');
    const expectedBlogPosts = [
      blogPostsMock[35],
      blogPostsMock[19],
      blogPostsMock[21],
      blogPostsMock[25],
      blogPostsMock[39],
      blogPostsMock[24]
    ]
    expect(items.length).toEqual(6);
    items.forEach((item, index) => {
      const { title, description, url, date } = expectedBlogPosts[index];
      const formattedDate = dateService.formatDescriptively(date)
      expect(item.find('a').prop('href')).toEqual(`/blog/${url.replace('.html', '/')}`);
      expect(item.find('a').text()).toEqual(title);
      expect(item.find('p').text()).toEqual(description);
      expect(item.find('[data-blog-post-date]').text()).toEqual(formattedDate);
    })
  });

  it('should contain a cta link to projects', () => {
    const wrapper = mount();
    expect(wrapper.find(CtaLink).props()).toEqual({
      href: '/blog/l/en-US/',
      text: 'Read all articles'
    });
  });
});
