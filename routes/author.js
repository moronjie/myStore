const express = require('express')
const router = express.Router()
const Author = require('../models/author')

router.get('/',async (req, res)=>{
    try {
        
        const authorName = await Author.find({name:req.query.name})
        res.render('author/index',{authorName})
    } catch (error) {
        console.log(error.message);
    }
})
router.get('/new',(req, res)=>{
    res.render('author/newAuthor', /* {Author: new Author} */)
})

router.post('/',async (req, res)=>{
    try {
        const author = await Author.create({
            name: req.body.name
        })
        res.redirect('/')
        
    } catch (error) {
        res.status(501).send('something went wrong')
    }
})

module.exports = router