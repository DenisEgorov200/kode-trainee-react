export const formatPhone = (phoneNumber) => {
  return phoneNumber?.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, `$1 ($2) $3 $4 $5`);
};
