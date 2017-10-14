var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'project';
	locals.data = {
		project: {},
	};

	// Load the passed project
	view.on('init', function (next) {

		var q = keystone.list('Project').model.findById(req.params.project).populate('selectedImage projectImages subCategories tags ');

		q.exec(function (err, result) {
			locals.data.project = result;
			next(err);
		});

	});

	// Render the view
	view.render('project');
};
