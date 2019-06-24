import { getRealtimeHome } from '../network/slApiCalls';
import express, { Request, Response, NextFunction } from 'express';
import Verror, { info } from 'verror';

export const getRealtimeSLStatus =
  ((req: Request, res: Response, next: NextFunction) => getRealtimeHome()
    .then((response) => {
      if (response.data.StatusCode !== 0) {
        // Error
        const err = new Verror({ info: { response } }, 'Invalid Statuscode from request');
        err.name = 'ResponseError';
        throw err;
      }
      return res.status(200).json(response.data);
    })
    .catch((err) => {
      const error = new Verror(err, 'Error trying to get SL status');
      if (error.name === 'ResponseError') {
        console.log(error);
        console.log(err.response);
      }
      next(error);
    })
);
