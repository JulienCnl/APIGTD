const express = require('express')
const morgan = require('morgan')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize')

const app = express()
const port = 3000

app
.use(favicon(__dirname + '/favicon.ico'))
.use(morgan('dev'))
.use(bodyParser.json())

sequelize.initDb()

// Ici, nous placerons nos futures points de terminaison
require('./src/routes/requeteUtilisateur')(app)
require('./src/routes/requetePost')(app)
require('./src/routes/requeteCommentaire')(app)
require('./src/routes/requeteFriendship')(app)
require('./src/routes/requeteUserRole')(app)










/*app.get('/', (req,res) => res.send('Hello, Express 2 !'))

app.get('/api/pokemons/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemon => pokemon.id === id)
    const message = 'Un pokemon a bien été trouvé'
    res.json(success(message,pokemon))
})

app.get('/api/pokemons', (req,res) => {
    const message = 'La liste de pokemons a bien été récupérer'
    res.json(success(message,pokemons))
})

app.post('/api/pokemons', (req,res) => {
    const id = parseInt(pokemons.length) + 1
    const pokemonCreated = { ...req.body, ...{id : id, created: new Date()}}
    pokemons.push(pokemonCreated)
    const message = `Le pokemon ${pokemonCreated.name} a bien été ajouté`
    res.json(success(message, pokemonCreated))
})

app.put('/api/pokemons/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const pokemonUpdated = { ...req.body, id:id}
    pokemons = pokemons.map(pokemon => {
        return pokemon.id === id ? pokemonUpdated : pokemon
    })
    const message = `Le pokemon ${pokemonUpdated.name} a bien été modifié`
    res.json(success(message, pokemonUpdated))
})

app.delete('/api/pokemons/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const pokemonDeleted = pokemons.find(pokemon => pokemon.id === id)
    pokemons.splice(id-1,1)
    const message = `Le pokemon ${pokemonDeleted.name} a bien été supprimée`
    res.json(success(message, pokemonDeleted))
})*/


app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))