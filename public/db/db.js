const fs = require('fs');

module.exports.getNotes = () => {
    return fs.readFileSync(path.join(__dirname + '/db.json'), 'utf8');
}

module.exports.postNotes = (note) => {
    console.log ("inside post notes " + JSON.stringify(note));
}