#!/usr/bin/env node
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const path = require('path')
const { lstat } = fs.promises

const targetDir = process.argv[2] || process.cwd()

fs.readdir(targetDir, async(err, filenames) => {

  if (err) {
    console.log(err)
    throw new Error(err)
  }

  // METHOD 4
  // for (let filename of filenames) {
  //   try {
  //     const stats = await lstat(filename);
  //     console.log(filename, stats.isFile())
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // METHOD 5
  const statPromises = filenames.map((filename) => {
    return lstat(path.join(targetDir, filename))
  })

  const allStats = await Promise.all(statPromises)

  for (let stats of allStats) {
    const index = allStats.indexOf(stats)

    if (stats.isFile()) {
      console.log(filenames[index])
    } else {
      console.log(chalk.bold(filenames[index]))
    }
  }
  // METHOD 1
  // for (let filename of filenames) {
  //   fs.lstat(filename, (err, stats) => {
  //     if (err) {
  //       throw new Error(err)
  //     }
  //     console.log(filename, stats.isFile())
  //   })
  // }

  // METHOD 2
  // const allStats = Array(filenames.length).fill(null)

  // for (let filename of filenames) {
  //   const index = filenames.indexOf(filename)

  //   fs.lstat(filename, (err, stat) => {
  //     if (err) {
  //       console.log(err)
  //     }
  //     allStats[index] = stat

  //     const ready = allStats.every((stats) => {
  //       return stats
  //     })

  //     if (ready) {
  //       allStats.forEach((stats, index) => {
  //         console.log(filenames[index], stats.isFile())
  //       })
  //     }
  //   })
  // }

  // METHOD 3
  // Option 1 of wrapping lstat in a Promise
  // const lstat = (filename) => {
  //   return new Promise((resolve, reject) => {
  //     fs.lstat(filename, (err, stats) => {
  //       if (err) {
  //         reject(err)
  //       }
  //       resolve(stats)
  //     })
  //   })
  // }

  // Option 2: using utils:
  // const lstat = util.promisify(fs.lstat)

  // Option3:
  // const lstat = fs.promises.lstat
  // or
  // const { lstat } = fs.promises

})