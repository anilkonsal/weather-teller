const table = require('cli-table')
const _ = require('lodash')

module.exports = (data = []) => {
  let tbl = new table({
    head: ['Date', 'Temp (c)', 'Weather']
  })

  if (_.isEmpty(data)) {
    throw (new Error({ code: 'EMPTY_DATA', message: 'Data should not be empty' }))
  }

  tbl.push(...data)

  return tbl.toString()
}
