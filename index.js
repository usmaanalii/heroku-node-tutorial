const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const compression = require('compression');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const { surahRoutes, ayahRoutes } = require('./routes');

const app = express();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 10, // 5 requests,
});

app.use(cors())
app.use(compression());
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(limiter);

app.use('/api/v1/surah', surahRoutes);
app.use('/api/v1/ayah', ayahRoutes);

app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening`)
});
