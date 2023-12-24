import {Router} from 'express';
import userRouter from './userRouter.js';
import educationRouter from './educationRouter.js';
import projectsRouter from './projectsRouter.js';


const router = Router();

router.get('/', (req, res) => {
    res.send('indexRouter')
});

router.use('/user', userRouter);
router.use('/education', educationRouter);
router.use('/projects', projectsRouter);

export default router;