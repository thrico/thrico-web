function getAllMondaysUntilNow() {
  const today = new Date();
  const mondays = [];

  // Start from the beginning of next month
  const nextMonth = today.getMonth() + 1;
  const year = today.getFullYear();

  let currentDate = new Date(year, nextMonth, 1);

  // Loop through the next 2 months or until the current date
  for (let i = 0; i < 2; i++) {
    while (currentDate.getDay() !== 1) {
      // Move to the next day
      currentDate.setDate(currentDate.getDate() + 1);
    }

    // Add the Monday date to the array if it's not after the current date
    if (currentDate <= today) {
      mondays.push(new Date(currentDate));
    }

    // Move to the next week
    currentDate.setDate(currentDate.getDate() + 7);
  }

  return mondays;
}

// Get all Mondays for the next 2 months until now
const mondaysUntilNow = getAllMondaysUntilNow();
console.log(mondaysUntilNow);
