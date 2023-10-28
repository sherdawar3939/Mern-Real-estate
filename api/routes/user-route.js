import Express from "express";
import { deleteUser, getUser, getUserListings, updateUser } from "../controllers/user-controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = Express.Router();

router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/listing/:id", verifyToken, getUserListings);
router.get("/:id", verifyToken, getUser);

export default router;
