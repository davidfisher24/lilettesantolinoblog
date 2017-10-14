var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.data = {
		projects: [],
		content: {},
	};

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	// Load portfolio thumbnail images
	view.on('init', function (next) {

		var q = keystone.list('Project').model.find({"state" : "published"}).populate('selectedImage');


		q.exec(function (err, results) {
			locals.data.projects = results;
			next(err);
		});
	});

	// Load home page text
	view.on('init', function (next) {

		var q = keystone.list('homePage').model.findOne();


		q.exec(function (err, result) {
			locals.data.content = result;
			next(err);
		});
	});

	// Render the view
	view.render('index');
};
