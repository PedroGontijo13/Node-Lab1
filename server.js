const express = require('express')
const app = express()

app.use(express.static('views'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('../views/index.ejs')
})

app.get('/notesForm', (req, res) => {
    res.render('../views/notesForm.ejs')
})

myArray = [
    {
        name: "Pedro",
        note: "Reminder to do"
    },
    {
        name: "Hiroki",
        note: "Nice!"
    },
    {
        name: "Rei",
        note: "Thats how we do it"
    },
]

app.post('/notesForm', (req, res) => {
    if (req.body.name === "" || req.body.name === " " || req.body.note === "" || req.body.note === " ") {
        console.log('Not possible')
    } else {
        myArray.push(req.body)
        res.json(myArray)
    }
})

app.get('/notes', (req, res) => {
    res.render('../views/notes.ejs', { myArray: myArray })
})

app.get('*', function (req, res) {
    res.status(404).send('<h1>Error!</h1>');
});

app.listen(3000)