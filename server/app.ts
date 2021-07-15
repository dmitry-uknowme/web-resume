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

// const project = new projectModel({
// 	name: 'Dostupny dom',
// 	description: 'My first production project in company',
// 	images: ['project1_1.png'],
// 	repoLink: 'https://github.com/dmitry-uknowme/uleu-dostupny-dom',
// 	demoLink: 'https://new-dostupny.web.app',
// });
// project.save();
// console.log('Saved');

app.listen(PORT, () => console.log(`Server has started on ${PORT} port`));
