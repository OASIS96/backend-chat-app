import { Router } from "express";
import { LoginUser } from "../controllers/users.controller";

const router = Router();

router.post("/login", LoginUser);

export default router;
