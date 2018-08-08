/*!
 * TerhubungID (Terhubung Inovasi Indonesia)
 * https://terhubung.id/
 *
 * User authentication Models
 * Used by api/auth.js
 * Includes mongoose
 *
 * Copyright Terhubung Inovasi Indonesia and All Contributors
 *
 * Date modified: 08-08-2018 23:27
 */

// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Auth', new Schema({ 
    name: String, 
    password: String, 
    admin: Boolean 
}));