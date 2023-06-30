const filters = ['firstName', 'lastName', 'userTag'];

export const searchByKey = (data, searchText) => {
  return data?.filter((item) =>
    filters.some((key) => item[key].toLowerCase().includes(searchText.toLowerCase())),
  );
};
