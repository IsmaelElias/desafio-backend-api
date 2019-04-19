const express = require('express');

const router = express.Router();

const RuleController = require('./Controller/RuleController')

router.get('/', RuleController.index) // Exibe Regras
router.post('/', RuleController.store) // Cadastra Regras
router.delete('/:ruleId', RuleController.delete) // Exclui Regra
router.post('/schedule', RuleController.listSchedule) // Exibe Horários
router.post('/reset', RuleController.reset)

module.exports = router;