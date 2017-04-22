/*
    BibleStudy Schema and Model
*/

// Mongoose
const mongoose = require('mongoose');

// Mongoose Schema
const Schema = mongoose.Schema;

// Bible Study Schema
const BibleStudySchema = new Schema({
    date: {
        type: Date,
        default: Date("<YYYY-mm-dd>").now
    },
    book: String,
    chapter: Number,
    notes: [
        {
            book: String,
            chapter: Number,
            verse: [Number],
            comment: String
        }
    ]
});

// BibleStudy Model
const BibleStudy = mongoose.model('bibleStudy', BibleStudySchema);

// Export this BibleStudy Model
module.exports = BibleStudy;
