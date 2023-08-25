const conn = require('./config/dbConn')
const express = require('express')
const env = require('dotenv').config()
const {errorHandler} = require('./middleware/error')
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors())
app.get('/cors', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send({ "msg": "This has CORS enabled 🎈" })
    })
app.use('/api/',require('./routes/router'))
app.use(errorHandler);

const PORT = process.env.PORT || 7001;
app.listen(PORT, () => {
    console.log("I am running..........",PORT);
});