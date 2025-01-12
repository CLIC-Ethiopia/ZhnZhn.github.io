import domSanitize from '../utils/domSanitize';

const _isArr = Array.isArray;

export const isTreeMap = (
  seriaType
) => seriaType === "TREE_MAP"
 || seriaType === "TREE_MAP_CLUSTER"
 || seriaType === "TREE_MAP_2"
 || seriaType === "TREE_MAP_2_CLUSTER"

export const isCategory = (
  seriaType
) => seriaType === "BAR_CLUSTER"
 || seriaType === "BAR_SET"
 || seriaType === "COLUMN_SET"
 || seriaType === "COLUMN_CLUSTER"
 || isTreeMap(seriaType)

export const isCategoryCluster = (
   seriaType
 ) => (seriaType || '').indexOf('CLUSTER') !== -1

const _addToHm = (
  hm,
  p
) => (hm[p.c] = p, hm);

export const arrangeSeriaByCategories = (
  series,
  categories
) => {
  const _hmPoints = (series.data || [])
    .reduce(_addToHm, {});

  series.data = categories
    .map(category => _hmPoints[category] || null)
  return series;
};

//chart?.xAxis?.[0]?.categories
export const getCategories = (
  chart
) => ((chart.xAxis || [])[0] || {}).categories;

export const isCategoryCase = (
  config,
  categories
) => _isArr((config.xAxis||{}).categories)
  && _isArr(categories);

export const crCategories = (
  data
) => data.map(item => domSanitize(item.c));

export const crCategoryPoint = (
  y,
  n
) => {
  const c = domSanitize(n);
  return { y, name: c, c };
}
