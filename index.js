const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DB_URL, {useNewUrlParser:true, useUnifiedTopology: true})

const issuesRouter = require('./routes/issues')
app.use('/issues', issuesRouter)

const server = app.listen(process.env.PORT || 5000, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
});