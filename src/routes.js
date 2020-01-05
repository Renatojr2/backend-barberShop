import { Router } from 'express';
import userController from './app/controller/userController';

const routes = new Router();
routes.post('/users', userController.store)


export default routes;