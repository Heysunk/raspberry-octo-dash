import express from 'express';
import slroutes from './slRoutes';
import errorRoutes from './errorRoutes';

const router :express.Router = express.Router();


router.get('/', ((req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(200).send('hello to the new world!');
}));

router.use('/sl', slroutes);


router.use('*', errorRoutes);


export default router;
