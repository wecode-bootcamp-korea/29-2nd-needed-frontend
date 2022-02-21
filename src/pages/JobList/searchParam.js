export const searchParam = (key, queryStr) => {
  return new URLSearchParams(queryStr).get(key);
};
