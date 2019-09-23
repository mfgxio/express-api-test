import 'source-map-support/register';
import express from 'express';
import { db } from './db';
import { PORT } from './config';

const server = express();

server.get('/todo', (request, response) => {
  response.send(db.getData('/todo'));
});

server.listen(PORT, () => console.log(`To Do API listening on port ${PORT}.`));
