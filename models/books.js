/** Model for SQLite books table */
(function() {
'use strict';

module.exports = function(sequelize, DataTypes) {
  var books = sequelize.define('books', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
	  notEmpty: true,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
	  notEmpty: true,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
	  notEmpty: true,
    },
    first_published: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      isNumeric: {
        msg: "Year should be of the format YYYY"
      }
    }
  }
}, {
    classMethods: {
      associate: function(models) {
         books.hasMany(models.loans, {foreignKey: 'book_id'});
      }
    },
    timestamps: false
  });
  return books;
};

})();