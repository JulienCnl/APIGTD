module.exports = (sequelize, DataTypes) => {
    return sequelize.define('UserRole', {
      utilisateur_id: {
        type: DataTypes.INTEGER,
        references: {model: 'Utilisateurs', key: 'id_utilisateur'},
        allowNull: false
      },
      role_id: {
        type: DataTypes.INTEGER,
        references: {model: 'Roles', key: 'id_role'},
        allowNull: false
      },
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }