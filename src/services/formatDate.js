export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('ru-RU', options).replace(/г\./g, '');
};
