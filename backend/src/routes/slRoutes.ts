import express from 'express';
import { getRealtimeSLStatus } from '../controllers/slController';

const router : express.Router = express.Router();
router.use('/getHomeStatus', getRealtimeSLStatus);


export default router;
