import { Request, Response } from 'express';
import { HttpResponse } from '../http/response';
import { Status } from '../http/status.enum';
import { Code } from '../http/code.enum';
import user from '../../models/user';

export const users = async (req: Request, res: Response): Promise<Response<any>> => {
    try {
        const users = await user.find();
          
          console.log(users);

          return res.status(Code.OK)
          .send(new HttpResponse(Code.OK, Status.OK, 'Created user', users));
    }
    catch(error: unknown) {
        console.log(error);
        return res.status(Code.INTERNAL_SERVER_ERROR)
          .send(new HttpResponse(Code.INTERNAL_SERVER_ERROR, Status.INTERNAL_SERVER_ERROR, "Internal server error"));
    }
}