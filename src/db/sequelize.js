const { Sequelize, DataTypes } = require('sequelize')

const utilisateurModel = require('../models/utilisateur')
const pokemonModel = require('../models/_pokemon')
const commentaireModel = require('../models/commentaire')
const friendshipModel = require('../models/friendShip')
const postModel = require('../models/post')
const roleModel = require('../models/role')
const userRolesModel = require('../models/userRoles')

const pokemons = require('./mock-pokemon')
const roles = require('./mock-role')

const sequelize = new Sequelize(
    'api',
    'root',
    '',
    {
        host: 'localhost',
        dialect : 'mariadb',
        dialectOptions: {
            timezone: 'Etc/GMT-2'
        },
        logging: false
    }
)

const Utilisateurs = utilisateurModel(sequelize, DataTypes)
const Pokemon = pokemonModel(sequelize, DataTypes)
const Commentaire = commentaireModel(sequelize, DataTypes)
const Post = postModel(sequelize, DataTypes)
const Role = roleModel(sequelize, DataTypes)
const UserRoles = userRolesModel(sequelize, DataTypes)
const Friendship = friendshipModel(sequelize, DataTypes)


const initDb = () => {
    Role.sync() 
    Pokemon.sync()
    Utilisateurs.sync()
    Post.sync()
    Commentaire.sync()
    Friendship.sync()
    UserRoles.sync()

    pokemons.forEach(pokemon => {
        Pokemon.create(pokemon)
    })

    roles.forEach(role => {
        Role.create(role)
    })
}


module.exports = {
    initDb, Utilisateurs, Pokemon, Commentaire, Post, Role, UserRoles, Friendship
}