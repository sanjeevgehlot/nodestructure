/*user model*/
var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var Users = sequelize.define('tb_user', {
	id: {
		type: Sequelize.BIGINT(11),
		autoIncrement: true,
		primaryKey: true,
		unique: true,
		allowNull: false
	},
	username: {
		type: Sequelize.STRING(50),
		allowNull: false,
		unique: true

	},
	password: {
		type: Sequelize.STRING(50),
		allowNull: false
	},
	role: {
		type: Sequelize.BIGINT(11),
		allowNull: false
	},
	name: {
		type: Sequelize.STRING(50),
		allowNull: false
	},
	photo: {
		type: Sequelize.STRING(200)
	}

}, {
	underscored: true,
	timestamps: false,
	createAt: false,
	paranoid: true
});

// Users.sync({
// 	force: false
// }).then(function() {
// 	// Table created
// 	return Users.create({
// 		username: 'admin',
// 		password: 'admin',
// 		role: 1,
// 		name: 'gnip',
// 		photo: 'http://nos.netease.com/house-public/bf37aa1e955b3a0e3798528fc3bcbd69.jpg'
// 	});
// });

module.exports = Users