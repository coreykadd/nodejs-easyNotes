//easyNotes.tests.js

var expect = require('chai').expect;
var request = require('request');
var server = require('../server.js');

var mongoose = require('mongoose');
var Note = require('../app/models/note.model.js');
var dbConfig = require('../config/database.config.js');

describe('Connection', function(){
    it('/', function(){
        request('http://localhost:8080/', function(err, res, body){
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it('/notes', function(){
        request('http://localhost:8080/notes', function(err, res, body){
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
});

/*describe('database', function(){
    before('connect', function(){
        return mongoose.connect(dbConfig.url);
    });

    beforeEach(function(done){
        return Note.remove({})
    });

    beforeEach(function(done){
        var newNote = new Note({
            title: "test note",
            content: "This is for testing"
        });

        return newNote.save();
    });

    it('Get all notes', function(){
        request('http:/localhost:8080/notes', function(err, res, body){
            expect(res.body.title).to.be.String;
            expect(res.body.content).to.be.String;
            done();
        });
    });
});
*/