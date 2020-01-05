import express from 'express';
import routes from './routes';
import './database'

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();

  }//esse metodo e chamado automaticamente quanto eu instanciar minha class

  middlewares() {
    this.server.use(express.json());//minha aplicação ja está pronta para receber requisições no formato json


  }

  routes() {
    this.server.use(routes);

  }
}//class app 'minha class que representará meu app'

export default new App().server;//exporta para fora