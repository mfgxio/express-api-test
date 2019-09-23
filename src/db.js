import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';

export const db = new JsonDB(new Config(`${__dirname}/db.json`, true, true, '/'));
