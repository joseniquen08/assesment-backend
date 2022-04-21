import { Router } from "express";
import { loginUserController, registerUserController } from "../controllers/authControllers";

const router: Router = Router();

router.post('/auth/local/register', registerUserController);
router.post('/auth/local/login', loginUserController);

export default router;
