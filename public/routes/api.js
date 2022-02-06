const path = require('path');
const router = require("express").Router();
const fs = require('fs');


const dbNotesActions = require('../db/db.js');



router.get('/notes', (req, res) => {
	fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
		console.log(err);
		console.log(data);
		res.send(data)
	});
});

router.post("/notes", (req, res) => {
    const note = req.body;
    dbNotesActions.postNotes(note);
    res.status(200).send("Note added!!!")
});

module.exports = router;