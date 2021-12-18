module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Commentaire', {
      id_commentaire: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      contenu: {
        type: DataTypes.STRING,
        allowNull: false
      },
      usr_id: {
        type: DataTypes.INTEGER,
        references: {model: 'Utilisateurs', key: 'id_utilisateur'},
        allowNull: false
      },
      post_id: {
        type: DataTypes.INTEGER,
        references: {model: 'Posts', key: 'id_post'},
        allowNull: false
      },
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }