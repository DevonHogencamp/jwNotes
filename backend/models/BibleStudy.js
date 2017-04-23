/*
    BibleStudy Schema and Model
*/

// Mongoose
const mongoose = require('mongoose');

// Mongoose Schema
const Schema = mongoose.Schema;

// Bible Study Schema
const BibleStudySchema = new Schema({
    topic: String,
    date: {
        type: Date,
        default: Date("<YYYY-mm-dd>").now
    },
    text: {
        scripture: {
            book: String,
            chapter: Number,
            verse: [Number],
            text: String
        },
        text: String,
        comment: String
    },
    material: [
        {
            book: String,
            chapter: [Number]
        }
    ],
    links: [
        {
            title: String,
            link: String
        }
    ],
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
