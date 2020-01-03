import axios from 'axios';

const _public = {};

_public.get = (url, query) => {
  return request({
    method: 'get',
    url,
    query
  });
};

_public.post = (url, body) => {
  return request({
    method: 'post',
    url,
    body
  });
};

function request(args){
  return axios[args.method](args.url, getParams(args));
}

function getParams({ query, body }){
  if(query)
    return { params: query };
  if(body)
    return body;
}

export default _public;
