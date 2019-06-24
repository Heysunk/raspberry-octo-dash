import express, { Response, Request, NextFunction } from 'express';
import Verror from 'verror';

const router :express.Router = express.Router();

router.use('*', (err: Verror ,req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  if (!res.headersSent) {
    res.status(500).send('Internal server error!');
  }
});


export default router;
