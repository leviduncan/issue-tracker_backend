const express = require('express')
const router = express.Router()
const Issue = require('../models/issues')

router.get('/', async(req,res) => {
    try {
        const issues = await Issue.find()
        res.json(issues)
    }catch(err){
        res.send('Error: =>' + err)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const issues = await Issue.findById(req.params.id)
        res.json(issues)
    }catch(err){
        res.send('Error: ' + err)
    }
})

router.post("/", async(req, res) => {
    const issues = new Issue({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        issueType: req.body.issueType,
        issueDesc: req.body.issueDesc,
        face: req.body.face,
        priority: req.body.priority
    })

    try {
        const a1 = await issues.save()
        res.send(a1)
    } catch(err) {
        console.log('Error: ' + err);
    }
})

router.put("/:id", async (req, res) => {
    try{
        const updateItem = await Issue.findByIdAndUpdate(req.params.id, {$set: req.body})
        res.status(200).json('Item Updated')
    }catch(err){
        console.log("Error: " + err)
    }
})

router.delete('/:id', async(req, res) => {
    try{
        const issues = await Issue.findById(req.params.id)
        const a1 = await issues.remove()
        res.json(a1)
    }catch(err){
        res.send('Error: ' + err)
    }
})

module.exports = router