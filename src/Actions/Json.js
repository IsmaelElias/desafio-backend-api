const fs = require('fs')

module.exports = {
    ReadJson () {
        let rawRules = fs.readFileSync('src/rules.json')
    
        return JSON.parse(rawRules.toString())
    },

    WriteJson (rules) {
        fs.writeFileSync('src/rules.json', JSON.stringify(rules, null, 2))
    }
}