const { ReadJson, WriteJson } = require('../Actions/Json')
const { DeleteRule, AddRule } = require('../Actions/Rules')
const { GenerateSchedule } = require('../Actions/GenerateSchedule')

class RuleController {
    async index (req, res) {
        return res.json(ReadJson())
    }

    async store (req, res) {
        const { typeRule, day, interval } = req.body

        let jsonRules = ReadJson()

        jsonRules = AddRule(jsonRules, typeRule, day, interval)

        WriteJson(jsonRules)

        return res.json(ReadJson())
    }

    async delete (req, res) {
        const { ruleId } = req.params

        let jsonRules = ReadJson()

        jsonRules = DeleteRule(jsonRules, ruleId)

        WriteJson(jsonRules)

        return res.json(ReadJson())
    }

    async listSchedule (req, res) {
        const { firstDay, lastDay } = req.body

        let jsonRules = ReadJson()

        return res.json(GenerateSchedule(jsonRules, firstDay, lastDay))
    }

    async reset (req, res) {
        WriteJson(req.body)

        return res.json(ReadJson())
    }
}

module.exports = new RuleController();