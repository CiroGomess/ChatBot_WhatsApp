require("datejs");

function dayOfTheWeek(day) {
  // Returns the day of the week
  switch (day) {
    case "monday":
      return Number(Date.monday().toString("dd"));
      break;

    case "tuesday":
      return Number(Date.tuesday().toString("dd"));
      break;

    case "wednesday":
      return Number(Date.wednesday().toString("dd"));
      break;

    case "thursday":
      return Number(Date.thursday().toString("dd"));
      break;

    case "friday":
      return Number(Date.friday().toString("dd"));
      break;

    default:
      break;
  }
}

function nextDayOfTheWeek(date, day) {
  // Returns the day of the next week
  switch (day) {
    case "monday":
      return Number(date.monday().toString("dd"));
      break;

    case "tuesday":
      return Number(date.tuesday().toString("dd"));
      break;

    case "wednesday":
      return Number(date.wednesday().toString("dd"));
      break;

    case "thursday":
      return Number(date.thursday().toString("dd"));
      break;

    case "friday":
      return Number(date.friday().toString("dd"));
      break;

    default:
      break;
  }
}

const setDays = days => days
  .map(day => dayOfTheWeek(day));

module.exports = {
  setDays
}

