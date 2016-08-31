"use strict";

const { isFunction, strictEqual } = require('chai').assert;

const { getDay } = require('../lib/weekday');

describe('Week Day: ', () => {

  describe('getDay ', () => {
    
    it('should be a function', () => {
      isFunction(getDay)
    });

    it('should take a date and return week day number', () => {
      strictEqual(getDay(10, 1, 2016).day, 1)
    })

    // it('should take a date and return week day name', () => {
    //   strictEqual(getDay(10, 1, 2016).dayName, 'Sunday')
    // })

  })

})