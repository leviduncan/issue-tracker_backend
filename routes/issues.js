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

router.patch("/:id", async (req, res) => {

    //Grab data from frontend request - input values
    const newIssueDesc = req.body.newIssueDesc
    const newIssueType = req.body.newIssueType
    const newPriority = req.body.newPriority
    // const id = req.body.id

    try {
        const issues =  await Issue.findById(req.params.id)
            issues.issueDesc = newIssueDesc
            issues.issueType = newIssueType
            issues.priority = newPriority
            const a1 = await issues.save()
            res.json(a1)
        
    } catch (err) {
        res.send('Error: ' + err)
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