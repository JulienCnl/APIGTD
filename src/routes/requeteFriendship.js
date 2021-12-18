const { Friendship } = require('../db/sequelize')
const { Op } = require("sequelize")
  
module.exports = (app) => {
  app.get('/api/friendship/:id', (req, res) => {
    Friendship.findAll(
        {
            where : {
                [Op.or]: [
                    { usr1_id: req.params.id},
                    { usr2_id: req.params.id}
                ]
            }
        }
    )
      .then(friendship => {
        const message = "Voici les différentes relations de l'utilisateur"
        res.json({ message, data: friendship })
      })
  })

  app.post('/api/friendship/', (req, res) => {
    Friendship.create(req.body)
      .then(friendship => {
        const message = `La relation a bien été crée.`
        res.json({ message, data: friendship })
      }).catch(error => {
          console.log(error)
      })
  })

}