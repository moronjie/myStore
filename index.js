require('dotenv').config()
const express = require('express')
const expressEjsLayouts = require('express-ejs-layouts')
const { dirname } = require('path')
const bodyparse = require('body-parser')
const app = express()
const router = require('./routes/index')
const db = require('./models/connectDb')
const author = require('./routes/author')
const { default: mongoose } = require('mongoose')

app.use(express.json())
app.use(express.static('public'))
app.use(bodyparse.urlencoded({limit: '10mb', extended: false}))
//app.use(expressEjsLayouts)
app.set('view engine', 'ejs')
app.set('views', __dirname + '/view')
//app.set("layout", "layer/layer")

app.use('/', router)
app.use('/author', author)


db(process.env.db)

mongoose.connection.once('open', ()=>{
    console.log("connected to db");
    app.listen(process.env.Port || 3000, ()=>{
        console.log('====================================');
        console.log(`app running on port 3000`);
        console.log('====================================');
    })

})