'use strict';

// checkLeapYear
const today = new Date();

let checkLeapYear = ( year ) => {
  return((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
};

let getCurrentYear = () => {
  return today.getUTCFullYear();
}

let getCurrentMonth = () => {
  return today.getUTCMonth();
}

let getCurrentDay = () => {
  return today.getUTCDate();
}

let getDateInfo = () => {
  return {
    year: getCurrentYear(),
    month: getCurrentMonth(),
    day: getCurrentDay()
  };
};


module.exports = { checkLeapYear, getCurrentDay, getCurrentMonth, getCurrentYear, getDateInfo };