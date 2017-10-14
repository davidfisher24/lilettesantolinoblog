var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Curriculum Model
 * ==========
 */

var Curriculum = new keystone.List('curriculum', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
	label: "My CV",
	singular: "My CV",
	nocreate: true,
	nodelete: true
});

Curriculum.add({
	title: { type: String, required: true, noedit: true, hidden: true },
	heading: { type: String },
	image: { type: Types.CloudinaryImage },
	description: { type: String },
});



Curriculum.defaultColumns = 'title';
Curriculum.register();
