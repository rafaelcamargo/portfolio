import recommendations from '@data/recommendations';

const _public = {};

_public.get = id => {
  return id ?
    recommendations.find(item => item.id === id) :
    recommendations;
};

export default _public;
