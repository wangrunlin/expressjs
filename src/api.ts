import express from 'express';
import cors from 'cors';

export const app = express();

app.use(cors({ origin: true }));

app.use(express.json());
app.use(express.raw({ type: 'application/vnd.custom-type' }));
app.use(express.text({ type: 'text/html' }));

// Healthcheck endpoint
app.get('/', (req, res) => {
  res.status(200).send({ status: 'ok' });
});

const api = express.Router();

api.get('/hello', (req, res) => {
  res.status(200).send({ message: 'hello world' });
});

api.get('/test', (req, res) => {
  res.status(200).send({ message: 'test' });
});

api.get('/:message', (req, res) => {
  const message = req.message;
  res.status(200).send({ message });
})

// Version the api
app.use('/api/v1', api);
