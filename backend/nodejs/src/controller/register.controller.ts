import { Request, Response } from 'express';
import { HttpResponse } from '../http/response';
import { Status } from '../http/status.enum';
import { Code } from '../http/code.enum';
import user from '../../models/user';
import connectDB from '../config/mongo/db';

export const register = async (req: Request, res: Response): Promise<Response<any>> => {
    try {
        const { pubkey, username, message } = req.body;
        console.log("registering user");

        const newUser = await user.create({
            pubkey: 'Awesome Post!',
            username: 'awesome-post',
            bio: 'some bio',
            signature: 'This is the best post ever',
          });
          
          console.log(newUser);

          return res.status(Code.OK)
          .send(new HttpResponse(Code.OK, Status.OK, 'Created user', newUser));
    }
    catch(error: unknown) {
        console.log(error);
        return res.status(Code.INTERNAL_SERVER_ERROR)
          .send(new HttpResponse(Code.INTERNAL_SERVER_ERROR, Status.INTERNAL_SERVER_ERROR, "Internal server error"));
    }
}