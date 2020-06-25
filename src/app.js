const express = require('express'),
app = express(),
morgan = require('morgan'),
path = require('path'),
mongoose = require('mongoose'),
session = require('express-session'),
fileUpload = require('express-fileupload')

// session cookie
app.use(session({
    secret: 'userconnect',
    resave: true,
    saveUninitialized: true
}))
// connect to mongo DB
mongoose.connect('mongodb://localhost/distrito-tecnologico', {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}, (err) => {
    if (err)
    console.error(err);
    else
    console.log("Connected to the mongodb"); 
});

// importing routes
const indexRoutes = require('./routes/index');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares 
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(fileUpload());

// static files
app.use(express.static(path.join(`${__dirname}/public`)));

// routes 
app.use('/', indexRoutes);

// start server
app.listen(app.get('port'), () => {
    console.log(`Listen on port ${app.get('port')}`);
})

// request 404
app.use((req, res, next) => {
    this.sessionUser = req.session.userRegister ? req.session.userRegister : '';
    res.render('./modules/404', {
        userSession: this.sessionUser,
        filterNav: false
    });
})