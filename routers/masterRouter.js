/* eslint-disable import/extensions */
import { Router } from 'express';

import userRouter from './usersRouter.js';
import authRouter from './authRouter.js';
import postsRouter from './postsRouter.js';
import hashtagRouter from './hashtagRouter.js';
import likeRouter from './likeRouter.js';

const router = Router();

router.use(userRouter);
router.use(authRouter);
router.use(postsRouter);
router.use(hashtagRouter);
router.use(likeRouter);

export default router;
