var keystone = require('keystone');

/**
 * Project Category Model
 * ==================
 */

var ProjectTag = new keystone.List('ProjectTag', {
	autokey: { from: 'name', path: 'key', unique: true },
});

ProjectTag.add({
	name: { type: String, required: true },
});

ProjectTag.relationship({ ref: 'Project', path: 'Projects', refPath: 'tags' });

ProjectTag.register();
