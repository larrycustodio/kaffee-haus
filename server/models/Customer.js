const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    firstName: { type: String, required: true },
    lastName : { type: String, required: true },
    emailAddress : { type: String, required: true },
    telephone: { type: Number, required: true }

})

module.exports = mongoose.model('Customer',CustomerSchema);