var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Curriculum Model
 * ==========
 */

var Skill = new keystone.List('skill', {
	map: { name: 'title' },
	label: "Skill",
	singular: "Skill",
});

Skill.add({
	title: { type: String, required: true, default: ''},
	description: { type: String },
	display: { type: Types.Boolean, default: true }
});



Skill.defaultColumns = 'title';
Skill.register();