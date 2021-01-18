/**
 * @file
 * Module du Model sujet utilisee dans mongodb
 * les variables process.env.DB_USER process.env.DB_PASS & process.env.DB_HOST 
 * Sont a definire dans un fichier .env i.e:
 *  DB_USER=User
 *  DB_PASS=PASSWORD
 *  DB_HOST=localhost
 * 
 */

const mongoose = require('mongoose');
const sujet_schema = require('../model/Sujets.js');
require('dotenv').config(); //Import des variable d'emvironement
const user = process.env.DB_USER
const password = process.env.DB_PASS
const host = process.env.DB_HOST
mongoose.connect(
        `mongodb://${user}:${passwords}@${host}:27017/OSC`,
        {useNewUrlParser: true}
    )
    .then(
        err => {console.log(err);}
);


const Sujet_Model = mongoose.model('Sujet',sujet_schema);

module.exports = Sujet_Model;