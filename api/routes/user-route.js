import Express from "express";
import { test, updateUser } from "../controllers/user-controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = Express.Router();

router.get("/api/user", test);
router.post("/update/:id", verifyToken, updateUser);

export default router;
