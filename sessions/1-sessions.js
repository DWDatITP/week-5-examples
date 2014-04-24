var express = require('express');
var app = express();
var MongoStore = require('connect-mongo')(express);

app.use(express.cookieParser());
app.use(express.session({
  store: new MongoStore({
    url: 'mongodb://username:password@url:port/database'
  }),
  secret: 'S33KR3T'
}));