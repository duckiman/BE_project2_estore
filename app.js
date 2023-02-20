const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const app = express();


//Import routes
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const orderRouter = require('./routes/order');

app.use(cors({
  origin:'*',
  method:['GET','POST','PATCH','DELETE','PUT'],
  // "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept'
}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Use Route
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);
app.use('/api/orders', orderRouter);

module.exports = app;
