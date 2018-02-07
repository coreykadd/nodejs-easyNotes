//note.controller.js

var note = require('../models/note.model.js');

//Create and save new note
exports.create = function(req, res){
    if(!req.body.content)
        res.status(400).send({message: "Note cannot be empty"});
    
    var note = new note({
        title: req.body.title || "Untitled Note",
        content: req.body.content
    });

    note.save(function(err, data){
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occured while creating the note"});
        }
        else {
            res.send(data);
        }
    });
};

//Retrive and return all notes
exports.findAll = function(req, res){
    note.find(function(err, data){
        if(err)
            res.status(500).send({message: "Some error occured while retrieving notes"});
        else
            res.send(data);
    });
};

//Retrieve and return one note
exports.findOne = function(req, res){
    note.findById(req.params.noteId, function(err, data){
        if(err)
            res.status(500).send({message: "Could not retrive note with id " + req.params.noteId});
        else
            res.send(data);
    });
};

//update a note
exports.update = function(req, res){
    note.findById(req.params.noteId, function(err, data){
        if(err)
            res.status(500).send({message: "Could not find note with id " + req.params.noteId});
        
        note.title = req.body.title;
        note.content = req.body.content;

        note.save(function(err, data){
            if(err)
                res.status(500).send({message: "Could not update note with id " + req.params.noteId});
            else
                res.send(data);
        });
    });
};

//Delte a note
exports.delete = function(req, res){
    note.remove({_id: req.params.noteId}, function(err, data){
        if(err)
            res.status(500).send({message: "Could not delete note with id " + req.params.noteId});
        else
            res.send({message: "Note deleted successfully!"});
    });
};