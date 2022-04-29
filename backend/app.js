const express = require('express');
//solve cors issue
const cors = require("cors");
const app = express();
app.use(cors());
const port = 3000;
const Pool = require('pg').Pool;
  //Enter here your Postres database details
const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: " ",
    database: "testAngular"
  });
  
  //Database connection and also please create postgres database first
pool.connect((err, client, release) => {
    if (err) {
        return console.error(
            'Error acquiring client', err.stack)
    }
    client.query('SELECT NOW()', (err, result) => {
        release()
        if (err) {
            return console.error(
                'Error executing query', err.stack)
        }
        console.log("Connected to Database !")
    })
})
  
app.get('/facesnaps', (req, res, next) => {
    console.log("TEST DATA :");
    pool.query('Select * from facesnaps')
        .then(testData => {
            console.log(testData);
            res.send(testData.rows);
        })
})
// require("./routes");
app.listen(port, () => {
  console.log(` app is running on port ${port}.`);
});