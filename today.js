/**
 * Returns today's date in "DD.MM.YYYY" format.
 */
function todaysDate() {
  const date = new Date();
  const [month, day, year] = [
    "" + (date.getMonth() + 1), // add +1 because months are 0-indexed
    "" + date.getDate(),
    "" + date.getFullYear(),
  ];
  return `${day.padStart(2, "0")}.${month.padStart(2, "0")}.${year.padStart(4, "0")}`
}
