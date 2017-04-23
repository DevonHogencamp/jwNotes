/*
    BibleStudy Schema and Model
*/

// Mongoose
const mongoose = require('mongoose');

// Mongoose Schema
const Schema = mongoose.Schema;

// Bible Study Schema
const WatchtowerSchema = new Schema({
    title: String,
    date: {
        type: Date,
        default: Date("<YYYY-mm-dd>").now
    },
    link: String,
    notes: [
        {
            paragraph: Number,
            comment: String
        }
    ],
    review: [
        {
            question: String,
            answer: String
        }
    ]
});

// BibleStudy Model
const Watchtower = mongoose.model('watchtower', WatchtowerSchema);

// Export this BibleStudy Model
module.exports = Watchtower;
