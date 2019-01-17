import { getRealtimeHome } from '../network/slApiCalls';
import express, { Request, Response, NextFunction }  from 'express';


export const getRealtimeSLStatus =
  ((req: Response, res: Response, next: NextFunction) => getRealtimeHome()
    .then((response) => {
      console.log(response.data);
      return res.send('ok!');
    })
);
