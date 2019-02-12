const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const handler = require('./handler/handler');

// Routes
const userRouter = require('./routes/user');
const indexRouter = require('./routes/index');
const app = express();

// All midwares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(handler.errorHandlerApi);
app.use(cors());

// Set all routes
app.use('/', indexRouter);
app.use('/users', userRouter);

module.exports = app;
