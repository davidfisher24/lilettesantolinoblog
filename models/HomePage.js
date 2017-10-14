var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Curriculum Model
 * ==========
 */

var HomePage = new keystone.List('homePage', {
	map: { name: 'title' },
	label: "Home Page Content",
	singular: "Home Page Content",
	nocreate: true,
	nodelete: true
});

HomePage.add({
	title: { type: String, required: true, noedit: true, hidden: true },
	contentTitle: { type: Types.Html, wysiwyg: true, 'wysiwyg cloudinary images': false,  height: 150, label: 'Title Content' },
	contentDescription: { type: Types.Html, wysiwyg: true, 'wysiwyg cloudinary images': false,  height: 150, label: 'Description Content' },
});



HomePage.defaultColumns = 'title';
HomePage.register();
