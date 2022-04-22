import { Router } from "express";
import { isAuthenticated } from "../../shared/middlewares/authenticatedMiddleware";
import { getUserByIdController, getUsersController } from "../controllers/userControllers";

const router: Router = Router();

router.get('/api/users', isAuthenticated(), getUsersController);
router.get('/api/users/:id', isAuthenticated(), getUserByIdController);

export default router;
