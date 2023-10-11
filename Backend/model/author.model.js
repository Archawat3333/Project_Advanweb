const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
    name: {
        type: String,
        required: "{PATH} is required!"
    },
    bio: {
        type: String
    },
    id : {
        type:String
    }
}, {
    collection: 'Author',
    timestamps: true
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
