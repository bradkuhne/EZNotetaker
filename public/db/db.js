const fs = require('fs');
const path = require('path');

module.exports.getNotes = () => {
    return fs.readFileSync(path.join(__dirname + '/public/db.json'), 'utf8');
};

module.exports.postNotes = (note) => {
    // Destructuring assignment for the items in req.body
    const title = note.title;
    const text = note.text;
    
    // If all the required properties are present
    if (title && text) {
        // Variable for the object we will save
        const newNote = {
            title,
            text,
        };

        // Obtain existing notes
        console.log ("THIS IS THE PATH NAME FORM dirname: " + __dirname);
        fs.readFile(path.join(__dirname +'/db.json'), 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            } else {
                // Convert string into JSON object
                const parsedNotes = JSON.parse(data);

                // Add a new note
                parsedNotes.push(newNote);

                // Write updated notes back to the file
                fs.writeFile(
                    path.join(__dirname +'/db.json'),
                    JSON.stringify(parsedNotes, null, 4),
                    (writeErr) =>
                        writeErr
                            ? console.error(writeErr)
                            : console.log('Successfully updated new note!')
                );
            }
        });

        const response = {
            status: 'success',
            body: newNote,
        };

        console.log(response);
        res.json(response);
    } else {
        res.json('Error in posting note');
    }
};