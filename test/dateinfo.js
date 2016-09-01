'use strict';

const { isFunction, strictEqual, deepEqual } = require('chai').assert;

const { checkLeapYear, getCurrentDay, getCurrentMonth, getCurrentYear, getDateInfo } = require('../lib/dateinfo');

const today = new Date();
const day = today.getUTCDate();
const month = today.getUTCMonth();
const year = today.getUTCFullYear();

describe('Date Info: ', () => {

  describe('checkLeapYear', () => {
    it('should be a function', () => {
      isFunction(checkLeapYear);
    });

    it('should look at year and decide true or false if leap year', () => {
      strictEqual(checkLeapYear(2016), true);
      strictEqual(checkLeapYear(2015), false);
    });
  });

  describe('getCurrentDay', () => {
    it('should be a function', () => {
      isFunction(getCurrentDay);
    });

    it('return current day', () => {
      strictEqual(getCurrentDay(), day)
    })
  });

  describe('getCurrentMonth', () => {
    it('should be a function', () => {
      isFunction(getCurrentMonth);
    });

    it('return current month', () => {
      strictEqual(getCurrentMonth(), month)
    })
  });

  describe('getCurrentYear', () => {
    it.skip('should be a function', () => {
      isFunction(getCurrentYear);
    });

    it.skip('return current year', () => {
      strictEqual(getCurrentYear(), year)
    })
  });

  describe('getDateInfo', () => {
    it('should be a function', () => {
      isFunction(getDateInfo);
    });

    it('should return current { year, month, day } for zeller', () => {
      deepEqual(getDateInfo(), { year, month, day })
    })
  });

})