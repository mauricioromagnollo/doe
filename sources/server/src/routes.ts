import express, { Request, Response } from 'express';
import DonorsController from './controllers/DonorsController';

const routes = express.Router();

const donorsController = new DonorsController();

routes.get('/', donorsController.index);
routes.post('/', donorsController.create);

export default routes;
