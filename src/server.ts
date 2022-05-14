import express, { query } from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json({limit: '100mb'}));
app.use(routes)

app.listen(3333, () => {
    console.log('Server started on port 3333');
});
