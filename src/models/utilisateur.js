module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Utilisateur', {
      id_utilisateur: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: true
      },
      pokemon_id: {
        type: DataTypes.INTEGER,
        references: {model: 'Pokemons', key: 'id_pokemon'},
        allowNull: true
      },
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }