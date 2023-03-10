const express = require('express')

const router = express.Router()

const bobController = require('../controllers/bobController')

router.get('/', bobController.index)

router.get('/:index', bobController.show)

module.exports = router