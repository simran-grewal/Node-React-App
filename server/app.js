const express = require('express')
const cors = require('cors');
const path = require('path');
const pg = require('pg');

// let pool = new pg.Pool({
//   port: 5433,
//   password: 'Grew@7627',
//   database: 'dvdrental',
//   max: 10,
//   host: 'localhost',
//   user: 'postgress'
// });

// pool.connect((err, db, done) => {
//   if(err) {
//     return console.log("Here is one error", err)
//   } else {
//     db.query('SELECT * FROM city', (err, table) => {
//       if(err) {
//         return console.log("Here is the error", err)
//       } else {
//         return console.log(table)
//       }
//     })
//   }
// })

const app = express()
app.use(cors());
const port = 3000

app.use('/', express.static('./dist', {
  index: "index.html"
}))

app.get('/name', (req, res) => {
    res.json({name: "simran"});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))