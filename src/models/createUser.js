const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const createUser = new Schema({
    email: String,
    pdw: String,
    address: String,
    address_2: String,
    city: String,
    state: String,
    zip: String
})

module.exports = mongoose.model('createUser', createUser);
