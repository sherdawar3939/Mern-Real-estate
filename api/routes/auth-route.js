import express from 'express';
import { userAuth } from '../controllers/auth-controller.js';

const router = express.Router();

router.post('/sign-up', userAuth);

export default router