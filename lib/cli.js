'use strict';

process.title = 'Node Cal';

const { argv: [,, ...args] } = process;

const { getDay } = require('./weekday');

const day = getDay( 2015, 1, 8 );

console.log("day: ", day);