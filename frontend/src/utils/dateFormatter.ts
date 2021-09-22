export function formatDate(date: Date) {
  console.log(date)
  return new Intl.DateTimeFormat('pt-br').format(date);
}