var express= require("express");
var router= express.Router();

var burger= require("../models/burger.js")

router.get('/', function(req, res){
	burger.selectAll(function(data){
		res.render('index', {burgs: data});
	});
});

router.post('/addBurger', function(req, res){
	burger.insertBurger("burger_name", req.body.burgerInput, function(){
		console.log(req.body.burgerInput);	
		res.redirect('/');
	});
	
});

module.exports= router; 