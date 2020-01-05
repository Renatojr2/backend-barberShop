import { Router } from 'express';
import User from './app/models/user';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'renato ferreira da silva',
    email: 'momentum313@gmail.com',
    password_hash: '1234',
  }).catch((err) => {
    console.log(err)
  })

  return res.json(user);
})


export default routes;