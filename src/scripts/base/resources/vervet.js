import ENV from '@environment';
import baseResource from './base';

const _public = {};

_public.post = (projectId, uri, body) => {
  return baseResource.post(`${buildBaseUrl(projectId)}/${uri}`, body);
};

function buildBaseUrl(projectId){
  return `${ENV.VERVET.BASE_URL}/projects/${projectId}`;
}

export default _public;
