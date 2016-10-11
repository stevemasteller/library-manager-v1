/** Model for SQLite patrons table */
(function() {
'use strict';

module.exports = function(sequelize, DataTypes) {
  var patrons = sequelize.define('patrons', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
	  notEmpty: true,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
	  notEmpty: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
	  notEmpty: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
	  notEmpty: true,
      validate: {
        isEmail: {
          msg: "Valid email required"
        }
      }
    },
    library_id: {
      type: DataTypes.STRING,
      allowNull: false,
	  notEmpty: true,
    },
    zip_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
	  notEmpty: true,
      validate: {
        isNumeric: {
          msg: "Zip code must be all numbers"
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        patrons.hasMany(models.loans, {foreignKey: 'patron_id'});
      }
    },
    timestamps: false  
  });
  return patrons;
};

})();