import 'dotenv/config';
import express from 'express';

const port = process.env.PORT;

const app = express();

app.listen(3000, () => {
	console.log(`App listening on port ${port}`);
});
