/**
 * Created with JetBrains WebStorm.
 * User: Amol Kulkarni
 * Date: 22/08/15
 * Time: 1:52 PM
 * To change this template use File | Settings | File Templates.
 */

var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    cookieParser = require('cookie-parser'),
    cors = require('cors');

module.exports=function(){

    var app = express();

    app.use(cors());
    app.use(favicon(path.join(__dirname,'../public/favicon.ico')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(methodOverride('_method'));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname,'../public/')));

    return app;
}