import { Router } from "express";
import { loginUserController, registerUserController } from "../controllers/authControllers";
import { authMiddleware, loginSchema, registerSchema } from '../middlewares/authMiddlewares';

const router: Router = Router();

router.post('/auth/local/register', authMiddleware(registerSchema), registerUserController);
router.post('/auth/local/login', authMiddleware(loginSchema), loginUserController);

export default router;
