const moment = require('moment')

const GenerateSchedule = (rules, firstDay, lastDay) => {
  let arquivo = []

  for (let day = firstDay; moment(day).isSameOrBefore(lastDay); day = moment(day).add(1, 'days')) {
    let intervals = []

    rules.rules[moment(day).day()].interval.forEach((interval) => {
      if (moment(interval.date).isSame(moment(day).format('Y-mM-D'))) {
        intervals.push({ start: interval.start, end: interval.end })
      } else {
        if (interval.date === null) {
          intervals.push({ start: interval.start, end: interval.end })
        }
      }
    })

    arquivo.push({ day: moment(day).format('D-mM-Y'), intervals: intervals })
  }

  return arquivo
}

module.exports = { GenerateSchedule };
