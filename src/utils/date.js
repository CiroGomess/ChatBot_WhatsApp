require("datejs");

function dayOfTheWeek(day) {
  // Returns the day of the week
  switch (day) {
    case "monday":
      return Date.monday().toString("dd");
      break;

    case "tuesday":
      return Date.tuesday().toString("dd");
      break;

    case "wednesday":
      return Date.wednesday().toString("dd");
      break;

    case "thursday":
      return Date.thursday().toString("dd");
      break;

    case "friday":
      return Date.friday().toString("dd");
      break;

    default:
      break;
  }
}

function nextDayOfTheWeek(date, day) {
  // Returns the day of the next week
  switch (day) {
    case "monday":
      return date.monday().toString("dd");
      break;

    case "tuesday":
      return date.tuesday().toString("dd");
      break;

    case "wednesday":
      return date.wednesday().toString("dd");
      break;

    case "thursday":
      return date.thursday().toString("dd");
      break;

    case "friday":
      return date.friday().toString("dd");
      break;

    default:
      break;
  }
}

module.exports = {
  dayOfTheWeek,
  nextDayOfTheWeek
}

