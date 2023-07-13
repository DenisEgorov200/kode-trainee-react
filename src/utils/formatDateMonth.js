export const formatDateMonth = (date) => {
  const options = { month: 'short', day: 'numeric' };
  return date.toLocaleDateString('ru-RU', options).replace(/\./g, '');
};
