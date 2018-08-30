const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

require('./app/controllers/index')(app)


app.get('/', (req, res) =>{
    res.send({
        message: 'Welcome'
    })
})

var port = process.env.PORT || 3000
app.listen(port, function () { console.log(' server started') })