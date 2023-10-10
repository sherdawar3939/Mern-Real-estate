import Express   from "express";
import { test } from "../controllers/user-controller.js";

const router = Express.Router();

router.get('/api/user', test);

export default router