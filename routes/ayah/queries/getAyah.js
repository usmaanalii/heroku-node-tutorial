const { pool } = require('../../../config')

const queryString = (surahNumber, ayahNumber) => `
    SELECT
    surah, ayah, ayah_text
    FROM quran
    WHERE
    surah = ${ surahNumber }
    AND
    ayah = ${ ayahNumber };
`;

const getAyah = (request, response) => {
    const { surahNumber, ayahNumber } = request.params;

    const query = queryString(parseInt(surahNumber), parseInt(ayahNumber));

    pool.query(query, (error, results) => { 
        if (error) {
            throw error
        }

        response.status(200).json(results.rows)
    })
};

module.exports = getAyah;
