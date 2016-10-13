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
			validate: {
				notEmpty: {msg: "First name is required."}
			}
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: {msg: "Last name is required."}
			}
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: {msg: "Address is required."}
			}
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isEmail: {msg: "Valid email required"}
			}
		},
		library_id: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: {msg: "Library ID is required."}
			}
		},
		zip_code: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				isNumeric: {msg: "Zip code must be all numbers"}
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