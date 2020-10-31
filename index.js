const express = require('express')
const handlebars = require('express-handlebars')
const dice_imgs = ["./d1.png", "./d2.png", "./d3.png", "./d4.png", "./d5.png", "./d6.png"]
const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 3000
const app = express()
app.engine('hbs', handlebars({defaultLayout: 'default.hbs'}))
app.set('view engine', 'hbs')

// mount /static directory
app.use(express.static(__dirname + '/static'))

app.get('/', (req, res) => {
    res.status(200)
    res.type('text/html')
    res.render('index')
})

app.get('/roll', (req, res) => {

    firstRoll = dice_imgs[Math.floor(Math.random() * 6 )]
    secondRoll = dice_imgs[Math.floor(Math.random() * 6 )]

    res.status(200)
    res.type('text/html')
    res.render('roll', {firstRoll, secondRoll})
})

app.listen(PORT, () => {
    console.log(`Application started on port: ${PORT} at ${new Date()}.`)
})