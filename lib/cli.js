'use strict';

process.title = 'Node Cal';

const { type }  = require('os');

const { argv: [,, ...args] } = process;

const { getDay } = require('./weekday');
const { checkLeapYear, getCurrentMonth, getCurrentYear } = require('./dateinfo');
const { buildMonthHeader } = require('./month');

let thisMonth = buildMonthHeader( getCurrentMonth(), getCurrentYear() );
console.log( thisMonth );

const day = getDay( 2015, 1, 8 );
