import express from 'express';
import slroutes from './slRoutes';

const router :express.Application.router = express.Router();


router.get('/', ((req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(200).send('hello to the new world!');
}));

router.use('/sl', slroutes);


export default router;
