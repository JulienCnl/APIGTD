module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Pokemon', {
      id_pokemon: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nom: {
        type: DataTypes.STRING,
        allowNull: false
      },
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }