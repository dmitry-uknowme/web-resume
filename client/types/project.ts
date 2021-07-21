export default interface IProject {
	_id: string;
	name: string;
	description?: string;
	images?: string[];
	video?: string;
	repoLink?: string;
	demoLink?: string;
}
