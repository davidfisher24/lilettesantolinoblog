var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Project Model
 * ==================
*/

var Project = new keystone.List('Project', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
	label: "My Projects",
	singular: "My Project",
	plural: "My Projects",
});

Project.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },

	content: { type: Types.Html, wysiwyg: true, 'wysiwyg cloudinary images': false,  height: 150, label: 'HTML Content' },

	mainCategory: { type: Types.Select, options: 'Graphic, Fashion', default: 'Graphic', index: true, label: 'Main-Category' },
	subCategories: { type: Types.Relationship, ref: 'ProjectCategory', many: true,  label: 'Sub-Categories' },

	tags: { type: Types.Relationship, ref: 'ProjectTag', many: true, label: 'Tags' },
	projectImages : { type: Types.Relationship, ref: 'ProjectImage', many: true, label: 'Project Images' },
	selectedImage: { type: Types.Relationship, ref: 'ProjectImage', many: false, label: 'Main Thumbnail Image'  },
});


Project.defaultColumns = 'title, state|20%';
Project.register();
