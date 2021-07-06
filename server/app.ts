import express from 'express';

const app = express();
const PORT = 9000 || process.env.PORT;

app.get('/', (req, res) => {
	res.send('Hello from server');
});
app.listen(PORT, () => console.log(`Server has started on ${PORT} port`));
