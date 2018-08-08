/*!
 * TerhubungID (Terhubung Inovasi Indonesia)
 * https://terhubung.id/
 *
 * User authentication API
 * Includes jsonwebtoken, jwt-key, bcryptjs
 *
 * Copyright Terhubung Inovasi Indonesia and All Contributors
 *
 * Date modified: 08-08-2018 23:27
 */


// =======================
// Get the packages we need ============
// =======================
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../../../../config/jwt-key');

// =======================
// Initialize express router ============
// =======================
let router = require('express').Router();

// =======================
// Set API Response ============
// =======================
router.get('/', function (req, res) {    
    res.status(200).send({
       status: true,
       token: jwt.sign({
            user: 'Aga',
            },
            config.secret,{
            expiresIn: 86400 // expires in 24 hours
        }),
       message: 'Welcome to RESTHub crafted with love!',
    });
});

// =======================
// Export API routes ============
// =======================
module.exports = router;