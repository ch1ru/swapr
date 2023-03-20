import { Request, Response } from 'express';
import { HttpResponse } from '../http/response';
import { Status } from '../http/status.enum';
import { Code } from '../http/code.enum';

export const peerInfo = async (req: Request, res: Response): Promise<any> => {
    try {
        let peers = [{
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
            id: 1,
            name: "mr blobby",
            active: true,
            isOnline: true,
          },
          {
            image:
              "https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg",
            id: 2,
            name: "Ayub Rossi",
            active: false,
            isOnline: false,
          }]

          return res.status(Code.OK)
          .send(new HttpResponse(Code.OK, Status.OK, 'peers', {peers: peers}));
    }
    catch(error: unknown) {
        return res.status(Code.INTERNAL_SERVER_ERROR)
        .send(new HttpResponse(Code.INTERNAL_SERVER_ERROR, Status.INTERNAL_SERVER_ERROR, 'error'));
    }
}