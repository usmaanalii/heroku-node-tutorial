const { pool } = require('../../../config')

const queryString = 'SELECT distinct(surah), surrahname FROM quran ORDER BY surah;';

const getAllSurahNames = (request, response) => {
    pool.query(queryString, (error, results) => { 
        if (error) {
            throw error
        }

        response.status(200).json(results.rows)
    })
}

module.exports = getAllSurahNames;
