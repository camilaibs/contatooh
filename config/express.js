//module responsible for return an instance configured of express - singleton configurator

var express = require('express'); //express function reference
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');


module.exports = function(){
    var app = express();

    //enviroment variables
    app.set('port', 3000);

    //middleware - grant access to end user
    app.use(express.static('./public'));
    //template engine used
    app.set('view engine', 'ejs');
    //views directory
    app.set('views', './app/views');

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());
    app.use(cookieParser());
    app.use(session(
        {
            secret: 'home avestruz',
            resave: true,
            saveUninitialized: true
        }
    ));
    app.use(passport.initialize());
    app.use(passport.session());

    //the order is more important because the last module imported will have access the previus, but the oposite not
    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app);

    return app; // return an instance of express
};
