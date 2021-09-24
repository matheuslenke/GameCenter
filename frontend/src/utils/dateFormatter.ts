export function formatDate(date: Date | string) {
  let validDate;
  if (date instanceof Date) {
    validDate = date
  } else {
    validDate = new Date(date)
  }
  return new Intl.DateTimeFormat('pt-br', {formatMatcher: 'best fit'}).format(validDate);
}