import { App } from './app'
import dotenv from 'dotenv';

dotenv.config();

const start = (): void => {

  //Needs 2 applications, for roblox servers and web app
  let port = process.env.PORT;
  const app = new App(port);
  
  app.listen();
}

start();