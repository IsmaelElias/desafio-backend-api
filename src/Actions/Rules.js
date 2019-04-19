const moment = require('moment')

const notOverlap = (postInterval, jsonInterval) => {  
  let returnFlag = true;
  
  if(jsonInterval.length > 0){
    jsonInterval.forEach((jsonInterval) => {
      if(postInterval.start >= jsonInterval.start && postInterval.start <= jsonInterval.end || postInterval.end >= jsonInterval.start && postInterval.end <= jsonInterval.end){
        returnFlag = false;
      }
    }); 
  }
  
  return returnFlag
}

const DailyRule = (allRules, postInterval) => {
  let error

  allRules.rules.forEach((rule) => {
    if(notOverlap(postInterval, rule.interval)){
      rule.interval.push(
        {
          id: Math.floor((1 + Math.random()) * 0x10000),
          date: null,
          start: postInterval.start,
          end: postInterval.end
        }
      )  
    }else{
      error = postInterval;
    }
  })

  if(error){
    throw new Error("Esse intervalo: { start: '"+ error.start +"', end: '"+ error.end +"'} já está preenchido. Selecione outro");
  }

  return allRules
}

const WeeklyRule = (allRules, day, postInterval) => {
  let error

  day.forEach((eachDay) => {
    if(notOverlap(postInterval, allRules.rules[eachDay].interval)){
      allRules.rules[eachDay].interval.push({
        id: Math.floor((1 + Math.random()) * 0x10000),
        date: null,
        start: postInterval.start,
        end: postInterval.end
      })
    }else{
      error = postInterval;
    }
  })

  if(error){
    throw new Error("Esse intervalo: { start: '"+ error.start +"', end: '"+ error.end +"'} já está preenchido. Selecione outro");
  }

  return allRules
}

const SpecificDayRule = (allRules, day, postInterval) => {
  let error
  postInterval.forEach((eachInterval) => {
    if(notOverlap(eachInterval, allRules.rules[moment(day).day()].interval)){
      allRules.rules[moment(day).day()].interval.push({
        id: Math.floor((1 + Math.random()) * 0x10000),
        date: day,
        start: eachInterval.start,
        end: eachInterval.end
      })
    }else{
      error = eachInterval;
    }
  })

  if(error){
    throw new Error("Esse intervalo: { start: '"+ error.start +"', end: '"+ error.end +"'} já está preenchido. Selecione outro");
  }

  return allRules
}

const DeleteRule = (allRules, ruleId) => {

  allRules.rules.forEach((rule) => {      
    rule.interval.forEach((interval, Index) => {
      if (interval.id === parseInt(ruleId)) {
        rule.interval.splice(Index, 1)
      }
    })
  })

  return allRules
}

const AddRule = (allRules, typeRule, day, postInterval) => {
  let rulesToReturn

  switch (typeRule) {
    case 'daily':
      rulesToReturn = DailyRule(allRules, postInterval)  
      break;
    case 'weekly':
      rulesToReturn = WeeklyRule(allRules, day, postInterval)
      break;
    case 'specificDay':
      rulesToReturn = SpecificDayRule(allRules, day, postInterval)
      break;
    default:
      throw new Error("Variável TypeRule com valor inválido");
  }

  return rulesToReturn
}

module.exports = {
  notOverlap,
  DailyRule,
  WeeklyRule,
  SpecificDayRule,
  DeleteRule,
  AddRule
}