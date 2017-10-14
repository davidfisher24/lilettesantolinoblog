var keystone = require('keystone'),
Types = keystone.Field.Types;

/**
 * Project Image Model
 * ==================
*/

var ProjectImage = new keystone.List('ProjectImage', {
    map: { name: 'name' },
    autokey: { path: 'slug', from: 'name', unique: true },
    label: "Project Images",
	singular: "Project Image",
	plural: "Project Images",
});

ProjectImage.add({
    name: { type: String, required: true, label: 'Reference Name' },
    title: { type: String, label: 'Image Title' },
    image: { type: Types.CloudinaryImage, autoCleanup: true, required: true, initial: false, label: 'Image' },
    description: { type: Types.Textarea, height: 50, label: 'Text Description' },
});

ProjectImage.relationship({ ref: 'Project', refPath: 'projectImages' });

ProjectImage.register();