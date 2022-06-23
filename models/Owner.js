const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Owner model
class Owner extends Model { }

// define table columns and configuration
Owner.init(
  {
    // TABLE COLUMN DEFINITIONS GO HERE
    id: {
      // use special Sequelize DataTypes object to provide what type of data it is
      type: DataTypes.INTEGER,
      // equivalent of SQL's 'NOT NULL' option
      allowNull: false,
      // instruct that this is the Primary Key
      primaryKey: true,
      // turn on auto increment
      autoIncrement: true
    },
    // owner_name: req.body.owner_name,
    // dog_name: req.body.dog_name,
    // dog_breed: req.body.dog_breed,
    // dog_size: req.body.dog_size,
    // location: req.body.location,
    // dog_personality: req.body.dog_personality,
    // email: req.body.email,
    // password: req.body.password
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        // this means that the username can be at x characters
        len: [4]
      }
    },
    owner_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dog_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dog_breed: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.GEOGRAPHY,
      allowNull: false
    },
    dog_description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 200
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        max: 50,
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6]
      }
    }
  },
  {
    // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))

    // pass in our imported sequelize connection (the direct connection to our database)
    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    // make it so our model name stays lowercase in the database
    modelName: 'owner'
  }
);

module.exports = Owner;