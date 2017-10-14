var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'portfolio';
	locals.filters = {
		category: req.params.category,
	};
	locals.data = {
		projects: [],
	};


	// Load the posts
	view.on('init', function (next) {

		var q = keystone.list('Project').model.find({"state" : "published"}).populate('selectedImage projectImages subCategories tags');


		q.exec(function (err, results) {
			locals.data.projects = results;
			next(err);
		});
	});

	// Render the view
	view.render('portfolio');
};

