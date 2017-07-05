var orm = require('../config/orm.js');

var burger = {
	selectAll: function(cb){
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},

	insertBurger: function(col1, burgerName, cb){
		orm.insertBurger('burgers', col1, burgerName, function(res){
			cb(res);
		});
	}
}


module.exports = burger;