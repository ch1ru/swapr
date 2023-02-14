import express, { Request, Response, Application } from 'express';
import cors, { CorsOptions } from 'cors';
import { HttpResponse } from './http/response';
import { Code } from './http/code.enum';
import { Status } from './http/status.enum';
import { options } from './config/cors/options'
import ip from 'ip';
import peerRoutes from './routes/peers.routes';
import registerRoutes from './routes/register.routes';

const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const createError = require('http-errors');
const { config } = require('dotenv');
const app = express();

config(); //dotenv

export class App {
    private readonly app: Application;
    private readonly APPLICATION_RUNNING = 'application is running on:';
    private readonly ROUTE_NOT_FOUND = 'Route does not exist on the server';
  
    constructor(private readonly port: (string | number) = process.env.PORT || 4000) {
      this.port = port;
      this.app = express();
      this.middleWare(options);
      this.connectDB();
      this.routes();
    }
  
    listen(): void {
      this.app.listen(this.port);
      console.info(`${this.APPLICATION_RUNNING} ${ip.address()}:${this.port}`);
    }
  
    private middleWare(corsOptions: CorsOptions): void {
      this.app.use(cors(corsOptions));
      this.app.use(express.json());
      this.app.use(cookieParser());
    }

    private routes(): void {
        this.app.use("/peers", peerRoutes);
        this.app.use("/register", registerRoutes);
        this.app.all('*', (_: Request, res: Response)=> res.status(Code.NOT_FOUND).send(new HttpResponse(Code.NOT_FOUND, Status.NOT_FOUND, this.ROUTE_NOT_FOUND)));
    }

    private connectDB(): void {
        //connect to mongodb
        mongoose.connect(
            'mongodb://mongo:27017/userdb',
            { useNewUrlParser: true }
        )
        .then(() => console.log('MongoDB Connected'))
        .catch((err: unknown) => console.log(err));
    }
}