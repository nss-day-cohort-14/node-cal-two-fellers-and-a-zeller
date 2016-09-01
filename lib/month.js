'use strict';

const { checkLeapYear, getCurrentYear } = require('./dateinfo');
const year = getCurrentYear();

const febLength = checkLeapYear(year) ? 29 : 28;

const monthInformation = [
  {
    name: 'January',
    length: 31
  },
  {
    name: 'February',
    length: febLength
  },
  {
    name: 'March',
    length: 31
  },
  {
    name: 'April',
    length: 30
  },
  {
    name: 'May',
    length: 31
  },
  {
    name: 'June',
    length: 30
  },
  {
    name: 'July',
    length: 31
  },
  {
    name: 'August',
    length: 31
  },
  {
    name: 'September',
    length: 30
  },
  {
    name: 'October',
    length: 31
  },
  {
    name: 'November',
    length: 30
  },
  {
    name: 'December',
    length: 31
  }
];

let getMonthInfo = ( monthNumber ) => {
  return monthInformation[monthNumber];
}

let buildMonthHeader = ( monthNumber, year ) => {
  let thisMonth = getMonthInfo(monthNumber);
  return `${thisMonth.name} ${year}`;
}

module.exports = { getMonthInfo, buildMonthHeader }