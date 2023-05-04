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
          .send(new HttpResponse(Code.OK, Status.OK, 'Found users', users));
    }
    catch(error: unknown) {
        console.log(error);
        return res.status(Code.INTERNAL_SERVER_ERROR)
          .send(new HttpResponse(Code.INTERNAL_SERVER_ERROR, Status.INTERNAL_SERVER_ERROR, "Internal server error"));
    }
}

export const locateUser = async (req: Request, res: Response): Promise<Response<any>> => {
    try {
        console.log(req.params);
        if(!req.params.username) {
            return res.status(Code.BAD_REQUEST)
            .send(new HttpResponse(Code.BAD_REQUEST, Status.BAD_REQUEST, "Search parameters missing"));
        }

        const searchparam = req.params.username;
        const query = { username: searchparam };
        const findUser = user.find(query);

        console.log(findUser);

        return res.status(Code.OK)
          .send(new HttpResponse(Code.OK, Status.OK, 'Found user', findUser));
    }
    catch(error: unknown) {
        console.log(error);
        return res.status(Code.INTERNAL_SERVER_ERROR)
        .send(new HttpResponse(Code.INTERNAL_SERVER_ERROR, Status.INTERNAL_SERVER_ERROR, "Internal server error"));
    }
}

/*
export const changeAccountDetails = async (req: Request, res: Response): Promise<Response<void>> => {
    try {
        const account = req.body.account;

    }
    catch(error: unknown) {

    }
}
*/