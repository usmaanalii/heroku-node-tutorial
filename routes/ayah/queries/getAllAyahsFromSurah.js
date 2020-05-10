const { pool } = require('../../../config')

const queryString = surahNumber => `
    SELECT ayah, ayah_text FROM quran WHERE surah = ${ surahNumber };
`;

const getAllAyahsFromSurah = (request, response) => {
    const { surahNumber } = request.params;

    const query = queryString(parseInt(surahNumber));

    pool.query(query, (error, results) => { 
        if (error) {
            throw error
        }

        response.status(200).json(results.rows)
    })
};

module.exports = getAllAyahsFromSurah;
