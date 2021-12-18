const { Commentaire } = require('../db/sequelize')
  
module.exports = (app) => {
  app.get('/api/commentaire/', (req, res) => {
    Commentaire.findAll()
      .then(commentaire => {
        const message = 'Voici la liste des commentaires'
        res.json({ message, data: commentaire })
      })
  })

  app.get('/api/commentaire/:id', (req, res) => {
    Commentaire.findByPk(req.params.id)
      .then(commentaire => {
        const message = "Voici les données du commentaire"
        res.json({ message, data: commentaire })
      })
  })

  app.post('/api/commentaire/', (req, res) => {
    Commentaire.create(req.body)
      .then(commentaire => {
        const message = `Le commentaire a bien été crée.`
        res.json({ message, data: commentaire })
      }).catch(error => {
          console.log(error)
      })
  })

  app.put('/api/commentaire/:id', (req, res) => {
    const id = req.params.id
    Commentaire.update(req.body, {
      where: { id_commentaire: id }
    })
    .then(_ => {
      Commentaire.findByPk(id).then(commentaire => {
        const message = `Le commentaire a bien été modifié.`
        res.json({message, data: commentaire })
      })
    })
  })

  app.delete('/api/commentaire/:id', (req, res) => {
    Commentaire.findByPk(req.params.id).then(commentaire => {
      const commentaireDeleted = commentaire;
      Commentaire.destroy({
        where: { id_commentaire: commentaire.id_commentaire }
      })
      .then(_ => {
        const message = `Le commentaire avec l'identifiant n°${commentaireDeleted.id_commentaire} a bien été supprimé.`
        res.json({message, data: commentaireDeleted })
      })
    })
  })

}