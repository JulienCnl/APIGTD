module.exports = (sequelize, DataTypes) => {
    return sequelize.define('FriendShip', {
      id_friendship: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      accepted: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      usr2_id: {
        type: DataTypes.INTEGER,
        references: {model: 'Utilisateurs', key: 'id_utilisateur'},
        allowNull: false
      },
      usr1_id: {
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