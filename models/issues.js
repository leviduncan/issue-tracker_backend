const mongoose = require('mongoose')

const IssueSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    issueType: {
        type: String,
        required: true,
    },
    issueDesc: {
        type: String,
        required: true,
    },
    face: {
        type: String,
    },
    priority: {
        type: String,
    }
},
    {
        timestamps: true
    })

const Bug = mongoose.model("Bug", IssueSchema)
module.exports = Bug