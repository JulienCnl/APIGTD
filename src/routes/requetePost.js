const { Post } = require('../db/sequelize')
  
module.exports = (app) => {
  app.get('/api/post/', (req, res) => {
    Post.findAll()
      .then(post => {
        const message = 'Voici la liste des posts'
        res.json({ message, data: post })
      })
  })

  app.get('/api/post/:id', (req, res) => {
    Post.findByPk(req.params.id)
      .then(post => {
        const message = "Voici les données du post"
        res.json({ message, data: post })
      })
  })

  app.post('/api/post/', (req, res) => {
    Post.create(req.body)
      .then(post => {
        const message = `Le post a bien été crée.`
        res.json({ message, data: post })
      }).catch(error => {
          console.log(error)
      })
  })

  app.put('/api/post/:id', (req, res) => {
    const id = req.params.id
    Post.update(req.body, {
      where: { id_post: id }
    })
    .then(_ => {
      Post.findByPk(id).then(post => {
        const message = `Le post a bien été modifié.`
        res.json({message, data: post })
      })
    })
  })

  app.delete('/api/post/:id', (req, res) => {
    Post.findByPk(req.params.id).then(post => {
      const postDeleted = post;
      Post.destroy({
        where: { id_post: post.id_post }
      })
      .then(_ => {
        const message = `Le post avec l'identifiant n°${postDeleted.id_post} a bien été supprimé.`
        res.json({message, data: postDeleted })
      })
    })
  })

}