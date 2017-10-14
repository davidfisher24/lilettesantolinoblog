var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'curriculum';

	locals.data = {
		curriculum: {},
		skills: [],
		experiences: [],
		educations: [],
	};

	//view.query('curriculum', keystone.list('curriculum').model.findOne());

	// Set locals
	
	view.on('init', function (next) {

		var q1 = keystone.list('curriculum').model.findOne();

		q1.exec(function (err, result){
			locals.data.curriculum = result;
			next(err);
		});
	});

	view.on('init', function (next) {

		var q2 = keystone.list('experience').model.find();

		q2.exec(function (err, result){
			locals.data.experiences = result;
			next(err);
		});
	});

	view.on('init', function (next) {

		var q3 = keystone.list('skill').model.find();

		q3.exec(function (err, result){
			locals.data.skills = result;
			next(err);
		});
	});

	view.on('init', function (next) {

		var q4 = keystone.list('education').model.find();

		q4.exec(function (err, result){
			locals.data.educations = result;
			next(err);
		});
	});

	// Render the view
	view.render('curriculum');

};
