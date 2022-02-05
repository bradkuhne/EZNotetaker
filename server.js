const express = require('express');
const path = require('path');
const fs = require('fs');
const dbNotes = require('./db/db.json');


const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);