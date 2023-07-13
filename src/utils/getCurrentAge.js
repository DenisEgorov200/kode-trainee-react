export const getCurrentAge = (date) => {
  const year = Math.floor((new Date() - new Date(date).getTime()) / 3.15576e10);
  const lastDigit = year % 10;

  if (lastDigit === 1 && year !== 11) {
    return `${year} год`;
  } else if (lastDigit >= 2 && lastDigit <= 4 && (year < 10 || year > 20)) {
    return `${year} года`;
  } else {
    return `${year} лет`;
  }
};
