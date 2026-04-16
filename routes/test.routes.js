const express = require("express");
const router = express.Router();
const testDao = require("../dao/heritage.dao")

router.get('/', testDao.getAll);
router.get('/:id', testDao.getById);
router.post('/', testDao.create);

module.exports = router;