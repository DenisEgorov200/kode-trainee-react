const filters = ['firstName', 'lastName', 'userTag'];

export const search = (data, searchText) => {
  return data?.filter((item) =>
    filters.some((key) => item[key].toLowerCase().includes(searchText)),
  );
};
