// This file is to run a server in localhost:3000
// Code to handle annotations is in annotationHandler.js

const express = import('express');
const bodyParser = import('body-parser');
const open = import('open');
const annotationHandler = import('./serverHandlers');
const port = process.env.PORT || 5000;
const cors = import("cors")

const app = express();

app.use(bodyParser.text());
// app.use('/client', express.static('client')); // For statically serving 'client' folder at '/'
app.use(cors)
app.use ('/', annotationHandler(app));


app.get('/', (req, res) => {
    res.send('Test');
   });
// Run server
app.listen(port, () => console.log(`Listening on port ${port}`));
