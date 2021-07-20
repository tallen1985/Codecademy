const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (req, res, next) => {
    const quote = getRandomElement(quotes);
    if (quote) {
        res.send({quote: quote})
    } else {
        res.status(404).send('Error')
    }
});

app.get('/api/quotes', (req, res, next) => {
    let queryName = req.query.person;
    let filteredQuotes = [];
    if (queryName) {
        res.send({quotes:quotes.filter(x => x.person === req.query.person)})
    } else {
       res.send({quotes});  
    }
});

app.post('/api/quotes', (req, res, next) => {
    let newQuote = req.query.quote;
    let newPerson = req.query.person;
    if (newQuote != '' && newPerson != ''){
        quotes.push(req.query);
        res.send({quote: {quote: newQuote, person: newPerson}});
    } else {
        res.status(400).send('You forgot to enter a quote!');
    }
})

app.listen(PORT, (req, res, next) => {
    console.log(`Server Active: Listening on ${PORT}`)
})

