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

        try {
            jsonRules = AddRule(jsonRules, typeRule, day, interval)   
            
            WriteJson(jsonRules)

            return res.json(ReadJson())
        } catch (err) {
            if(err) return res.status(500).send(err.message)
        }
    }

    async delete (req, res) {
        const { ruleId } = req.params

        let jsonRules = ReadJson()

        try {
            jsonRules = DeleteRule(jsonRules, ruleId)

            WriteJson(jsonRules)

            return res.json(ReadJson())   
        } catch (err) {
            if(err) return res.status(500).send(err.message)
        }
    }

    async listSchedule (req, res) {
        const { firstDay, lastDay } = req.body

        if(!firstDay) return res.status(500).send("Você deve fornecer uma data de início");

        if(!lastDay) return res.status(500).send("Você deve fornecer uma data de término");

        try {
            let jsonRules = ReadJson()

            return res.json(GenerateSchedule(jsonRules, firstDay, lastDay))
        } catch (err) {
            if(err) return res.status(500).send(err.message)
        }
    }

    async reset (req, res) {
        WriteJson(req.body)

        return res.json(ReadJson())
    }
}

module.exports = new RuleController();