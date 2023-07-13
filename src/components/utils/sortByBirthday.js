import { getDayOfYear } from 'components/utils/getDayOfYear.js';

export const sortByBirthday = (a, b) => {
  const dateA = new Date(a.birthday);
  const dateB = new Date(b.birthday);

  const dayOfYearA = getDayOfYear(dateA);
  const dayOfYearB = getDayOfYear(dateB);

  return dayOfYearA - dayOfYearB;
};
