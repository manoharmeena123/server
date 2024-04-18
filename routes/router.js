
const express = require('express');
const router = express.Router();
const { createData, updateData,getCount,getData} = require('../controllers/dataController');

router.get("/get", getData)
router.get("/count", getCount)
router.post('/add', createData);
router.put('/update/:id', updateData);

module.exports = { router }
