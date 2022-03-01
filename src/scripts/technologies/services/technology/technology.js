import categories from '@scripts/technologies/data/categories';
import experiences from '@scripts/technologies/data/experiences';
import technologies from '@scripts/technologies/data/technologies';
import usages from '@scripts/technologies/data/usages';

const _public = {};

_public.get = () => groupTechnologiesByCategory(technologies);

function groupTechnologiesByCategory(technologies){
  const groups = {}
  technologies.forEach(tech => getGroupByCategoryId(groups, tech.category_id).push(tech))
  return buildOrderBasedOnCategoryIds().map(id => ({
    categoryName: categories[id],
    technologies: parseExperienceAndUsageIds(orderByExperienceUsageAndAdoption(groups[id]))
  }));
}

function getGroupByCategoryId(groups, id){
  if(!groups[id]) groups[id] = [];
  return groups[id];
}

function buildOrderBasedOnCategoryIds(){
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
}

function orderByExperienceUsageAndAdoption(technologies){
  return technologies.sort((a, b) => buildComparisonString(a) > buildComparisonString(b) ? -1 : 1);
}

function buildComparisonString({ experience_id, usage_id, first_adopted }){
  return `${experience_id}${usage_id}${first_adopted}`;
}

function parseExperienceAndUsageIds(technologies){
  return technologies.map(({ experience_id, usage_id, ...rest }) => ({
    experience: experiences[experience_id],
    usage: usages[usage_id],
    ...rest
  }));
}

export { _public as default, buildOrderBasedOnCategoryIds };
