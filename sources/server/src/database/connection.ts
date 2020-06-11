import { Pool } from 'pg';

const connection = new Pool({
  user: process.env.SERVER_DOE_DB_USER,
  password: process.env.SERVER_DOE_DB_PASSWORD,
  host: process.env.SERVER_DOE_DB_HOST,
  port: Number(process.env.SERVER_DOE_DB_PORT),
  database: process.env.SERVER_DOE_DB_NAME
});

export default connection;
