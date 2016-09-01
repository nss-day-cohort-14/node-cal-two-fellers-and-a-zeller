'use strict';

const { strictEqual } = require('chai').assert;
const { exec } = require('child_process');
const { type }  = require('os');

describe('cli', () => {
  it.skip('should handle no arguments', (done) => {
    // if ( windows stuff ) { do the thing with 'gcal' }
    if ( type() === 'Windows_NT' ) {
      exec('gcal', (err, stdout) => {
        if (err) done(err)
        done(exec('node bin/node-cal', (err, stdout1) => {
          if (err) done(err)
          strictEqual(stdout, stdout1)
        }))
      })
    } else {
      exec('cal', (err, stdout) => {
        if (err) done(err)
        done(exec('bin/node-cal', (err, stdout1) => {
          if (err) done(err)
          strictEqual(stdout, stdout1)
        }))
      })
    }
  })

  it.skip('should handle one arguments', (done) => {
    exec('cal 2014', (err, stdout) => {
      if (err) done(err)
      done(exec('node bin/node-cal 2014', (err, stdout1) => {
        if (err) done(err)
        strictEqual(stdout, stdout1)
      }))
    })
  })

  it.skip('should handle two arguments', (done) => {
    exec('cal 9 2014', (err, stdout) => {
      if (err) done(err)
      done(exec('node bin/node-cal 9 2014', (err, stdout1) => {
        if (err) done(err)
        strictEqual(stdout, stdout1)
      }))
    })
  })
})