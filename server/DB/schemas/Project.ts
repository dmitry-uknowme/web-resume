import { Schema, model } from 'mongoose';

const ObjectId = Schema.Types.ObjectId;
interface Project {
	name: string;
	description?: string;
	images: string[];
	video?: string;
	repoLink?: string;
	demoLink?: string;
}

const projectSchema = new Schema<Project>({
	id: ObjectId,
	name: { type: String, required: true },
	description: String,
	images: { type: Array, required: true },
	video: String,
	repoLink: String,
	demoLink: String,
});

const projectModel = model<Project>('Project', projectSchema);

export default projectModel;
