var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Curriculum Model
 * ==========
 */

var Experience = new keystone.List('experience', {
	map: { name: 'title' },
	label: "Experience",
	singular: "Experience",
});

Experience.add({
	title: { type: String, required: true, default: ''},
	description: { type: String },
	from: { type: Types.Date},
	to: { type: Types.Date},
	display: { type: Types.Boolean, default: true }
});



Experience.defaultColumns = 'title';
Experience.register();