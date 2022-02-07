import blogPosts from '@dist/blog/posts.json';
import blogPostsService from './blog-posts';

describe('Blog Posts Service', () => {
  it('should get english featured blog posts', () => {
    expect(blogPostsService.get()).toEqual(blogPosts)
  })
})
