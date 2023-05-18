import { Router } from "express";
import { getCurrentUser, loginUser, signUp } from "../controllers/authController";

const router:Router = Router();

// "api/auth/login", "api/auth/signup",  getcurrentuser... etc...
router.post("/login", loginUser);
router.post("/signup", signUp);
router.get("/currentuser", getCurrentUser);


export default router;