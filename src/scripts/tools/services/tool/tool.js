import categories from '@scripts/tools/data/categories';
import experiences from '@scripts/tools/data/experiences';
import tools from '@scripts/tools/data/tools';
import usages from '@scripts/tools/data/usages';

const _public = {};

_public.get = () => {
  const groups = {}
  tools.forEach(tool => getGroupByCategoryId(groups, tool.category_id).push(tool))
  return buildOrderBasedOnCategoryIds().map(id => ({
    categoryName: categories[id],
    tools: parseExperienceAndUsageIds(orderByExperienceUsageAndAdoption(groups[id]))
  }));
}

function getGroupByCategoryId(groups, id){
  if(!groups[id]) groups[id] = [];
  return groups[id];
}

function buildOrderBasedOnCategoryIds(){
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
}

function orderByExperienceUsageAndAdoption(tools){
  return tools.sort((a, b) => buildComparisonString(a) > buildComparisonString(b) ? -1 : 1);
}

function buildComparisonString({ experience_id, usage_id, first_adopted }){
  return `${experience_id}${usage_id}${first_adopted}`;
}

function parseExperienceAndUsageIds(tools){
  return tools.map(({ experience_id, usage_id, ...rest }) => ({
    experience: experiences[experience_id],
    usage: usages[usage_id],
    ...rest
  }));
}

export { _public as default, buildOrderBasedOnCategoryIds };
