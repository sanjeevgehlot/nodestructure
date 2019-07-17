var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var config = require('./config');

// var mysql = require('mysql');
// var connection = require('express-myconnection');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


 /*app.use(connection(mysql,{
   host     : 'streettag.ckqfhwooz2ug.eu-west-2.rds.amazonaws.com',
   port     : '3306',
  user     : 'streettag2019',
  password : 'str33tt4g2o19',
  database : 'mindcrew_streattag'
 },'request'));*/

// app.use(connection(mysql,{
//    host     : 'localhost',
//    port     : '8889',
//   user     : 'root',
//   password : 'root',
//   database : 'streettaglocal'
//  },'request'));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', index);
// app.use('/api/users', users);
// app.use("/ImagesFiles",express.static(__dirname +"/Images"));
// app.use("/resources",express.static(__dirname +"/resources"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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


//app.listen(3011);

module.exports = app;
