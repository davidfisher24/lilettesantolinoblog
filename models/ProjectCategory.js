var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Project Category Model
 * ==================
 */

var ProjectCategory = new keystone.List('ProjectCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
});

ProjectCategory.add({
	mainCategory: { type: Types.Select, options: 'Graphic, Fashion', default: 'Graphic', index: true },
	name: { type: String, required: true },
});

ProjectCategory.relationship({ ref: 'Project', path: 'Projects', refPath: 'subCategories' });

ProjectCategory.register();
