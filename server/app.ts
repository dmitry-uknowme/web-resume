import express from 'express';
import db from './DB';
import schemas from './DB/schemas';

const { projectModel } = schemas;

const app = express();
const PORT = 9000 || process.env.PORT;

app.use(express.static('static'));

app.get('/', (req, res) => {
	res.send('Hello from server');
});

app.get('/api/projects', async (req, res) => {
	await projectModel.find((err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json(result);
		}
	});
});

db.once('open', () => console.log('DB connected'));

const project = new projectModel({
	name: 'Elbrus Dom',
	description: "Project was developed for hometown's company, which specializes in the construction of buildings",
	images: ['project3_1.png'],
	repoLink: 'https://github.com/dmitry-uknowme/uleu-elbrus',
	demoLink: 'https://elbrus-ufa.ru',
});
// project.save();
// console.log('Saved');

app.listen(PORT, () => console.log(`Server has started on ${PORT} port`));
