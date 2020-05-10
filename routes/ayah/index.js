const express = require('express');
const router = express.Router();

const {
    getAyah,
    getAllAyahsFromSurah
} = require('./queries');

router
    .route('/:surahNumber/:ayahNumber')
    .get(getAyah);

router
    .route('/:surahNumber')
    .get(getAllAyahsFromSurah)

module.exports = router;
