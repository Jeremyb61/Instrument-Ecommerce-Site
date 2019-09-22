const express = require('express');
const app = express();

// Middleware
const cors = require('cors');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
var session = require('express-session');
const path = require('path');
const cloudinary = require('cloudinary');

// DB Config
const sequelize = require('./modules/dbconnection');
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.use(bodyParser.json());

app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}));

// Session Config
const sessConfig = {
    secret: 'fdsfsdfsdfdsf',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000 * 60 * 24
    }
}
if (app.get('env') === 'production') {
    app.set('trust proxy', 1);
    sessConfig.cookie.secure = true;
}
app.use(session(sessConfig));
//END session config

const CLOUD_CONFIG = require('./modules/cloudinary');
cloudinary.config({
    cloud_name: CLOUD_CONFIG.CLOUD_NAME,
    api_key: CLOUD_CONFIG.API_KEY,
    api_secret: CLOUD_CONFIG.API_SECRET
});

app.use(require('./routes'));

// Port 
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});