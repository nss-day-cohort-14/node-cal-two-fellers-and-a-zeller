'use strict';

// zeller //

// h = day of the week
// // 0 - saturday, 1 - sunday ... 6 - friday

// q = day of the month (day date)

// m = the month (3 = March, 4 = April, 5 = May, ..., 14 = February)

// K = year of century ( EX: 1995 = 95, 2005 = 05, etc. )

// J = century number ( EX: 1995 = 19, 2005 = 20, etc. )

// h = ( q + (13 * (m + 1) / 5 ) + K + ( K / 4 ) + ( J / 4 ) - ( 2 * J ) ) // mod 7

let getDayNumber = ( q, m, year ) => {
  if ( m < 3 ) { m += 12; year -= 1 };

  let [ J, K ] = (year/100).toString().split('.'),
      h = ( q + Math.floor( 13 * (m + 1) / 5 ) + Number(K) + Math.floor( Number(K) / 4 ) + Math.floor( Number(J) / 4 ) - ( 2 * Number(J) ) );
  for ( let i = h; i > 6; i -= 7)  h -= 7 ;
  return h 
}

// // // SAME // // //

let modifiedMonth = month => month < 3 ? month + 12: month;
let modifiedYear = (year, month) => month < 3 ? year - 1 : year;
let congruence = ( year, month, day ) => {
  const q = day,
        m = modifiedMonth( month ),
        Y = modifiedYear( year, month ),
        h = 
          ( q + 
            Math.floor ((13 * (m + 1 )) / 5) +
            Y + 
            Math.floor( Y / 4) -
            Math.floor( Y / 100) + 
            Math.floor( Y / 400)
          ) % 7
  return h
}

let getDay = ( year, month, day ) => congruence(year, month, day);

module.exports = { getDay };