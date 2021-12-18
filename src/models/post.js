module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Post', {
      id_post: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      usr_id: {
        type: DataTypes.INTEGER,
        references: {model: 'Utilisateurs', key: 'id_utilisateur'},
        allowNull: false
      },
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }