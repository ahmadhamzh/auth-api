'use strict';
// 
// require('dotenv').config()
const { Sequelize, DataTypes } = require('sequelize');
const userModel = require('./users-auth');
const clothesModel = require('./clothes/model');
const foodModel = require('./food/model');
const Collection = require('./data-collection.js');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory;';
console.log(DATABASE_URL);

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
} : {};



const sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);

const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  users: userModel(sequelize, DataTypes),
  food: new Collection(food),
  clothes: new Collection(clothes),
}