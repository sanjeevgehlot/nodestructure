var models = require('../models');
var sequelize = require('../common/mysql');

var Users = models.Users;


//查询所有
exports.getAllTasksQuery = (query, cb) => {
	

	var statement = "SELECT * FROM tb_user";
	sequelize.query(statement).then((data) => {
		cb(data);
	});
};

exports.getTotalCount = (query, cb) => {

	var statement = "SELECT count(*) as totalCount FROM tb_user";
	sequelize.query(statement).then((data) => {
		cb(data);
	});
};

