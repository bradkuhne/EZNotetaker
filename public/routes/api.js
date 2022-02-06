const path = require('path');
const router = require("express").Router();
const dbNotes = require('../db/db.js');

console.log ("INSIDE THE API.JS Script !!!!");

router.get('/notes', (req, res) => {
    console.log ("Inside get notes router function of api.js");
    res.status(200).json(JSON.parse(dbNotes.getNotes()));
});

router.post("/notes", (req, res) => {
    const note = req.body;
    dbNotes.postNotes(note);
    res.status(200).send("Note added!!!")
});

module.exports = router;