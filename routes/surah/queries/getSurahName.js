const { pool } = require('../../../config')

const queryString = surahId => `
    SELECT distinct(surah), surrahname FROM quran WHERE surah = ${ surahId };
`;

const getSurahName = (request, response) => {
    const { id: surahId } = request.params;

    const query = queryString(parseInt(surahId));

    pool.query(query, (error, results) => { 
        if (error) {
            throw error
        }

        response.status(200).json(results.rows)
    })
};

module.exports = getSurahName;
