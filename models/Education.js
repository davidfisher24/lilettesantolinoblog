var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Curriculum Model
 * ==========
 */

var Education = new keystone.List('education', {
	map: { name: 'title' },
	label: "Education",
	singular: "Education",
});

Education.add({
	title: { type: String, required: true, default: ''},
	description: { type: String },
	from: { type: Types.Date},
	to: { type: Types.Date},
	display: { type: Types.Boolean, default: true }
});



Education.defaultColumns = 'title';
Education.register();
