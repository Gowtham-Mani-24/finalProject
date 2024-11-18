const express = require('express');
const authRouter = require('./routes/authRoutes');

const app = express();

//midllewares
app.use(express.json());

app.use('/auth', authRouter);

module.exports = app;

