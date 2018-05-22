#!/usr/bin/env node

require('dotenv').config()
const commander = require('commander')
const { prompt } = require('inquirer')
const processWeather = require('./processWeather')

const questions = {
  type: 'list',
  name: 'location',
  message: 'Select Location',
  choices: ['Sydney', 'Melbourne', 'Adelaide', 'Brisbane', 'Perth']
}

commander
  .version('1.0')
  .description('Weather Teller')
  .option('-l, --location <location>', `Location ${questions.choices.join(', ')}`)
  .parse(process.argv)

if (commander.location !== undefined) {
  if (questions.choices.indexOf(commander.location) === -1) {
    console.error(`CHOICE_ERROR: Location should be one of ${questions.choices.join(', ')}`)
    process.exit(1)
  }
  processWeather(commander.location)
} else {
  prompt(questions)
    .then(answer => {
      processWeather(answer.location)
    }).catch(e => {
      if (e instanceof Error) {
        console.error(e.message)
      } else {
        console.error(e)
      }
    })
}
