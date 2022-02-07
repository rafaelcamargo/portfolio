import blogPosts from '@dist/blog/posts.json';

const _public = {};

_public.get = () => blogPosts;

export default _public;
