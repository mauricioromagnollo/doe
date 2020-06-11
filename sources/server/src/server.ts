import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();

const PORT = process.env.SERVER_DOE_PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(PORT, () => {
  console.log(`[*] Server runing on port: ${PORT}...`);
});
