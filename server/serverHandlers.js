const fs = require('fs');
const SQLite3 = require('sqlite3').verbose();
const TABLE = 'annotations';
const cors = require ('cors');

module.exports = (app) => {
  // Create a database if it doesn't exist
  if (!fs.existsSync('server/blobs.db')) {
    fs.writeFileSync('server/blobs.db', '');
  }

  // Create annotations table with columns documentId, annotationID and xfdfString
  const db = new SQLite3.Database('server/blobs.db');
  db.run(`CREATE TABLE IF NOT EXISTS ${TABLE} ( pdf BLOB)`);
  db.close();

  // Handle POST request sent to '/server/annotationHandler.js'
  var corsOptions = {
    origin: 'http://localhost:5000',
    optionsSuccessStatus: 200}

  app.post('/', cors(corsOptions), function (req, res) {
    // const documentId = req.query.documentId;
    const pdf = req.body;
    let query;
        query = `INSERT OR REPLACE INTO ${TABLE} VALUES ('${pdf}'`;
      

      db.run(query, err => {
        if (err) {
          res.status(500);
        } else {
          res.status(200);
        }
        res.end();
      });
      db.close();
    });
    
  };

//   // Handle GET request sent to '/server/annotationHandler.js'
//   app.get('/server/annotationHandler.js', (req, res) => {
//     const documentId = req.query.documentId;

//     const db = new SQLite3.Database('server/xfdf.db');
//     // Read from the database and send the rows as a response
//     db.all(`SELECT annotationId, xfdfString FROM ${TABLE} WHERE documentId = '${documentId}'`, (err, rows) => {
//       if (err) {
//         res.status(204);
//       } else {
//         res.header('Content-Type', 'application/json');
//         res.status(200).send(rows);
//       }
//       res.end();
//     });
//     db.close();
//   });
