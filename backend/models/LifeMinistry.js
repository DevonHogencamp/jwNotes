/*
    BibleStudy Schema and Model
*/

// Mongoose
const mongoose = require('mongoose');

// Mongoose Schema
const Schema = mongoose.Schema;

// Life Ministry Schema
const LifeMinistrySchema = new Schema({
    title: String,
    date: {
        type: Date,
        default: Date("<YYYY-mm-dd>").now
    },
    link: String,
    bibleReading: {
        book: String,
        chapters: [Number],
        notes: [
            {
                book: String,
                chapter: Number,
                verse: [Number],
                comment: String
            }
        ]
    },
    gems: {
        question1: {
            question: String,
            answer: String
        },
        question2: {
            question: String,
            answer: String
        },
        jehovah: {
            book: String,
            chapter: Number,
            verse: [Number],
            comment: String
        },
        other: {
            book: String,
            chapter: Number,
            verse: [Number],
            comment: String
        }
    },
    chistianLiving: {
        title: String,
        notes: [
            {
                book: String,
                chapter: Number,
                verse: [Number],
                comment: String
            }
        ]
    },
    bookStudy: {
        title: String,
        notes: [
            {
                book: String,
                chapter: Number,
                verse: [Number],
                comment: String
            }
        ]
    }
});

// LifeMinistry Model
const LifeMinistry = mongoose.model('LifeMinistry', LifeMinistrySchema);

// Export this LifeMinistry Model
module.exports = LifeMinistry;
