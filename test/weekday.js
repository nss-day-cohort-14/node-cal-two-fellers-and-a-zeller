"use strict";

const { isFunction, strictEqual } = require('chai').assert;

const { getDay, modifiedMonth, modifiedYear, congruence } = require('../lib/weekday');

describe('Week Day: ', () => {

  describe('getDay ', () => {

    it('should be a function', () => {
      isFunction(getDay)
    });


    it('should take a date and return changed week number', () => {
      strictEqual(getDay(2016, 10, 1), 7)
    })

  })

  describe('congruence ', () => {

    it('should be a function', () => {
      isFunction(congruence)
    });

    it('should take a date and return week day number', () => {
      strictEqual(congruence(2016, 10, 1), 0)
    })

  })

  describe('modifiedMonth', () => {
    it('should get a month and return zeller month number if less than 3', () => {
      strictEqual(modifiedMonth(1), 13)
    })
  })

  describe('modifiedYear', () => {
    it('should take a month and a year and return year - 1 if month < 3', () => {
      strictEqual(modifiedYear(2015, 2), 2014)
    })
  })

})