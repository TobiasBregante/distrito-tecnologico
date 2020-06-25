const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const properties = new Schema({
    title: String,
    description: String,
    location: String,
    image: String,
    amount: Number,
    type: String,
    hashtag: Array,
    rooms: {
        bathroom: Number,
        laundry: Number,
        terrace: Number,
        bethroom: Number,
        garden: Number
    },
    publish_since: {
        type: Date,
        default: Date.now
    },
    status: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('properties', properties);