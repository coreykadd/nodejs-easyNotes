//note.model.js

var mongoose = require('mongoose');

var noteSchema = mongoose.Schema({
    title: String,
    content: String
},{
    timestamps: true
});

module.exports = mongoose.model('Note', noteSchema);