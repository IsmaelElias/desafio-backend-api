const moment = require('moment')

const notOverlap = (postInterval, jsonInterval) => {  
  if(jsonInterval.length > 0){
    jsonInterval.forEach((jsonInterval) => {
      console.log(postInterval, jsonInterval);
      if(postInterval.start > jsonInterval.start || postInterval.start < jsonInterval.end && postInterval.end > jsonInterval.start || postInterval.end < jsonInterval.end){
        console.log("falhou");
        return false;
      }
      console.log("passou do if");
      return true;
    }); 
  }else{
    return true; 
  }
}

const DailyRule = (allRules, postInterval) => {
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
    }
  })

  return allRules
}

const WeeklyRule = (allRules, day, postInterval) => {
    day.forEach((eachDay) => {
      if(notOverlap(postInterval, allRules.rules[eachDay].interval)){
        allRules.rules[eachDay].interval.push({
          id: Math.floor((1 + Math.random()) * 0x10000),
          date: null,
          start: postInterval.start,
          end: postInterval.end
        })
      }
    })
  
    return allRules
}

const SpecificDayRule = (allRules, day, postInterval) => {
    postInterval.forEach((eachInterval) => {
      if(notOverlap(postInterval, allRules.rules[moment(day).day()].interval)){
        allRules.rules[moment(day).day()].interval.push({
          id: Math.floor((1 + Math.random()) * 0x10000),
          date: day,
          start: eachInterval.start,
          end: eachInterval.end
        })
      }
    })
  
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
    if (typeRule === 'daily') {
      rulesToReturn = DailyRule(allRules, postInterval)
    }
  
    if (typeRule === 'weekly') {
      rulesToReturn = WeeklyRule(allRules, day, postInterval)
    }
  
    if (typeRule === 'specificDay') {
      rulesToReturn = SpecificDayRule(allRules, day, postInterval)
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