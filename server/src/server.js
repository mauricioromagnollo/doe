const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const crypto = require('crypto');
const { join } = require('path');
const { Pool } = require('pg');

const server = express();

const currentDir = __dirname

dotenv.config({
  path: join(currentDir, '../', '.env.dev')
});

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const db = new Pool({
  user: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  database: process.env.POSTGRES_DATABASE
});

function Donor({ name, email, blood }) {
  this.name = name;
  this.email = email;
  this.blood = blood;
};

server.get('/donors', (request, response) => {
  let donors = []

  // db.query('SELECT * FROM DONOR', (err, result) => {
  //   if (err) { 
  //     return response.send('Erro no Banco de Dados');
  //   }

  //   donors = result.rows ? result.rows : [];
  // })

  db.connect((err, client, release) => {
    if (err) { 
      return response.send('Erro no Banco de Dados');
    }

    client.query('SELECT * FROM DONOR', (err, result) => {
      release();
      if (err) { 
        return response.send('Erro no Banco de Dados');
      }

      donors = result.rows ? result.rows : [];
    })

  })

  return response.status(200).json(donors);
});

server.post('/donors', (request, response) => {
  const name = request.body.name;
  const email = request.body.email;
  const blood = request.body.blood;

  if (name == "" || email == "" || blood == "") {
    return response.send('Todos os Campos São Obrigatórios');  
  }

  const donor = new Donor({ id: crypto.randomUUID(), name, email, blood });

  const query =`
    INSERT INTO DONOR ("id", "name", "email", "blood") 
    VALUES ($1, $2, $3, $4)`
  
  const values = [donor.id, donor.name, donor.email, donor.blood];
  
  db.query(query, values, function(err) {
    if (err) {
      return response.status(400).json({ error: 'Erro na criação do donor' });
    }
  });

  return response.status(201).json(donor);

});

server.listen(process.env.PORT, () => console.log(`[*] Server running at ${process.env.URL}:${process.env.PORT} !`));
