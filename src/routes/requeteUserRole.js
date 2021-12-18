const { UserRoles } = require('../db/sequelize')
  
module.exports = (app) => {
  app.post('/api/userRole/', (req, res) => {
    UserRoles.create(req.body)
      .then(userRole => {
        const message = `Le privilège utilisateur a bien été crée.`
        res.json({ message, data: userRole })
      }).catch(error => {
          console.log(error)
      })
  })

  app.delete('/api/userRole/:id', (req, res) => {
    UserRoles.findByPk(req.params.id).then(userRole => {
      const userRoleDeleted = userRole;
      UserRoles.destroy({
        where: { id: userRole.id }
      })
      .then(_ => {
        const message = `Le privilège avec l'identifiant n°${userRoleDeleted.id} a bien été supprimé.`
        res.json({message, data: userRoleDeleted })
      })
    })
  })
}