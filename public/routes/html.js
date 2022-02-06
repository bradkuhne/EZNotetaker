const path = require("path");
const router = require("express").Router();

router.get("/notes", (req, res) => {
    const {noteTitle, noteText} = req.body;
    console.log ("Line 5 of html.js " + noteTitle + " " + noteText);
    res.status(200).sendFile(path.join(__dirname, "../notes.html"));
});

router.get("*", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "../index.html"));
    console.log("FILE SENT !!!! PAGE SHOWN !!!");
});

module.exports = router;