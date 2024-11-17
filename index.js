const mongoose = require('mongoose');
const { MONGODB_URI } = require('./utils/config');

mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to Mongo Db'))
    .catch(() =>console.error('not connected'));