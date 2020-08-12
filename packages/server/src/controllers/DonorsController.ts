import { Request, Response } from 'express';
import connection from '../database/connection';
import crypto from 'crypto';
import Donor from '../models/Donor';

class DonorsController {
  async index(response: Response) {
    
    let isQueryFailed: boolean = false;
    let donors;

    connection.query('SELECT * FROM donors', (err, result) => {
      if (err) {
        isQueryFailed = true;
      } else {
        donors = result.rows;
      }
    });

    if (isQueryFailed) {
      return response.json({ message: '[!] Database Error!' });
    }

    return response.json(donors);
  }

  async create(request: Request, response: Response) {
    const id = crypto.randomBytes(8).toString();
    const { name, email, blood } = request.body;

    if (name == "" || email == "" || blood == "") {
      return response.send('[!] Todos os campos são obrigatórios!');
    }

    const donor = new Donor(id, name, email, blood);
    
    const query = `
      INSERT INTO donors ("id", "name", "email", "blood")
      VALUES ($1, $2, $3, $4)`;

    const values = [donor.id, donor.name, donor.email, donor.blood];

    connection.query(query, values, function(err) {
      if (err) {
        return response.send('[!] Database Error to insert!');
      }

      return response.redirect('/');
    });
    
  }
}

export default DonorsController;
