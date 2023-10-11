const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: "{PATH} is required!"
    },
    subtitle: {
        type: String
    },
    author_id: {
        type: String
    }
}, {
    collection: 'Book',
    timestamps: true
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
