const SERVER_PORT = 3000;

const express = require('express');
const server = express();

server.use(express.static('public'));

server.use(express.urlencoded({ extended: true }));

const Pool = require('pg').Pool;

const db = new Pool({
  user: 'x0n4d0',
  password: '12345',
  host: 'localhost',
  post: 5432,
  database: 'doe'
});

function Donor(name, email, blood) {
  this.name = name;
  this.email = email;
  this.blood = blood;
};

// Template Engine
const nunjucks = require('nunjucks');

nunjucks.configure('./', {
  express: server,
  noCache: true,
});

server.get('/', (request, response) => {
  db.query('SELECT * FROM donors', (err, result) => {
    if (err) return response.send('Erro no Banco de Dados');

    const donors = result.rows;
    return response.render('index.html', { donors });
  })
});

server.post('/', (request, response) => {
  const name = request.body.name;
  const email = request.body.email;
  const blood = request.body.blood;

  if (name == "" || email == "" || blood == "") {
    return response.send('Todos os Campos São Obrigatórios');  
  }

  const donor = new Donor(name, email, blood);

  const query =`
    INSERT INTO donors ("name", "email", "blood") 
    VALUES ($1, $2, $3)`
  
  const values = [donor.name, donor.email, donor.blood];
  
  db.query(query, values, function(err) {
    if (err) return response.send('Erro no Banco de Dados');

    return response.redirect('/');
  })

});

server.listen(SERVER_PORT, () => console.log('[*] Running Server...'));
