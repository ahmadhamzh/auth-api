'use strict'

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

// Esoteric Resources
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');

const v1Routes = require('./routes/api-routes');
const v2Routes = require('./routes/api-routes-vs2');

const authRoutes = require('./routes/auth-routes');
const PORT = process.env.PORT


// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('dotenv').config()

// Routes
app.use(logger);
app.use(authRoutes);

// app.use('/api/v1', v1Routes);
app.use('/api/v2', v2Routes);


// Catchalls
app.use('*', notFoundHandler);
app.use(errorHandler);






function start() {

    app.listen(PORT, () => console.log(`Listening on ${PORT}`))
    
}

module.exports = {
    start : start,
    server : app
}