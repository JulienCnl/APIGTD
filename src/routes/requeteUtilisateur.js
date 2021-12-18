const { Utilisateurs } = require('../db/sequelize')
  
module.exports = (app) => {
  app.get('/api/utilisateur/', (req, res) => {
    Utilisateurs.findAll()
      .then(utilisateur => {
        const message = 'Voici la liste des utilisateurs'
        res.json({ message, data: utilisateur })
      })
  })

  app.get('/api/utilisateur/:id', (req, res) => {
    Utilisateurs.findByPk(req.params.id)
      .then(utilisateur => {
        const message = "Voici les données de l'utilisateurs"
        res.json({ message, data: utilisateur })
      })
  })

  app.post('/api/utilisateur/', (req, res) => {
    Utilisateurs.create(req.body)
      .then(utilisateur => {
        const message = `L'utilisateur' ${req.body.username} a bien été crée.`
        res.json({ message, data: utilisateur })
      }).catch(error => {
          console.log(error)
      })
  })

  app.put('/api/utilisateur/:id', (req, res) => {
    const id = req.params.id
    Utilisateurs.update(req.body, {
      where: { id_utilisateur: id }
    })
    .then(_ => {
      Utilisateurs.findByPk(id).then(utilisateur => {
        const message = `L'utilisateur' a bien été modifié.`
        res.json({message, data: utilisateur })
      })
    })
  })

  app.delete('/api/utilisateur/:id', (req, res) => {
    Utilisateurs.findByPk(req.params.id).then(utilisateur => {
      const utilisateurDeleted = utilisateur;
      Utilisateurs.destroy({
        where: { id_utilisateur: utilisateur.id_utilisateur }
      })
      .then(_ => {
        const message = `L'utilisateur avec l'identifiant n°${utilisateurDeleted.id_utilisateur} a bien été supprimé.`
        res.json({message, data: utilisateurDeleted })
      })
    })
  })

}