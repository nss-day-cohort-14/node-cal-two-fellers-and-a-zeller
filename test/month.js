// // // NO ARGUMENTS // // //

'use strict';

const { isFunction, strictEqual, deepEqual } = require('chai').assert;

const { getDay } = require('../lib/weekday');
const { getCurrentMonth, getCurrentYear } = require('../lib/dateinfo');
const { getMonthInfo, buildMonthHeader } = require('../lib/month');

describe('month: ', () => {

  describe('getMonthName', () => {
    // return name of month
    it.skip('should be a function', () => {
      isFunction(getMonthName);
    });

    it.skip('should get month number and return month name', () => {
      strictEqual(getMonthName(4), 'April');
    });
  });

  // describe('getMonthLength', () => {
  //   // length of month
  //   // it.skip('should be a function', () => {
  //   //   isFunction(getMonthLength);
  //   // });
  // });

  describe('getMonthInfo', () => {
    it('should take month # and retrieve object with month information', () => {
      let september = {
        name: 'September',
        length: 30
      }
      deepEqual(getMonthInfo(getCurrentMonth()), september)
    })
  })

  describe('buildMonthHeader', () => {
    it('should return a string for the header', () =>{
      strictEqual(buildMonthHeader(getCurrentMonth(), getCurrentYear()), 'September 2016' )
    })
  })
  // describe('getYear', () => {
  //   // return year 
  //   it.skip('should be a function', () => {
  //     isFunction(getYear);
  //   });

  //   it.skip('should get date and get year out of it', () => {
  //     strictEqual(getYear(Date.Now()), 2016);
  //   });
  // });

  describe('getWeekDay', () => {
    // day of the week of the 1st day
    it.skip('should be a function', () => {
      isFunction(getWeekDay);
    });

    it.skip('should return day of the week of the first day of month', () => {
      strictEqual(getWeekDay(Date.now(), 4))
    });
  });

  describe('getMonthNumbers', () => {
    // strings month numbers ( \n etc )
    it.skip('should be a function', () => {
      isFunction(getMonthNumbers);
    });
  });

  describe('formatMonth', () => {
    // look at saturday and add \n
    it.skip('should be a function', () => {
      isFunction(formatMonth);
    });
  });

  describe('monthAlignment', () => {
    // fills beginning of month with spaces before first day
    it.skip('should be a function', () => {
      isFunction(monthAlignment);
    });
  });

  describe('buildMonthString', () => {
    // returns month stdout
    // '   August 2016   \n   1 2 3 4 5... \n'
    it.skip('should be a function', () => {
      isFunction(buildMonthString);
    });
  });
});