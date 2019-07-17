var Users = require('../services').Users;
var config = require('../config');
var async = require('async');

exports.list = (req, res, next) => {
	var query = {};
	// query.userId = req.query.userId;
	// query.keyword = req.query.keyword;
	// var pageNum = query.pageNum = req.query.pageNum;
	// var pageSize = query.pageSize = req.query.pageSize || 10;
	console.log(req.query);
	async.series({
		total: (cb) => {
			Users.getTotalCount(query, (rows) => {
				cb(null, rows[0]);
			});
		},
		list: (cb) => {
			Users.getAllTasksQuery(query, (rows) => {
				cb(null, rows[0])
			});
		}

	}, (err, ret) => {
		var totalCount = ret.total.totalCount;
		//var totalPage = totalCount % pageSize == 0 ? totalCount / pageSize : Math.ceil(totalCount / pageSize);
		var data = {
			status: "success",
			totalCount: totalCount,
			list: ret.list
			
		};
		res.json(data);
	});

};
