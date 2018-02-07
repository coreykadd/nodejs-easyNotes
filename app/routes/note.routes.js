//note.routes.js

module.exports = function(app) {
    var notes = require('../controllers/note.controller.js');

    //Create new note
    app.post('/notes', notes.create);

    //Retrieve all notes
    app.get('/notes', notes.findAll);

    //Retrieve a single note
    app.get('/notes/:noteId', notes.findOne);

    //Update a note
    app.put('/notes/:noteId', notes.update);

    //Delete a note
    app.delete('/notes/:noteId', notes.delete);  
}