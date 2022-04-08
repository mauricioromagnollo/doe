const express = require('express');
const { Pool } = require('pg');
const dotenv = require('dotenv');
const cors = require('cors');

const server = express();
dotenv.config({
  path: __dirname + '/../.env.dev'
});

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const db = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DATABASE
});

function Donor({ name, email, blood }) {
  this.name = name;
  this.email = email;
  this.blood = blood;
};

server.get('/donors', (request, response) => {
  db.query('SELECT * FROM donors', (err, result) => {
    if (err) { 
      return response.send('Erro no Banco de Dados');
    }

    const donors = result.rows;
    return response.render('./index.html', { donors });
  })
});

server.post('/donors', (request, response) => {
  const name = request.body.name;
  const email = request.body.email;
  const blood = request.body.blood;

  if (name == "" || email == "" || blood == "") {
    return response.send('Todos os Campos São Obrigatórios');  
  }

  const donor = new Donor({ name, email, blood });

  const query =`
    INSERT INTO donors ("name", "email", "blood") 
    VALUES ($1, $2, $3)`
  
  const values = [donor.name, donor.email, donor.blood];
  
  db.query(query, values, function(err) {
    if (err) return response.send('Erro no Banco de Dados');

    return response.redirect('/');
  })

});

server.listen(process.env.PORT, () => console.log(`[*] Server running at ${process.env.URL}:${process.env.PORT} !`));
