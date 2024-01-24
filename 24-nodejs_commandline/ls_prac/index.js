#!/usr/bin/env node

const fs = require('fs')

fs.readdir(process.cwd(), (err, filenames) => {
  if (err) {
    throw new Error(err)
  }

  for (let filename of filenames) {
    console.log(fs.lstat(filename))
    console.log(filename)
  }
})