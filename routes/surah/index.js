const express = require('express');
const router = express.Router();

const {
    getAllSurahNames,
    getSurahName
} = require('./queries');
  
router
    .route('/name')
    .get(getAllSurahNames);

router
    .route('/name/:id')
    .get(getSurahName)

module.exports = router;
