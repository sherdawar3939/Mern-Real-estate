import express from 'express';
import { signin, userAuth } from '../controllers/auth-controller.js';

const router = express.Router();

router.post('/signup', userAuth);
router.post('/signin', signin)

export default router