/*!
 * TerhubungID (Terhubung Inovasi Indonesia)
 * https://terhubung.id/
 *
 * The Actual Server Files index.js
 * Includes jsonwebtoken, jwt-key, mongoose,morgan
 *
 * Copyright Terhubung Inovasi Indonesia and All Contributors
 *
 * Date modified: 08-08-2018 23:27
 */


// =======================
// get the packages we need ============
// =======================
// Import Require Packages
// Import express default package
let express     = require('express')
let app         = express();
var morgan      = require('morgan');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');

// Import thirdparty package
var jwt         = require('jsonwebtoken');
var key         = require('./config/jwt-key');


// =======================
// Setup Server Port =========
// =======================
var port = process.env.PORT || 8080;

// =======================
// Use body parser =========
// =======================
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// =======================
// Use morgan to log request =========
// =======================
app.use(morgan('dev'));

// =======================
// Define API  Routes =========
// No JWT Token Requires ======
// =======================
app.use('/api/v1/auth', require("./app/modules/user/controllers/auth"));

// =======================
// Define API  Routes =========
// Define JWT Token Request to All Routes =========
// =======================
app.get('*', function (req, res) {
    var token = req.headers['x-access-token'];
    if (!token) //No token provided sent
            return res.status(401).send({ 
                auth: false, 
                message: 'No token provided.'
            });
    
    //Failed to auth JWT token
    jwt.verify(token, key.secret, function(err, decoded) {
        if (err)
            return res.status(500).send({
                auth: false, 
                message: 'Failed to authenticate token.' 
        });
            res.status(200).send(decoded);
    });    
});


// =======================
// Launch app to listen port =========
// =======================
app.listen(port, function () {
     console.log("Server is running " + port);
});