import { getRealtimeHome } from '../network/slApiCalls';
import express, { Request, Response, NextFunction }  from 'express';
import verror from 'verror';


export const getRealtimeSLStatus =
  ((req: Response, res: Response, next: NextFunction) => getRealtimeHome()
    .then((response) => {
      if (response.data.StatusCode !== 0) {
        // Error
        const err = verror('Invalid Statuscode from request');
        err.name = 'ResponseError';
        err.response = response;
        throw err;
      }
      return res.status(200).json(response.data);
    })
    .catch((err) => {
      if (err.name === 'ResponseError') {
        console.log(err);
        console.log(err.response);
      }
      next(err);
    })
);
