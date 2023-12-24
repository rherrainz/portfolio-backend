import {Router} from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.render('indexRouter')
});

export default router;