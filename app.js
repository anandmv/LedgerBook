var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const publicPath = path.join(__dirname, 'public');
const bodyParser = require("body-parser");
const cors = require("cors");

const { LedgerRoutes } = require('./modules/ledger');
const { AccountsRoutes } = require('./modules/accounts');
const { UserRoutes } = require('./modules/user');
const { AuthRoutes } = require('./modules/auth');

var app = express();
var corsOptions = {
  origin: "http://localhost:3000"
};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(publicPath));

app.use('/ledger', LedgerRoutes);
app.use('/users', UserRoutes);
app.use('/auth', AuthRoutes);
app.use('/accounts', AccountsRoutes);

app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
