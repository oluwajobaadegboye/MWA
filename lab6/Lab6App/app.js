var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var logger = require('morgan');
var cors = require('cors');
var helmet = require('helmet');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.use(cors());
app.use(helmet());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

var grades = [];

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/api/grades',function(req,res){
    res.status(200).json(grades);
});

app.post('/api/grades',function(req,res){
    const grade = req.body;
    grades.push(grade);
    res.status(201).json({"responseCode":"200","responseMessage":"Created"});
});

app.get('/api/grades/:gradeId',function(req,res){
    const grade = {};  
    for(var g of grades){
        if(g.id === req.params.gradeId){
          grade = g;
        }
    }
    console.log(g);
    res.status(200).json(g);
});

app.put('/api/grades/:gradeId',function(req,res){
  const grade = {};  
  for(var g of grades){
      if(g.id === Number(req.params.gradeId)){
        grades.pop(g); 
        grades.push(req.body);
      }
  }
  console.log(g);
  res.status(200).json(g);
});

app.delete('/api/grades/:gradeId',function(req,res){
  console.log('Deleting');
    for(var g of grades){
        if(g.id === Number(req.params.gradeId)){
          grades.pop(g); 
          // const index = grades.indexOf(g);
          // grades.splice(index, 1);
        }
    }
    res.status(200).json(g);
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

app.listen(3000,()=>{console.log('App started on port 3000')});

module.exports = app;
